### new Date()
返回调用这个方法的时间

```
    if (!Date.now) {
        Date.now = function now() {
             return new Date().getTime();
        }
    }
```

在不兼容的浏览器中
```
let start = +new Date()
```

### 转换
Date.parse(new Date()) // 返回毫秒数

* getTime()  返回时间的毫秒数

* setTime(毫秒数) 通过毫秒设置时间

*setFullYear(2017) 设置年份，必须是4位数

* setMonth(月份) 设置月    超过的话，年+1

* getDate 天数（1-31） 

* setDate()超过的话，月+1

* setDay() 星期（0表示星期日）

* setMilliseconds () 设置日期中的毫秒数

* getTimezoneOffset() 返回本地时间与UTC时间相差分钟数。




