const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const PHOTOS_DIR = path.join(__dirname, '..', 'source', 'img', 'gallery', 'photos')
const THUMB_DIR = path.join(__dirname, '..', 'source', 'img', 'gallery', 'thumb')
const DISPLAY_DIR = path.join(__dirname, '..', 'source', 'img', 'gallery', 'display')
const DATA_FILE = path.join(__dirname, '..', 'source', 'gallery.json')
const THUMB_WIDTH = 500
const DISPLAY_WIDTH = 1920

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp']

function isImage(file) {
  const ext = path.extname(file).toLowerCase()
  return IMAGE_EXTENSIONS.includes(ext)
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

async function main() {
  ensureDir(path.dirname(DATA_FILE))
  ensureDir(PHOTOS_DIR)
  ensureDir(THUMB_DIR)
  ensureDir(DISPLAY_DIR)

  const files = fs.readdirSync(PHOTOS_DIR)
    .filter(f => isImage(f))
    .sort()

  if (files.length === 0) {
    console.log('Gallery: no photos found, writing empty list.')
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2))
    return
  }

  const gallery = []

  for (const file of files) {
    const photoPath = path.join(PHOTOS_DIR, file)
    const thumbPath = path.join(THUMB_DIR, file)
    const displayPath = path.join(DISPLAY_DIR, file)

    // Read EXIF shooting date (earliest date in EXIF = original shooting date), fall back to file mtime
    let shotDate = null
    try {
      const meta = await sharp(photoPath).metadata()
      if (meta.exif) {
        const dates = meta.exif.toString('binary')
          .match(/\d{4}:\d{2}:\d{2} \d{2}:\d{2}:\d{2}/g)
        if (dates && dates.length) {
          dates.sort()
          shotDate = new Date(dates[0].replace(/:/, '-').replace(/:/, '-'))
        }
      }
    } catch (e) { /* ignore, will use mtime */ }
    if (!shotDate || isNaN(shotDate.getTime())) {
      shotDate = fs.statSync(photoPath).mtime
    }

    if (!fs.existsSync(thumbPath)) {
      try {
        await sharp(photoPath)
          .resize(THUMB_WIDTH)
          .jpeg({ quality: 80 })
          .toFile(thumbPath)
        console.log(`  Thumb: ${file}`)
      } catch (err) {
        console.error(`  Skip: ${file} (${err.message})`)
        continue
      }
    }

    if (!fs.existsSync(displayPath)) {
      try {
        await sharp(photoPath)
          .resize(DISPLAY_WIDTH, DISPLAY_WIDTH, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 85 })
          .toFile(displayPath)
        console.log(`  Display: ${file}`)
      } catch (err) {
        console.error(`  Display skip: ${file} (${err.message})`)
        continue
      }
    }

    gallery.push({
      name: file,
      src: `/img/gallery/display/${file}`,
      thumb: `/img/gallery/thumb/${file}`,
      shotDate: shotDate.toISOString()
    })
  }

  gallery.sort((a, b) => b.shotDate.localeCompare(a.shotDate))

  const json = JSON.stringify(gallery, null, 2)
  fs.writeFileSync(DATA_FILE, json)
  console.log(`Gallery: ${gallery.length} photos written to source/gallery.json`)

  // Generate gallery page with inline data
  const pagePath = path.join(__dirname, '..', 'source', 'gallery', 'index.md')
  const pageContent = generatePage(gallery, json)
  fs.writeFileSync(pagePath, pageContent)
  console.log('Gallery: page written to source/gallery/index.md')
}

function generatePage(gallery, json) {
  const emptyMsg = gallery.length === 0
    ? '<p class="gallery-empty">还没有照片，敬请期待。</p>'
    : ''

  return `---
title: 相册
date: 2026-05-23 19:07:34
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.7.2/css/lightgallery-bundle.min.css">

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 20px;
}
.gallery-grid a {
  display: block;
  overflow: hidden;
  border-radius: 6px;
  aspect-ratio: 4/3;
  cursor: pointer;
}
.gallery-grid a img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.gallery-grid a:hover img {
  transform: scale(1.05);
}
.gallery-empty {
  text-align: center;
  color: #999;
  padding: 60px 0;
  font-size: 1.1em;
}

/* iOS-like smooth slide transition */
.lg-outer .lg-item {
  transition: transform 0.45s cubic-bezier(0.32, 0.72, 0, 1) !important;
}
.lg-outer.lg-direction-from-start .lg-item:not(.lg-next):not(.lg-prev),
.lg-outer.lg-direction-from-end .lg-item:not(.lg-next):not(.lg-prev) {
  transition: transform 0.45s cubic-bezier(0.32, 0.72, 0, 1) !important;
}
</style>

<div id="gallery-container">${emptyMsg}</div>

<script>
window.__GALLERY__ = ${json};
</script>

<script src="https://cdn.jsdelivr.net/npm/lightgallery@2.7.2/lightgallery.min.js"></script>

<script>
(function() {
  var photos = window.__GALLERY__;
  if (!photos || !photos.length) return;

  var html = '<div class="gallery-grid" id="gallery">';
  photos.forEach(function(p) {
    html += '<a href="' + p.src + '" data-sub-html="' + p.name + '">';
    html += '<img src="' + p.thumb + '" alt="' + p.name + '">';
    html += '</a>';
  });
  html += '</div>';
  document.getElementById('gallery-container').innerHTML = html;

  lightGallery(document.getElementById('gallery'), {
    selector: 'a',
    speed: 450,
    mode: 'lg-slide',
    download: false,
    preload: 2,
    hideBarsDelay: 3000,
    thumbnail: false,
    zoom: false,
    slideShowAutoplay: false,
    enableDrag: true,
    swipeThreshold: 50
  });
})();
</script>
`
}

main().catch(err => {
  console.error('Gallery error:', err)
  process.exit(1)
})
