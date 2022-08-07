---
title: 项目介绍
---

# {{ $frontmatter.title }}

## 简介

[electron-vue3-quiet](https://github.com/TaiAiAc/electron-vue3-quiet) 是一个基于 Electron、 Vue3、Vite3、TypeScript、NaiveUI、Pinia 和 WindiCSS 的清新优雅的桌面端模版，它使用了最新的前端技术栈，内置各种 demo 演示案例，代码规范，基于 SPA 的动态路由展示不同的窗口，非开箱即用，更多用于学习参考。

## 特性

- **Vite + Rollup** : 双进程热更新 , 快速开发。
- **统一的环境变量** : `dotenv` 加载 , 构建时注入 , 渲染进程和主进程相同的环境变量。
- **TypeScript** : 应用程序级 `JavaScript` 的语言。
- **上下文隔离** : 区分不同进程环境 , 明显的代码分离 , 更符合安全规范。
- **组合式 API (Composition API)** : `vue3` 最新语法 , 灵活强大。
- **支持 Tsx** : 同时支持 `SFC` 和 `Tsx` 模板语法,按需选用。
- **丰富的代码示例** : 食用规范及插件规范引入等。

## 前置技术栈

::: warning 📢
正常的 electron 开发需要你掌握基本的 node 和 web 开发知识 , 如果你对前端开发完全陌生，最好不要直接在一开始针对一个框架进行学习——最好是掌握了基础知识再回到这里。
:::

如果你想要掌握本框架的完全开发能力,以下技术栈是你需要了解的。

- `Electron` , [使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序。](https://www.electronjs.org/)
- `Vue3.x` , [易学易用，性能出色，适用场景丰富的 Web 前端框架。](https://staging-cn.vuejs.org/)
- `Nodejs` , [Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境。](https://nodejs.org/zh-cn/)
- `Typescript` , [TypeScript 是 JavaScript 类型的超集，它可以编译成纯 JavaScript。](https://www.tslang.cn/index.html)
- `Vite` , [下一代的前端工具链 , 为开发提供极速响应。](https://cn.vitejs.dev/)
- `Rollup` , [Rollup 是一个 JavaScript 模块打包器。](https://www.rollupjs.com/)
- `Electron-Builder` , [一个完整的解决方案，打包和构建一个准备分发电子应用程序与“自动更新”的支持开箱即用。](https://www.electron.build/)
- `Vue-Router` , [Vue.js 的官方路由。](https://router.vuejs.org/zh/)
- `Pinia` , [Vuex 的 5.x 版本。](https://www.electronjs.org/)
- `WindiCSS` , [下一代工具类 CSS 框架。](https://cn.windicss.org/)
- `TypeOrm` , [使用 Ts 操作数据库。](https://typeorm.io/)
- 更多相关 web 知识 ...

## 概览

- **双进程热更新** : 代码修改立即更新 (主进程代码修改会触发软件重启)。
- **模式构建** : 默认识别当前代码运行的平台输出打包程序 , 选项式自定义构建输出。
- **预加载 ts 化** : `preload` 单独编译 , 静态脚本也支持 ts。
- **集中管理路径** : 解决双进程资源路径的问题。
- **窗口管理** : 扁平化代码 , 随处使用指定窗口实例。
- **模块化 ipc** : 集中管理 , 使用策略模式收集事件及处理函数。
- **typeorm 集成** : 使用 `ts` 操作 `sqlite3` 数据库。

##

::: tip <img src="/group.jpg" style="height:26px" />

和兴趣爱好者一起摸鱼 , 交流 !

<span>Electron 技术框架交流群 : 12354891</span>
:::
