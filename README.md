<h1 align="center">分析记账 WebApp 前端部分</h1>

<div align="center">让世界没有难记的帐</div>

#### 介绍

笔者小前端一名，筹钱在老家买了房（一个艰苦的历程），在每天跑流水的时候发现每天都要记账好麻烦，而且本人每天的消费账单也囊括微信，支付宝，银行付款，统计起来十分麻烦，想到使用微信自带的工具也需要手工同步其他账单，所以干脆自己开发一款 `WebApp`，满足自己的需求

本项目致力于开发一款轻便的 `App` 方便我们每个人记账，查看流水，统计收支。如果到之后有闲暇时间，希望可以把个人金融投资（股票，基金，债券等）的收益等也一并统计进来，有利于自己更好的管理自己的资产

#### 规划

- 从零使用 `react` 搭建系统
- 全面使用 `react-hooks` 开发，抛弃 `class` 组件写法，所有组件异步加载，提高首屏渲染速度
- 加入页面权限设计
- 配套的后端 Api, 暂定使用 `node` 实现
- 有可能的话实现一个 `node` 中转网关，后端实现微服务化（想学学 Go 语言）

#### 使用技术

- **UI 框架**: `react`、`react-hook`、`react-router`
- **UI 组件**：`antd-mobile`
- **数据管理**：`redux`、`react-redux`、`redux-thunk`、`redux-logger`
- **类型检查**：`typescript`
- **代码检查**：`eslint`、`prettier`
- **接口请求**：`axios`
- **cookies**：`js-cookie`
- **过渡动画**：`react-transition-group`

#### 功能

- [ ] 首页总览
- [ ] 数据报表
- [ ] 个人中心
- [ ] 功能设置
- [ ] 添加账单

#### 使用

```bash
$ git clone git@github.com:zo11o/bill-ui.git
$ cd bill-ui
$ npm install
$ npm run dev
```
#### 目录结构
```
|-- bill-ui
    |-- .editorconfig
    |-- .env.beta
    |-- .env.development
    |-- .env.production
    |-- .eslintignore
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierignore
    |-- .prettierrc.js
    |-- .stylelintrc.js
    |-- config-overrides.js
    |-- directoryList.md
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- .vscode
    |   |-- launch.json
    |   |-- settings.json
    |-- public
    |   |-- favicon.ico
    |   |-- fixIosTitle.html
    |   |-- index.html
    |   |-- logo192.png
    |   |-- logo512.png
    |   |-- manifest.json
    |   |-- robots.txt
    |-- src
    |   |-- App.test.tsx
    |   |-- App.tsx
    |   |-- index.tsx
    |   |-- logo.svg
    |   |-- react-app-env.d.ts
    |   |-- reportWebVitals.js
    |   |-- setupTests.js
    |   |-- api
    |   |   |-- request.ts
    |   |-- assets
    |   |   |-- fonts
    |   |       |-- iconfont.eot
    |   |       |-- iconfont.svg
    |   |       |-- iconfont.ttf
    |   |       |-- iconfont.woff
    |   |-- components
    |   |   |-- DatePicker
    |   |   |-- LayoutNav
    |   |   |   |-- index.tsx
    |   |   |   |-- style
    |   |   |       |-- index.less
    |   |   |-- Spin
    |   |   |   |-- index.tsx
    |   |   |   |-- style
    |   |   |       |-- index.less
    |   |   |-- TransitionMain
    |   |   |   |-- index.tsx
    |   |   |-- _util
    |   |       |-- index.ts
    |   |-- config
    |   |   |-- index.ts
    |   |-- layout
    |   |   |-- AsyncRoutes.tsx
    |   |   |-- Auth.tsx
    |   |   |-- index.less
    |   |   |-- index.tsx
    |   |   |-- mainRoutes.less
    |   |   |-- MainRoutes.tsx
    |   |   |-- UserLayout.tsx
    |   |-- router
    |   |   |-- config.ts
    |   |   |-- index.tsx
    |   |   |-- utils.ts
    |   |   |-- routers
    |   |       |-- error
    |   |       |   |-- index.ts
    |   |       |-- home
    |   |       |   |-- index.ts
    |   |       |-- statistic
    |   |       |   |-- index.ts
    |   |       |-- system
    |   |       |   |-- index.ts
    |   |       |-- uc
    |   |           |-- index.ts
    |   |-- service
    |   |   |-- index.ts
    |   |   |-- auth
    |   |   |   |-- menu.ts
    |   |   |-- uc
    |   |-- store
    |   |   |-- index.ts
    |   |   |-- types.ts
    |   |   |-- module
    |   |       |-- app.ts
    |   |       |-- settings.ts
    |   |-- styles
    |   |   |-- global.less
    |   |   |-- iconfont.css
    |   |   |-- index.less
    |   |   |-- mixin.less
    |   |   |-- var.less
    |   |-- typings
    |   |   |-- global.d.ts
    |   |   |-- index.ts
    |   |-- utils
    |   |   |-- app.js
    |   |   |-- cookie.ts
    |   |   |-- index.ts
    |   |-- views
    |       |-- bill
    |       |-- error
    |       |   |-- 403.tsx
    |       |   |-- 404.tsx
    |       |-- home
    |       |   |-- detail.tsx
    |       |   |-- index.tsx
    |       |   |-- intro.tsx
    |       |   |-- components
    |       |       |-- HomeHeader
    |       |           |-- index.less
    |       |           |-- index.tsx
    |       |-- statistic
    |       |   |-- detail.tsx
    |       |   |-- index.tsx
    |       |-- system
    |       |   |-- login
    |       |   |   |-- index.tsx
    |       |   |-- register
    |       |-- uc
    |           |-- detail.tsx
    |           |-- index.tsx
    |-- test
```
