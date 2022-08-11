---
title: BrowserWindow
---

# {{ $frontmatter.title }}

src\main\window

窗口实例相关 , 提供了创建窗口和窗口管理的方法 .

以下 api 都可以链式操作

## setTitle

设置网页标题 , 可在任务栏及头部展示

## setSize

设置窗口大小 , 是否可调整大小 , `min-size`

## hideMenu

隐藏菜单栏

## hideTaskbar

在任务栏隐藏

## alwaysOnTop

窗口置顶

## loadURL

窗口路由 , 与渲染进程中的 `route`配置相匹配

## setUserAgent

转换 `UserAgent` 中的中文字符

## openDevTools

打开控制台

## show

窗口显示

## unClose

阻止窗口销毁默认事件 , 设置后窗口只是隐藏不会销毁

## listen

`BrowserWindow` 事件监听 , 主要为了配合链式

## openExternal

外链打开 url

## winMap

窗口实例集中管理
