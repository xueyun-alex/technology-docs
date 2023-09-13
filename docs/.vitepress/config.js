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
        link: '/guide',
        activeMatch: '/guide/what-is-vitepress'
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
            text: 'vite',
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
        ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'JavaScript的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'TypeScript的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Cesium的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'Three.js的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'ECharts的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'ui前端框架的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'node.js的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: 'c#的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '小程序的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '其他杂七杂八的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      },
      {
        text: '这次是真的碎碎念',
        items: [{
          text: 'js异步操作',
          link: '/guide/index'
        }, ],
        collapsible: true,
        collapsed: true
      }
    ],




  }
}