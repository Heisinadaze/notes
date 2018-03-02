
**Vue.nextTick**

```
Vue.nextTick(_ => {

})
下次Dom更新循环结束之后，执行延迟回调。
在修改数据之后，立即使用这个方法，获取更新后的DOM。

Vue.nextTick()
  .then(_ => {
    // 返回一个Promise函数
  })
```

**Vue.set**

```
Vue.set(target, key, value)
```


**Vue.delete**

```
Vue.delete(target, key)

删除对象的属性
```

**Vue.directive**

```
注册或获取全局指令

Vue.directive(id, {Function | Object})
```



**Vue.filter**

```
过滤器
Vue.filter(id, Function)

Vue.filter('dataFormat', value => {
  // do that
})
```

**Vue.component**

```
全局组件
Vue.component(id, {Function | Object})
```

**Vue.use**

```
安装插件
```

**Vue.compile**

```
在render函数中编译模板字符串。

var res = Vue.compile('<div>{{ msg }}</div>')

new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})
```














