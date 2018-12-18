
# 实例方法

### watch

`this.$watch('data', callback, { ...options })`

观察实例变化的一个表达式或计算属性函数

> 返回一个取消观察的函数，用来停止触发回调：

```
let unwatch = this.$watch('a', cd)

unwatch() // 取消观察
```

* options: { deep: true } 发现对象内部值的变化

* options: { immediate: true } 立即以表达式的当前值触发回调


### set

`this.$set(target, key, value)`

### delete

`this.$delete(target, key)`

### forceUpdate

`this.forceUpdate() 当前实例，及当前实例引用的子实例  重新渲染`






