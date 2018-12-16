
## vue中读取markdown

1. webpack配置

``` js
  {
    test: /\.md$/,
    use: [
      {
        loader: "html-loader"
      },
      {
        loader: "markdown-loader",
        options: {
        }
      }
    ]
  }
```

2. 安装依赖

`npm i markdown-loader html-loader --save-dev`

3. 引入

``` js
import md from './abc.md'
data () {
  return {
    md
  }
}
```

# vue3.0

`/node_modules/@vue/cli-service/lib/config/base.js`

``` js
    webpackConfig.module
      .rule('md')
        .test(/\.md$/)
        .use('html-loader')
          .loader('html-loader')
          .end()
        .use('markdown-loader')
          .loader('markdown-loader')
```

```
const files = require.context("./markdown", true, /\.md$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.md)/g, "")] = files(key);
});

export default modules;

```




