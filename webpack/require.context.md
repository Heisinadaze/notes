
## require.context(path, check, type) 方法

> 当在一个页面引入多个组件时，正常引入多少就需要写多少条引入,维护比较麻烦，写着也费劲，就有这个方法。

**三个参数**

```
path: 引入文件所在目录；

check: boolean值，是否查询该目录下的子目录；

type: regExp, 查找文件的类型
```

> eg: `require.context('../', false, /\.js$/)`查找`.js`文件


**这个函数返回一个`require`函数**

``` js
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
}
```

> 该函数有三个属性
1. resolve: 函数，他返回的是被解析模块的id
2. keys: 函数，他返回的是一个数组，该数组是由所有可能被上下文模块解析的请求对象组成`（常用到）`
3. id：上下文模块的id

``` js
let req = require.context('../', false, /\.js$/);
let list = req.keys();

list;
```



