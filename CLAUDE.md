# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Hexo 5.4.0 static blog (Chinese-language, author: Frank Wang) using the Fluid theme. Deploys to GitHub Pages at `https://ffrankwang.github.io/`.

## Commands

```bash
# Install dependencies
npm install

# Start dev server (default http://localhost:4000)
npx hexo server

# Generate static files into public/
npx hexo generate

# Deploy to GitHub Pages
npx hexo deploy

# Create a new post (scaffold: scaffolds/post.md)
npx hexo new post "post-title"

# Create a new draft
npx hexo new draft "draft-title"

# Create a new page
npx hexo new page "page-name"

# Clean generated files and cache
npx hexo clean

# Admin panel available at /admin when dev server is running
```

## Architecture

Standard Hexo project layout:
- **`source/_posts/`** — All blog posts (Markdown with YAML frontmatter: `title`, `date`, `tags`)
- **`source/about/`**, **`source/resume/`**, etc. — Static pages
- **`source/img/`** — Images and assets referenced in posts
- **`scaffolds/`** — Templates for `hexo new` (post, draft, page)
- **`themes/`** — Installed themes (Fluid is the active theme; `landscape` and `yilia` are also present but unused)

## Configuration

Two config files control the site:

1. **`_config.yml`** — Hexo core config (site metadata, URL, deploy settings, hexo-admin auth). **Contains secrets — do not commit changes that add tokens or passwords.** Use environment variables or a separate uncommitted file for credentials.

2. **`_config.fluid.yml`** (987 lines) — Fluid theme config: dark mode, code highlighting (highlight.js with GitHub Gist style), typography, navbar colors, anchor links on headings, progress bar, favicon, custom CSS/JS paths, comment system, analytics, etc.

The admin panel (`hexo-admin` plugin) is configured in `_config.yml` with a username and bcrypt password hash.

## Post frontmatter

```yaml
---
title: post-title
date: 2016-02-10 08:26:03
tags: tag1
---
```

Categories and tags are supported. `post_asset_folder: true` means each post can have an associated asset directory.

## Plugins to be aware of

- **hexo-renderer-marked** — Markdown rendering (not Nunjucks/Markdown conflict sensitive)
- **hexo-renderer-ejs** / **hexo-renderer-stylus** — EJS templates and Stylus CSS preprocessing for the theme
- **hexo-admin** — Provides a web UI at `/admin`; auth configured in `_config.yml`
