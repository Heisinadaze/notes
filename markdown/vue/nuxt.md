## 安装ElementUI


`nuxt.config.js`
```
module.exports = {
  /*
  ** Headers of the page
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      'axios',
      'element-ui'
    ],
    babel: {
      // plugins: [['component', [{
      //   libraryName: 'element-ui',
      //   styleLibraryName: 'theme-default'
      // }]]]
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/element-ui']
}

```

`plugins/element-ui`

```
import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

```

















