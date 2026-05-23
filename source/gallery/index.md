---
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

<div id="gallery-container"></div>

<script>
window.__GALLERY__ = [
  {
    "name": "DSC_1896.jpg",
    "src": "/img/gallery/display/DSC_1896.jpg",
    "thumb": "/img/gallery/thumb/DSC_1896.jpg",
    "mtime": "2025-12-14T15:23:28.602Z"
  },
  {
    "name": "DSC_1817.jpg",
    "src": "/img/gallery/display/DSC_1817.jpg",
    "thumb": "/img/gallery/thumb/DSC_1817.jpg",
    "mtime": "2025-12-14T15:17:53.074Z"
  },
  {
    "name": "DSC_1771.jpg",
    "src": "/img/gallery/display/DSC_1771.jpg",
    "thumb": "/img/gallery/thumb/DSC_1771.jpg",
    "mtime": "2025-12-14T15:05:26.791Z"
  },
  {
    "name": "DSC_1748.jpg",
    "src": "/img/gallery/display/DSC_1748.jpg",
    "thumb": "/img/gallery/thumb/DSC_1748.jpg",
    "mtime": "2025-12-14T11:29:49.670Z"
  },
  {
    "name": "DSC_1801.jpg",
    "src": "/img/gallery/display/DSC_1801.jpg",
    "thumb": "/img/gallery/thumb/DSC_1801.jpg",
    "mtime": "2025-12-14T11:29:31.093Z"
  },
  {
    "name": "DSC_1912.jpg",
    "src": "/img/gallery/display/DSC_1912.jpg",
    "thumb": "/img/gallery/thumb/DSC_1912.jpg",
    "mtime": "2025-12-14T11:28:00.664Z"
  },
  {
    "name": "DSC_1886.jpg",
    "src": "/img/gallery/display/DSC_1886.jpg",
    "thumb": "/img/gallery/thumb/DSC_1886.jpg",
    "mtime": "2025-12-14T11:27:22.959Z"
  },
  {
    "name": "DSC_1881.jpg",
    "src": "/img/gallery/display/DSC_1881.jpg",
    "thumb": "/img/gallery/thumb/DSC_1881.jpg",
    "mtime": "2025-12-14T11:26:43.677Z"
  },
  {
    "name": "DSC_1878.jpg",
    "src": "/img/gallery/display/DSC_1878.jpg",
    "thumb": "/img/gallery/thumb/DSC_1878.jpg",
    "mtime": "2025-12-14T11:25:53.141Z"
  },
  {
    "name": "DSC_1876.jpg",
    "src": "/img/gallery/display/DSC_1876.jpg",
    "thumb": "/img/gallery/thumb/DSC_1876.jpg",
    "mtime": "2025-12-14T11:25:24.151Z"
  },
  {
    "name": "DSC_1758.jpg",
    "src": "/img/gallery/display/DSC_1758.jpg",
    "thumb": "/img/gallery/thumb/DSC_1758.jpg",
    "mtime": "2025-12-14T11:23:40.142Z"
  },
  {
    "name": "DSC_1788.jpg",
    "src": "/img/gallery/display/DSC_1788.jpg",
    "thumb": "/img/gallery/thumb/DSC_1788.jpg",
    "mtime": "2025-12-14T11:23:10.746Z"
  },
  {
    "name": "DSC_1798.jpg",
    "src": "/img/gallery/display/DSC_1798.jpg",
    "thumb": "/img/gallery/thumb/DSC_1798.jpg",
    "mtime": "2025-12-14T11:22:33.277Z"
  },
  {
    "name": "DSC_1803.jpg",
    "src": "/img/gallery/display/DSC_1803.jpg",
    "thumb": "/img/gallery/thumb/DSC_1803.jpg",
    "mtime": "2025-12-14T11:21:57.139Z"
  },
  {
    "name": "DSC_1813.jpg",
    "src": "/img/gallery/display/DSC_1813.jpg",
    "thumb": "/img/gallery/thumb/DSC_1813.jpg",
    "mtime": "2025-12-14T11:21:34.057Z"
  },
  {
    "name": "DSC_1819.jpg",
    "src": "/img/gallery/display/DSC_1819.jpg",
    "thumb": "/img/gallery/thumb/DSC_1819.jpg",
    "mtime": "2025-12-14T11:20:24.615Z"
  },
  {
    "name": "DSC_1816.jpg",
    "src": "/img/gallery/display/DSC_1816.jpg",
    "thumb": "/img/gallery/thumb/DSC_1816.jpg",
    "mtime": "2025-12-14T11:19:37.006Z"
  },
  {
    "name": "DSC_1822.jpg",
    "src": "/img/gallery/display/DSC_1822.jpg",
    "thumb": "/img/gallery/thumb/DSC_1822.jpg",
    "mtime": "2025-12-14T11:18:38.521Z"
  },
  {
    "name": "DSC_1745.jpg",
    "src": "/img/gallery/display/DSC_1745.jpg",
    "thumb": "/img/gallery/thumb/DSC_1745.jpg",
    "mtime": "2025-12-07T09:35:29.767Z"
  },
  {
    "name": "DSC_1743.jpg",
    "src": "/img/gallery/display/DSC_1743.jpg",
    "thumb": "/img/gallery/thumb/DSC_1743.jpg",
    "mtime": "2025-12-07T09:35:28.479Z"
  },
  {
    "name": "DSC_1739.jpg",
    "src": "/img/gallery/display/DSC_1739.jpg",
    "thumb": "/img/gallery/thumb/DSC_1739.jpg",
    "mtime": "2025-12-07T09:35:24.776Z"
  },
  {
    "name": "DSC_1734.jpg",
    "src": "/img/gallery/display/DSC_1734.jpg",
    "thumb": "/img/gallery/thumb/DSC_1734.jpg",
    "mtime": "2025-12-07T09:35:22.810Z"
  },
  {
    "name": "DSC_1731.jpg",
    "src": "/img/gallery/display/DSC_1731.jpg",
    "thumb": "/img/gallery/thumb/DSC_1731.jpg",
    "mtime": "2025-12-07T09:35:19.381Z"
  },
  {
    "name": "DSC_1726.jpg",
    "src": "/img/gallery/display/DSC_1726.jpg",
    "thumb": "/img/gallery/thumb/DSC_1726.jpg",
    "mtime": "2025-12-07T09:35:16.290Z"
  }
];
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
