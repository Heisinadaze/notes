
### 新建一个项目名为name的nuxt.js项目

**一.基础**

1. 安装全局脚手架
`npm i -g vue-cli`

2. 安装官方给出的模板
`vue init nuxt-community/starter-template name`

3. 进入该项目
`cd name`

4. 安装包文件
`npm i`

5. 开发环境跑项目
`npm run dev`

**二.常用配置**

1. 修改端口`package.js`文件下

```
"config": {
  "nuxt": {
    "host": "0.0.0.0",
    "port": "443"
  }
},
"scripts": {
    "dev": "nuxt",
    ...
},
```



