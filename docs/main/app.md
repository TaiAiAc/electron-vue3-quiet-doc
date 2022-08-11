---
title: App
---

# {{ $frontmatter.title }}

:::tip 路径
src\main\config\modules\app.ts
:::
控制应用程序的事件生命周期
使用`es6` `class`语法封装了 app 生命周期,提供了初始化的基础配置,集中处理了一些错误

## use(func)

向外暴露了`use`方法, 相当于 `appReady` 生命周期, 传入一个回调函数 , 回调函数中的代码会在 app 准备完毕后立即调用.

## installDevtools

安装`vue3` `devtools`插件,可选
