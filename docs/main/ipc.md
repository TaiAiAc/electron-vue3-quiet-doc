---
title: Ipc
---

# {{ $frontmatter.title }}

src\main\ipc

进程间通信

## on

接受消息 , `return` 不会返回消息内容 , 一般做单向处理 , 或窗口间的消息转发 .

## handle

接受消息 , `return` 返回 `Promise` 包裹的内容 , 主要通信手段 .

## bucket

策略模式 . 集中分类处理通信事件 .
