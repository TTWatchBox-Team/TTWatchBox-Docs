import { defineConfig } from 'vitepress'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TTWatchBox",
  description: "“自由，从每一次突破开始”",
  head: [
      // 添加图标
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'TODO', link: '/todo' },
      { text: '公告', items:
        [
          { text: '公告列表', link: '/notice/' },
          { text: '讣告', link: '/notice/1' }
        ]
      },
      { text: '开发文档', items:
        [
          { text: '源码部署', link: '/docs/code' },
          { text: '插件开发', link: '/docs/mods' }
        ]
      }
    ],

    sidebar: {
        '/docs/': [
          {
            text: '开发文档',
            items: [
              { text: '源码部署', link: '/docs/code' },
              { text: '插件开发', link: '/docs/mods' }
            ]
          }
        ],
        '/notice/': [
          {
            text: '公告',
            items: [
              { text: '公告列表', link: '/notice/' },
              { text: '讣告', link: '/notice/1' }
            ]
          }
        ]
      },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TTWatchBox-Team/TTWatchBox' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownItTaskCheckbox) //todo
    }
  }
})
