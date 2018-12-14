
[官网](http://www.framework7.cn/)

1. 选择最新的版本

![framework](http://p5k2est0u.bkt.clouddn.com/framework7/info20180904161353.png)

2. 安装

**framework7**

**framework7-vue**

`main.js`文件
```
import Vue from 'vue'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
import 'framework7/dist/css/framework7.css'

Vue.use(Framework7Vue, Framework7)

new Vue({
  el: '#app',
  template: '<app/>',
  router,
  store,
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto' // Automatic theme detection
    // App routes
    // routes: Routes, // framework有自带的路由，这里没有引入
  },
  components: {
    app: App
  }
})
```

> 由于已经初始化了,在页面中可以通过`this.$f7`代替文档中`new Framework7()`，一般都会接受一个返回

* eg:

```
  this.$f7.toast.create({
    text: message,
    position: 'center',
    closeTimeout: 2000
  }).open()
```

### 注

在`framework7`中拦截了一些原生标签，如`<a></a>`,用来做`framework7`的路由跳转；
要想正常使用需要加`class`,

如`<a class="link external" href="http://google.com">Open Google</a>`;

....

[官方文档](http://www.framework7.cn/docs/introduction.html)
