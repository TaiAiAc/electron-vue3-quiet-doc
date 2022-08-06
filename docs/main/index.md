---
title: 主进程
---

# {{ $frontmatter.title }}

> 主进程，通常是指 main.js 文件，是每个 Electron 应用的入口文件。 控制着整个应用的生命周期，从打开到关闭。 它也管理着系统原生元素比如菜单，菜单栏，Dock 栏，托盘等。 主进程负责创建 APP 的每一个渲染进程。 包含了全功能的 Node API。
> 应用的主进程定义在 package.json 中的 main 属性中。 当您运行 electron . 时 Electron 便会知道需要运行哪个文件。
> 在 Chromium 中，此进程被称为“浏览器进程”。 Electron 中这样称呼是为了不与渲染进程混淆。
> <br>——— https://www.electronjs.org/zh/docs/latest/glossary#main-process

## 主进程目录

```js
    |-- main
    |   |-- config  # 主进程相关配置的封装
    |   |-- ipc # ipc通信
    |   |-- tools  # 工具集
    |   |-- typeorm  # typeorm数据库操作相关
    |   |-- window  # 窗口实例相关
    |-- preload  # 预加载脚本
    |   |-- main  # 区分模块

```

## app

src\main\config\modules\app.ts

> 控制应用程序的事件生命周期
> 使用`es6` `class`语法封装了 app 生命周期,提供了初始化的基础配置,集中处理了一些错误

### use(func)

向外暴露了`use`方法, 相当于 `appReady` 生命周期, 传入一个回调函数 , 回调函数中的代码会在 app 准备完毕后立即调用.

### installDevtools

安装`vue3` `devtools`插件,可选

## log

### printInfo(type,info[,value])

本地日志的打印 , 接收三个参数 `类型` `说明` `具体内容`

## menu

> 在此声明的`menu`挂载后每个窗口实例的 topbar 上都会生效
> 可以注册亿些快捷键啥的

### addItem(template)

向全局 `menu`上增加一项 `menuItem`

## paths

> 全局`path`选项集合

因为双环境静态资源的访问地址不同 , 这里集中处理了整个项目所需的静态目录 , 不同环境下访问相同的资源 .

### libPath

一般存放一些第三方包 .

### winURL

渲染进程根目录 .

### logsPath

本地日志存放路劲

### mainPreload

`preload`加载示例 , 可自行拓展自定义的 `preload`

preload 作为预加载脚本是不可以直接引入的 , 项目中的 preload 目录下都是 `*.ts` 文件,

需要经过单独的一层编译和封装 , 生成的静态目录为 `dist/preload/*.js` , 自定义前参照示例使用 .

## tray

托盘程序 , 常驻 , 不会消失 , 可放心食用 .

## ipc

src\main\ipc

进程间通信

### on

接受消息 , `return` 不会返回消息内容 , 一般做单向处理 , 或窗口间的消息转发 .

### handle

接受消息 , `return` 返回 `Promise` 包裹的内容 , 主要通信手段 .

### bucket

策略模式 . 集中分类处理通信事件 .

## typeorm

ts 操作数据库 , 后面有详细入门讲解 .

## window

src\main\window

窗口实例相关 , 提供了创建窗口和窗口管理的方法 .

以下 api 都可以链式操作

### setTitle

设置网页标题 , 可在任务栏及头部展示

### setSize

设置窗口大小 , 是否可调整大小 , `min-size`

### hideMenu

隐藏菜单栏

### hideTaskbar

在任务栏隐藏

### alwaysOnTop

窗口置顶

### loadURL

窗口路由 , 与渲染进程中的 `route`配置相匹配

### setUserAgent

转换 `UserAgent` 中的中文字符

### openDevTools

打开控制台

### show

窗口显示

### unClose

阻止窗口销毁默认事件 , 设置后窗口只是隐藏不会销毁

### listen

`BrowserWindow` 事件监听 , 主要为了配合链式

### openExternal

外链打开 url

## winMap

窗口实例集中管理
