---
title: 主进程
---

# {{ $frontmatter.title }}

> 主进程，通常是指 main.js 文件，是每个 Electron 应用的入口文件。 控制着整个应用的生命周期，从打开到关闭。 它也管理着系统原生元素比如菜单，菜单栏，Dock 栏，托盘等。 主进程负责创建 APP 的每一个渲染进程。 包含了全功能的 Node API。
> 应用的主进程定义在 package.json 中的 main 属性中。 当您运行 electron . 时 Electron 便会知道需要运行哪个文件。
> 在 Chromium 中，此进程被称为“浏览器进程”。 Electron 中这样称呼是为了不与渲染进程混淆。
>
> ——— https://www.electronjs.org/zh/docs/latest/glossary#main-process

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

## log

### printInfo(type,info[,value])

本地日志的打印 , 接收三个参数 `类型` `说明` `具体内容`

## menu

## paths

> 全局`path`选项集合

## tray

托盘程序 , 常驻 , 不会消失 , 可放心食用 .

## ipc

## typeorm

ts 操作数据库 , 后面有详细入门讲解 .

## window
