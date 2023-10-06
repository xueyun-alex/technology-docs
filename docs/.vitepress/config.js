// .vitepress/config.js
export default {
  base: '/my-docs/',

  // site-level options
  title: 'ALEX的碎碎念',
  description: 'Just playing around.',

  themeConfig: {
    // theme-level options

    nav: [{
        text: 'gitHub',
        link: 'https://github.com/xueyun-alex',
        activeMatch: 'https://github.com/xueyun-alex'
      },
      // {
      //   text: '下拉选择框',
      //   items: [{
      //       text: 'options-1',
      //       link: '/'
      //     },
      //     {
      //       text: 'options-2',
      //       link: 'http://www.baidu.com'
      //     }
      //   ]
      // }
    ],
    sidebar: [{
        text: 'Vue的碎碎念',
        items: [{
            text: 'vite脚手架',
            link: '/guide/vue/vite'
          },
          {
            text: 'vue3 Composition API',
            link: '/guide/vue/compositionAPI'
          },
          {
            text: 'vuex',
            link: '/guide/vue/vuex'
          },
          {
            text: 'vue router',
            link: '/guide/敬请期待'
          },
          {
            text: 'vue工程化',
            link: '/guide/vue/vue工程化-'
          },
          {
            text: 'Vite配置代理Proxy',
            link: '/guide/vue/Vite配置代理Proxy-'
          },
          {
            text: 'vue实现token用户登录',
            link: '/guide/vue/vue实现token用户登录-'
          },
          {
            text: '那些年vue踩过的那些坑',
            link: '/guide/vue/那些年vue踩过的那些坑'
          },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'React的碎碎念',
        items: [{
            text: 'React脚手架搭建',
            link: '/guide/react/react脚手架'
          },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'JavaScript的碎碎念',
        items: [{
            text: 'js异步操作',
            link: '/guide/JavaScript/js异步操作'
          },
          {
            text: 'js数组常用操作',
            link: '/guide/JavaScript/js数组常用方法-'
          }, {
            text: 'js数据常用转换',
            link: '/guide/敬请期待'
          }, {
            text: 'js的一些算法收集',
            link: '/guide/JavaScript/js的一些算法搜集'
          }, {
            text: '深拷贝',
            link: '/guide/JavaScript/深拷贝-'
          },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'TypeScript的碎碎念',
        items: [{
          text: 'ts的理念',
          link: '/guide/typescript/ts的理念-'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'CSS的碎碎念',
        items: [{
            text: 'css缩放（不同屏幕适配）',
            link: '/guide/css/css缩放（不同屏幕适配）-'
          },
          {
            text: 'css引入',
            link: '/guide/css/css引入-'
          },
          {
            text: '子元素选择器',
            link: '/guide/css/子元素选择器-'
          },
          {
            text: 'CSS的一些代码收集',
            link: '/guide/css/css的一些代码收集'
          },
          
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Cesium的碎碎念',
        items: [{
          text: 'cesium基础操作',
          link: '/guide/敬请期待'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Three.js的碎碎念',
        items: [{
          text: 'three做过的示例',
          link: '/guide/敬请期待'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'ECharts的碎碎念',
        items: [{
          text: '做过的好看表格收藏',
          link: '/guide/敬请期待'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'ui前端框架的碎碎念',
        items: [{
            text: 'elementUI',
            link: '/guide/敬请期待'
          },
          {
            text: 'iview',
            link: '/guide/敬请期待'
          }
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'node.js的碎碎念',
        items: [{
          text: 'nodejs下载安装',
          link: '/guide/敬请期待'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'c#的碎碎念',
        items: [{
          text: 'c#基础',
          link: '/guide/敬请期待'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '小程序的碎碎念',
        items: [{
          text: '小程序基础',
          link: '/guide/敬请期待'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '其他杂七杂八的碎碎念',
        items: [{
            text: 'ajax与axios',
            link: '/guide/others/ajax'
          },
          {
            text: 'git相关',
            link: '/guide/敬请期待'
          },
          {
            text: '状态管理',
            link: '/guide/others/状态管理-'
          },
          {
            text: '前端WebSocket详解',
            link: '/guide/others/WebSocket详解-'
          },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '这次是真的碎碎念',
        items: [{
          text: '为啥走上编程之路',
          link: '/guide/敬请期待'
        }, ],
        collapsible: true,
        collapsed: true
      }
    ],




  }
}