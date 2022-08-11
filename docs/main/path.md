---
title: Path
---

# {{ $frontmatter.title }}

因为双环境静态资源的访问地址不同 , 这里集中处理了整个项目所需的静态目录 , 不同环境下访问相同的资源 .

## libPath

一般存放一些第三方包 .

## winURL

渲染进程根目录 .

## logsPath

本地日志存放路劲

## mainPreload

`preload`加载示例 , 可自行拓展自定义的 `preload`

preload 作为预加载脚本是不可以直接引入的 , 项目中的 preload 目录下都是 `*.ts` 文件,

需要经过单独的一层编译和封装 , 生成的静态目录为 `dist/preload/*.js` , 自定义前参照示例使用 .
