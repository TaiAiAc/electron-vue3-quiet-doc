import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  title: 'electron-vue3-quiet', // 网站标题
  description: 'electron-vue3-quiet-doc', //网站描述
  // base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  lang: 'en-US', //语言
  // 相当于html中<head>标签
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'favicon.ico' // 图片放在public文件夹下
      }
    ]
  ],
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    siteTitle: 'electron-vue3-quiet',
    // nav 左侧logo
    logo: '/favicon.ico',
    //   头部导航
    nav: [
      { text: '关于', link: '/about/' },
      {
        text: '仓库地址',
        link: 'https://github.com/TaiAiAc/electron-vue3-quiet-doc.git'
      },
      {
        text: '友情连接',
        link: 'https://zh-sky.gitee.io/electron-vue-template-doc/'
      },
      { text: version, link: '/about/' }
    ]
  }
})
