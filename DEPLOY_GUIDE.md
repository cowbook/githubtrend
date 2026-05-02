# 🚀 GitHub Trend 部署指南

## 第一步：创建 GitHub 仓库

你需要手动在 GitHub 上创建仓库，步骤如下：

1. 打开 https://github.com/new
2. Repository name: `githubtrend`
3. 选择 Public
4. 不要勾选 "Add a README file"（我们已经有了）
5. 点击 "Create repository"

## 第二步：推送代码

创建仓库后，运行以下命令：

```bash
cd /Users/yanzhang/.mavis/agents/coder/workspace/githubtrend

# 添加远程仓库（如果还没有）
git remote add origin git@github.com:cowbook/githubtrend.git

# 推送代码
git push -u origin main
```

## 第三步：启用 GitHub Pages

1. 在仓库页面点击 "Settings"
2. 滚动到 "GitHub Pages" 部分
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "gh-pages"（推送后会自动创建）
5. 点击 "Save"

## 第四步：等待部署

GitHub Actions 会自动构建并部署网站。等待 2-3 分钟后，你的网站就可以访问了：
- https://cowbook.github.io/githubtrend

---

## 手动部署（如果自动部署失败）

如果 GitHub Actions 部署失败，你可以手动部署 `out` 目录：

```bash
cd /Users/yanzhang/.mavis/agents/coder/workspace/githubtrend

# 安装 gh CLI（如果还没有）
brew install gh

# 登录 GitHub
gh auth login

# 创建 gh-pages 分支
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push -f origin gh-pages
```

---

## 更新网站内容

网站使用静态数据。如需更新 GitHub Trending 内容，请更新 `lib/data.ts` 文件中的 `staticData` 对象。

## 自动化更新

如需每日自动更新，可以设置 GitHub Actions 定时任务抓取最新数据。