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
            link: '/guide/vite'
          },
          {
            text: 'vue3 Composition API',
            link: '/guide/compositionAPI'
          },
          {
            text: 'vuex',
            link: '/guide/vuex'
          },
          {
            text: 'vue router',
            link: '/guide/vueRouter'
          },
          ,
          {
            text: 'vue工程化',
            link: '/guide/vueRouter'
          },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'JavaScript的碎碎念',
        items: [{
            text: 'js异步操作',
            link: '/guide/index'
          },
          {
            text: 'js数组常用操作',
            link: '/guide/index'
          }, {
            text: 'js数据常用转换',
            link: '/guide/index'
          }, {
            text: 'js常用算法',
            link: '/guide/index'
          },
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'TypeScript的碎碎念',
        items: [{
          text: 'ts的理念',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'CSS的碎碎念',
        items: [{
          text: 'CSS的一些代码收集',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Cesium的碎碎念',
        items: [{
          text: 'cesium基础操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Three.js的碎碎念',
        items: [{
          text: 'three做过的示例',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'ECharts的碎碎念',
        items: [{
          text: '做过的好看表格收藏',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'ui前端框架的碎碎念',
        items: [{
          text: 'elementUI',
          link: '/guide/index'
        }, 
        {
          text: 'iview',
          link: '/guide/index'
        }],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'node.js的碎碎念',
        items: [{
          text: 'nodejs下载安装',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'c#的碎碎念',
        items: [{
          text: 'c#基础',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '小程序的碎碎念',
        items: [{
          text: '小程序基础',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '其他杂七杂八的碎碎念',
        items: [{
          text: 'git相关',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '这次是真的碎碎念',
        items: [{
          text: '为啥走上编程之路',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      }
    ],




  }
}