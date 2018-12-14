### element-ui

安装方式
```
npm i element-ui -S
```
在main.js中引入
```
import ElementUI from 'element-ui'
```

CDN
```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```


提供了较多样式标签，
官网
http://element.eleme.io/#/zh-CN/component/quickstart










关于scss

安装sass
```
npm install sass-loader node-sass webpack --save-dev
```
如果引用了scss,产生如下的错误


![谷歌浏览器](http://upload-images.jianshu.io/upload_images/2941543-d0112e16b98622ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

解决办法：
npm install -g cnpm --registry=[https://registry.npm.taobao.org](https://registry.npm.taobao.org)

cnpm install --save-dev node-sass

运行这两句代码



```
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件侦听器时使用事件捕获模式 --
<div v-on:[click.capture=](http://click.capture=)"doThis">...</div>

<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 --><div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

点击事件的按键别名
* .enter
* .tab
* .delete(捕获删除和退格键)
* .esc
* .space
* .up
* .down
* .left
* .right
* .ctrl
* .alt
* .shift
* .meta
.left - (2.2.0) 只当点击鼠标左键时触发。
.right - (2.2.0) 只当点击鼠标右键时触发。
.middle - (2.2.0) 只当点击鼠标中键时触发。

> 注: 若添加不成功，在事件后添加native
例如：
```
@keyup.enter.native="事件名"
```
一般原生的标签里面不需要加

也可以通过全局config.keyCode对象自定义按键修饰符别名

//可以使用v-on:keyCodes.f1 = 112;

组合键
```
<!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```
在vue2.0开始.已经明确规定给自定义组件绑定原生事件时，必须是使用native修饰符,另外用的比较多的修饰符是 .stop （阻止冒泡事件）.prevent （阻止默认事件）。






vue-elementui
