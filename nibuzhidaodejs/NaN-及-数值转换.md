非数值，一种特殊的数值


```
console.log(+0 === -0) // true
console.log(0 / 0) // NaN
console.log(1 / 0) // Infinity
console.log(-1 / 0) // -Infinity
console.log(1 == true);  // true
```

> NaN特点
任何涉及NaN的操作都会返回NaN；
NaN与任何值都不相等，包括自己。

```
console.log(NaN == NaN)
```

![image.png](http://upload-images.jianshu.io/upload_images/2941543-176eccfcc43512b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
针对这两个特点，ECMAScript定义了isNaN()函数。这个函数可以接受一个参数，帮我们确定这个参数是否“不是数值”，这个函数在接受一个参数值后，会尝试把它转换为数值，不能转换为数值的值，在这个函数中会返回true。
```
    console.log(isNaN(NaN));  // true
    console.log(isNaN(10)); // false
    console.log(isNaN("10")); // false
    console.log(isNaN("red")); // true
    console.log(isNaN(true)); //false(可以被转换成数值1)
```

##### 数值转换（Number / parseInt / parseFloat）
Number可以用于任何数据类型，另外两个专门用于转换字符串
```
Number(true) === 1 // true
Number(null) === 0 // true
Number(undefined) // NaN

parseInt('123abl') // 123
Number('123abl') // NaN

console.log(parseInt('')) // NaN
console.log(Number('')) // 0

console.log(parseInt(22.3)) // 22
console.log(Number(22.3)) // 22.3

对于八进制，ECMAScript3 和ECMAScript 5有争议
parseInt(070)  --> 56(ECMAScript3)
parseInt(070)  --> 70(ECMAScript5)

parseInt有两个参数，第二个参数表示使用多少进制

parseFloat只用于十进制，如果是十六进制，转为0


```


#### toString
null和undefined没有这个方法，默认一个参数，表示转换为多少进制的数，如果不知道是不是null或undefined，使用String方法


加法
```
Infinity + (-Infinity) // NaN
5 - true // 4
NaN - 1 // NaN
5 - '' // 0 (空被转换成0)
5 - null // 5 (null被转换成0)

undefined == 0  // false
null == 0 // false
 ```













































* 扩展：




























































由于内存的限制，，js的数值中正负无穷分别保存在`Number.MAX_VALUE`和`Number.MIN_VALUE`中

```
console.log(Number.MAX_VALUE)

```

![正无穷](http://upload-images.jianshu.io/upload_images/2941543-e28570ef9024f2ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
