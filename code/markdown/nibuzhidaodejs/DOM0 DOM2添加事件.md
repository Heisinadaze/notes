兼容性

```
      var EventUtil = {
        addHandler: function (element, type, handler) {
          if (element.addEventListener) {
            element.addEventListener(type, handler, false)
          } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler)
          } else {
            element["on" + type] = handler
          }
        },
        removeHandler: function (element, type, hander) {
          if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
          } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler)
          } else {
            element["on" + type] = null
          }
        }
      }
```

DOM2级事件

```
addEventListener("click", function () {
  // .
}, false)

false: 冒泡
true: 捕获


removeEventListener("click", function () {
  //  .
}, false) // 不能是匿名函数

```

为同一个元素添加事件时，按照加载顺序依次进行。

IE:
```
 attachEvent("onclick", function () {
    // .
})
只支持冒泡
第一个参数使用onclick,

```

与DOM0区别： 作用于不用，DOM0下事件this指向所属元素，
        `attachEvent`会在全局作用域中运行， this == window
与addEventListener区别： 可以为同一个元素添加多个事件处理程序，
        但attachEvent是以相反的顺序被触发

























































