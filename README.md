# 📰 News App (React)

## 📝 项目简介
一个基于 React + React Router 构建的实时新闻聚合平台。通过集成第三方 News API，实现了全球热点新闻的分类浏览、实时搜索及多页面路由管理，提供流畅的单页应用（SPA）阅读体验。

## ✨ 功能特性
- ✅ **动态路由导航**：利用 `react-router-dom` 实现了首页头条与多垂直分类（科技、商业、娱乐等）的无缝跳转。
- ✅ **全功能搜索系统**：支持自定义关键词检索，并提供搜索结果实时统计与友好的空状态反馈。
- ✅ **智能交互体验**：
    - **自动回顶**：路由切换时通过 `ScrollToTop` 组件实现自动平滑滚动至顶部。
    - **动态网页标题**：随当前页面功能通过 `updateTitle` 工具自动更新浏览器标签页标题。
- ✅ **优雅的加载状态**：内置自定义 Loading 动画，并在图片加载失败时自动展示 Placeholder 占位图。

## 🛠️ 技术栈
- **框架**: React (Hooks: `useState`, `useEffect`, `useParams`)
- **路由**: React Router v6
- **接口库**: 模块化封装的 `fetch` API 请求工具
- **样式**: 响应式 `Flexbox` 布局

## 📸 项目预览

### 1. 首页头条
展示最新全球热点新闻，支持快速获取当前最受关注的资讯列表。
![screenshot1](./screenshots/screenshot1.png)

### 2. 分类浏览
支持商业、科技、娱乐、体育、健康等五大垂直领域的精准分类切换。
![screenshot2](./screenshots/screenshot2.png)

### 3. 实时搜索反馈
支持基于关键词的全文检索，并实时展示搜索命中的结果总数。
![screenshot3](./screenshots/screenshot3.png)

### 4. 搜索空状态处理
针对无匹配结果的情况，提供直观的图形化提示与操作引导。
![screenshot4](./screenshots/screenshot4.png)


## 🚀 本地运行

### 1. 获取 API Key
由于新闻数据由第三方提供，运行前需获取个人 API Key：
1. 访问 [NewsAPI](https://newsapi.org/register)
2. 注册账号（免费）
3. 在 Dashboard 获取你的 API Key
4. 将 API Key 填入 `src/utils/api.js` 文件：
```javascript
   const API_KEY = "你的API_KEY";
```

> ⚠️ 注意：免费版 API 每天限制 100 次请求

### 2. 启动项目
```bash
# 安装依赖
npm install

# 启动开发服务器
npm start

# 启动后访问：
http://localhost:3000

```

## 🎈 使用方法

1. **浏览最新新闻**
   - 打开应用，默认显示最新头条新闻

2. **按分类浏览**
   - 点击导航栏的分类按钮（商业、科技、娱乐等）
   - 查看该类别的新闻

3. **搜索新闻**
   - 点击导航栏的"🔍 搜索"按钮
   - 输入关键词（如 "Japan"、"Tokyo"）
   - 点击"搜索"按钮

4. **阅读完整文章**
   - 点击新闻卡片底部的"阅读全文 →"按钮
   - 在新标签页打开原文



## 🌟 项目亮点

- ✅ **组件化开发**：合理拆分可复用组件（Navbar、NewsCard、Loading）
- ✅ **路由管理**：使用 React Router 实现 SPA（单页应用）
- ✅ **API 集成**：调用真实的 NewsAPI 获取实时新闻
- ✅ **状态管理**：使用 React Hooks（useState、useEffect）管理状态
- ✅ **错误处理**：完善的加载状态和错误提示
- ✅ **用户体验**：平滑的加载动画、友好的空状态提示