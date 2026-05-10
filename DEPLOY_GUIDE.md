# 🚀 GitHub Trend 部署指南

## 当前发布地址

- https://cowbook.github.io/github-trends-daily/

## 部署方式说明

本项目使用 GitHub Actions + GitHub Pages Artifact 自动部署。

由于站点不是部署在域名根路径，而是部署在子路径：

- `/github-trends-daily/`

因此 `next.config.js` 中必须配置：

- `basePath: '/github-trends-daily'`
- `assetPrefix: '/github-trends-daily/'`

并且仅在 GitHub Actions 环境中启用，这样不会影响本地开发。

## 自动部署

当前工作流文件：

- `.github/workflows/deploy.yml`

触发条件：

- push 到 `main`
- 手动触发 `workflow_dispatch`

标准部署流程：

1. 推送代码到 `main`
2. GitHub Actions 自动执行 `npm ci`
3. GitHub Actions 自动执行 `npm run build`
4. 构建产物 `out/` 被上传到 GitHub Pages
5. GitHub Pages 自动发布站点

## GitHub Pages 设置

仓库 Settings → Pages 中应使用 GitHub Actions 作为部署来源，而不是 `gh-pages` 分支。

## 手动检查项

如果页面样式或静态资源加载失败，请优先检查：

1. `next.config.js` 是否配置了正确的 `basePath`
2. `next.config.js` 是否配置了正确的 `assetPrefix`
3. 发布地址是否与配置一致：`/github-trends-daily/`
4. 页面中是否存在写死的根路径资源引用

## 已知兼容性说明

- `app/favicon.ico` 已存在，布局元数据应引用 `/favicon.ico`
- 外链（例如 GitHub、Trending）不受 `basePath` 影响
- 当前首页为静态导出页面，适合 GitHub Pages 部署

## 更新网站内容

网站使用静态数据。如需更新 GitHub Trending 内容，请更新 `lib/data.ts` 文件中的 `staticData` 对象。
