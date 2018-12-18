
caller 返回一个函数的引用，这个函数调用了当前函数；
> 这个函数只有执行时才有用
> 如果在js中是由顶层调用的，返回null；

```
    let a = function () {
        alert(a.caller);
    }
    a(); // null
    let b = function () {
        a();
    }

    b(); // function () {alert(a.caller);}
```



callee 返回正在执行的函数本身的引用
> 只有在函数执行的时候才有效
> 有length属性，可以用来获取形参的个数，因此可以用来比较形参和实参个数是否一致，即比较arguments.length是否等于arguments.callee.length
> 用来递归匿名函数

```
    let a = function (a, b, c) {
        console.log(arguments.callee.length); // 3
        console.log(arguments.length); // 2
    }
    a(1, 2);
```

