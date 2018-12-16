
module.exports = {

  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/variable.scss";`
      }
    }
  },

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,

  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  devServer: {
      port: 8080, // 端口号
      host: '0.0.0.0',
      https: false, // https:{type:Boolean}
      open: false, //配置自动启动浏览器
      // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
      proxy: {
          '/api': {
              target: '<url>',
              ws: true,
              changeOrigin: true
          },
          '/foo': {
              target: '<other_url>'
          }
      }
  }
}