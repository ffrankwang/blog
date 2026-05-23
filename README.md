# Frank 的博客

基于 [Hexo](https://hexo.io/) 8.x + [Fluid](https://hexo.fluid-dev.com/) 主题的静态博客，部署于 GitHub Pages：https://ffrankwang.github.io/

## 快速开始

```bash
npm install          # 安装依赖
npx hexo server      # 启动开发服务器 → http://localhost:4000
```

## 写文章

```bash
npx hexo new post "文章标题"   # 创建文章 → source/_posts/
npx hexo generate              # 生成静态文件
npx hexo deploy                # 部署到 GitHub Pages
```

也可以使用后台管理系统：启动服务器后访问 `/pro/`。

## 相册

访问地址：`/gallery/`，导航栏中位于归档和分类之间。

### 更新相册

1. 把照片放进 `gallery-photos/` 目录（项目根目录，仅本地保留）
2. 运行 `npm run gallery` — 读取原图，自动生成缩略图（500px）、显示图（1920px）、页面数据，按拍摄时间排序
3. `npx hexo generate && npx hexo deploy` — 发布（只部署压缩后的图片，不含原图）

### 相册目录结构

```
gallery-photos/             ← 放原图（仅本地，不提交不部署）
source/img/gallery/
├── thumb/                  ← 自动生成的缩略图（部署）
└── display/                ← 自动生成的显示图（部署）
```

## 技术栈

- Hexo 8.1.2
- Fluid 主题（暗黑模式、响应式）
- hexo-pro 后台管理
- lightGallery 相册
- sharp 图片处理
