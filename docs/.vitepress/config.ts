import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'electron-vue3-quiet',
  description:
    '一个持续更新,坚持使用最新技术的,比较激进的桌面端脚手架! (●ˇ∀ˇ●) ,持续施工中 ....',
  base: '/electron-vue3-quiet-doc/',
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  markdown: {
    lineNumbers: true
  },
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    siteTitle: 'electron-vue3-quiet',
    logo: '/favicon.ico',
    lastUpdatedText: '最后更新时间',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-08-present 安静'
    },
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TaiAiAc/electron-vue3-quiet' }
    ],
    sidebar: {
      '/about/': [
        {
          text: '关于',
          items: [{ text: '文档配置', link: '/about/' }]
        }
      ],
      ...introduceSidebar()
    }
  }
})

function nav() {
  return [
    {
      text: '指引',
      link: '/introduce/project',
      activeMatch: '/introduce|main|renderer|config|builder/'
    },
    { text: '关于', link: '/about/', activeMatch: '/about/' },
    {
      text: '相关文档',
      items: [
        {
          text: 'vue',
          link: 'https://staging-cn.vuejs.org/'
        },
        {
          text: 'electron',
          link: 'https://www.electronjs.org/'
        },
        {
          text: 'vite',
          link: 'https://cn.vitejs.dev/'
        },
        {
          text: 'rollup',
          link: 'https://www.rollupjs.com/'
        },
        {
          text: 'electron-builder',
          link: 'https://www.electron.build/'
        },
        {
          text: 'vue-router',
          link: 'https://router.vuejs.org/zh/'
        },
        {
          text: 'pinia',
          link: 'https://pinia.vuejs.org/'
        },
        {
          text: 'vueuse',
          link: 'https://vueuse.org/'
        }
      ]
    },
    {
      text: version,
      items: [
        {
          text: '文档仓库地址',
          link: 'https://github.com/TaiAiAc/electron-vue3-quiet-doc.git'
        },
        {
          text: '友情连接/sky',
          link: 'https://zh-sky.gitee.io/electron-vue-template-doc/'
        }
      ]
    }
  ]
}

function introduceSidebar() {
  const commonRoute = [
    {
      text: '介绍',
      items: [
        { text: '项目介绍', link: '/introduce/project' },
        { text: '快速上手', link: '/introduce/introduction' },
        { text: '目录', link: '/introduce/catalogue' },
        { text: '从其他项目迁移', link: '/introduce/migration' }
      ]
    },
    {
      text: '主进程',
      items: [
        { text: '预加载', link: '/main/preload' },
        { text: 'ipc通信', link: '/main/ipc' }
      ]
    },
    {
      text: '渲染进程',
      items: []
    },
    {
      text: '配置',
      items: []
    },
    {
      text: '构建',
      items: []
    }
  ]

  return {
    '/introduce/': commonRoute,
    '/main/': commonRoute,
    '/renderer/': commonRoute,
    '/config/': commonRoute,
    '/builder/': commonRoute
  }
}
