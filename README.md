# GitHub Trend

📊 每日更新 GitHub Trending 热门项目，用幽默的方式解读技术趋势。

## 🌟 功能特点

- 📈 展示 GitHub 热门项目排行榜
- 🎭 幽默风趣的项目介绍
- 🌙 支持明暗主题切换
- 📱 响应式设计，适配各种设备
- ⚡ 基于 Next.js 构建，静态部署速度快

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/cowbook/githubtrend.git
cd githubtrend

# 安装依赖
npm install

# 本地开发
npm run dev

# 构建静态网站
npm run build
```

## 📦 部署到 GitHub Pages

本项目当前发布地址为：

- https://cowbook.github.io/github-trends-daily/

由于 GitHub Pages 部署在子路径 `/github-trends-daily/` 下，项目已在 `next.config.js` 中配置 `basePath` 和 `assetPrefix`，以确保静态资源和页面路径正确。

当前使用 GitHub Actions 部署 Pages Artifact，无需手动维护 `gh-pages` 分支。

## 🛠️ 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS 3
- **类型**: TypeScript
- **部署**: GitHub Pages

## 📝 项目结构

```
├── app/                  # Next.js App Router
│   ├── page.tsx          # 主页面
│   ├── layout.tsx        # 布局组件
│   └── globals.css       # 全局样式
├── components/           # React 组件
│   ├── Header.tsx        # 头部导航
│   ├── Hero.tsx          # 英雄区域
│   └── TrendingList.tsx  # 项目列表
├── lib/                  # 工具函数
│   ├── data.ts           # 静态数据
│   └── humor.ts          # 幽默内容生成
├── public/               # 静态资源
└── out/                  # 构建输出目录（静态文件）
```

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
