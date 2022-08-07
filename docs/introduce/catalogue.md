---
title: 目录介绍
---

# {{ $frontmatter.title }}

## 概览

```js
|-- electron-vue3-quiet
    |-- .env  # 默认加载的环境变量
    |-- .npmrc  # 包管理器相关配置
    |-- build   # vite插件及配置
    |-- dist   # dev环境输出目录
    |-- icons  # 项目图标相关
    |-- logs  # 本地日志
    |-- out  # electron-builder输出目录
    |-- public  # 静态资源目录
    |-- scripts  # 构建脚本
    |-- src  # 项目代码
    |   |-- common  # 双进程通用代码
    |   |-- enums  # 枚举
    |   |-- main  # 主进程代码
    |   |-- preload  # 预加载脚本
    |   |-- renderer  # 渲染进程代码
    |   |-- types  # 全局类型定义
    |-- test  # 测试文件
```

## src

项目入口。

### common

> 双进程可用。

通用代码, 一般可以存放一些不受环境影响的 ts 工具类等。

### types

> 双进程可用。

全局类型定义, `*.d.ts` 统一存放 , 无需导出 , 可自定定义添加类型文件。

### enums

> 双进程可用。

全局枚举类型 , 需要导出。

### main

> 主进程可用。

主进程环境代码基本与 `nodejs` 环境一致 , 明确的隔离提升代码可读性。

### preload

> 主进程可用。

#### 该目录下的 ts 文件将会单独编译为 `preload` 单文件 `js`。

支持模块化 , 以目录为区分 , 每个目录都会输出一个同文件夹同名的 `*.js` 文件到 `dist` 目录下。
请参照示例新建 `prelaod` 文件。

```js
|-- src
|   |-- preload
|       |-- main
|           |-- index.ts
```

将输出为 :

```js
|-- dist
|   |-- preload
|       |-- main.js
```

### renderer

> 渲染进程可用。

熟悉的前端项目目录 , 基本与平时的 `vue3` 项目结构一致。

## .env

> 环境变量

- **.env** : 默认加载的环境变量。
- **.env.development** : 开发环境变量。
- **.env.production** : 生产环境变量。

## scripts

> 构建脚本及 `vite` 和 `rollup` 配置。

可自行添加自己的 `*.ts` 脚本 , 将以 `esno` 直接运行。
如需自定义脚本的需求 , 建议看看 [google/zx](https://github.com/google/zx) , 相当好用。

## public

> 静态资源目录

该目录下的文件总会输出至项目根目录。

## build

> 模块化管理 `vite` 插件。

如需添加 `vite` 插件 , 自行添加导出使用即可。

## 其他

- **dist** : `vite` 及 `rollup` 构建输出目录。
- **icons** : 软件相关 icon。
- **logs** : 开发环境本地日志。
- **out** : 构建输出软件包的目录。
