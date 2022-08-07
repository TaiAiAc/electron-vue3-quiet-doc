---
title: 快速上手
---

# {{ $frontmatter.title }}

本节将帮助您从头开始构建 `electron` 应用。如果您已经有一个现有项目并希望迁移到本项目中，请从跳转至 [从其他项目迁移](./migration) 开始。

## 基本要求

在使用 Electron 进行开发之前，您需要安装 Node.js。 建议您使用最新的 LTS 版本或官网当前长期维护版。
本地环境需要安装 yarn 1.x 、 Git。

## 下载项目

从 GitHub 克隆仓库

```sh
git clone https://github.com/TaiAiAc/electron-vue3-quiet.git
```

or

从 Gitee 克隆仓库

```sh
git clone https://gitee.com/TaiAi/electron-vue3-quiet.git
```

::: tip ps : 推荐安装 `antfu` 大佬的命令行工具,简单好用
仓库地址 antfu/ni: 💡 Use the right package manager [@antfu/ni](https://github.com/antfu/ni)
:::
安装 `@antfu/ni` 至本地全局

```sh
npm i -g @antfu/ni
```

安装依赖

```sh
cd  electron-vue3-quiet
ni
```

运行项目

```sh
nr dev
```

::: details 安装依赖过程中可能出现装不上依赖或者 `rebuild` 报错等问题情况
建议进群一起交流 群号 : **12354891**
:::

## 命令行

```json
{
  "scripts": {
    // 开发环境启动
    "dev": "esno scripts/dev.ts",
    // 默认构建程序,输出当前平台安装包
    "build": "esno scripts/default-build.ts",
    // 选项式构建
    "build:options": "esno scripts/options-build.ts",
    // 清除构建输出
    "clear:build": "rimraf dist && rimraf out",
    // ts类型检查
    "typecheck": "vue-tsc --noEmit --skipLibCheck",
    // 格式化 + 修复
    "lint": "eslint . --ext .vue,.js,.jsx,.ts,.tsx --fix --ignore-path .eslintignore && prettier . --write --loglevel warn --ignore-path .eslintignore",
    // 预构建
    "postinstall": "electron-builder install-app-deps",
    // husky
    "prepare": "husky install",
    // css 分析
    "analysis": "windicss-analysis",
    // 单元测试
    "test": "vitest run",
    // 监听文件变动自动重启
    "test:watch": "vitest",
    // 测试覆盖率
    "test:c8": "vitest run --coverage",
    // 依赖升级
    "dep:upgrade": "yarn upgrade-interactive --latest",
    // commit钩子
    "commit": "git-cz"
  }
}
```
