#!/bin/bash

# GitHub Trend 部署脚本
# 用于将静态网站部署到 GitHub Pages

set -e

echo "🚀 开始部署 GitHub Trend..."

# 检查是否在正确的目录
if [ ! -d ".next" ] && [ ! -d "out" ]; then
  echo "📦 正在构建项目..."
  npm run build
fi

# 创建 gh-pages 分支（如果不存在）
if [ -d "out" ]; then
  echo "📂 部署 out 目录到 gh-pages 分支..."

  # 临时切换到 out 目录
  cd out

  # 初始化 git（如果是新目录）
  if [ ! -d ".git" ]; then
    git init
    git checkout -b gh-pages
  fi

  # 添加所有文件
  git add .

  # 提交更改
  git commit -m "Deploy to GitHub Pages - $(date '+%Y-%m-%d %H:%M:%S')"

  # 推送到远程
  echo "📤 正在推送到 GitHub..."
  git push -f origin gh-pages

  echo "✅ 部署完成！"
  echo "请在 GitHub 仓库设置中启用 GitHub Pages，选择 gh-pages 分支作为源。"
else
  echo "❌ 未找到构建输出目录 out/"
  echo "请先运行 npm run build"
fi