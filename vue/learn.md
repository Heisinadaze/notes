
### 更新数组

* push()
* pop()
* shift()
* unshift()
* splice()
* sort()
* reverse()

以上方法可以触发视图更新

* filter()
* concat()
* slice()

这三个方法不会出发，但是会返回一个新数组，用新数组替换旧数组


### 利用索引替换某一项时，用$set

### 修改数组长度时： 

```
arr.splice(newLength)
```

### 给已有对象添加多个新属性时

```
this.obj = Object.assign({}, this.obj, {
  opt1: '',
  opt2: ''
})
```

### v-model 修饰符

* .lazy 在change事件时进行同步
* .number 将用户输入的值转换为数字
* .trim 过滤用户输入的首尾的空白字符



























