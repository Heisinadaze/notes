
1. 访问链接直接加载静态资源

`koa-static`

index.js

```
const Koa = require('koa');
const app = new Koa();

const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname));
app.use(main);

app.listen(3000);

```

访问`http://localhost:3000/index.js`

2. 重定向

```
ctx.response.redirect('/');
```

3. 中间件（middleware）

`logger日志`

```
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}

app.use(logger);
```

* 在`HTTP Request` 和 `HTTP Response`中间，实现某种功能的；

* 用`app.use()`进行加载；

* 每个中间件有两个参数（context对象，next方法）

`栈结构`

最外层的中间件首先执行。
调用next函数，把执行权交给下一个中间件。
...
最内层的中间件最后执行。
执行结束后，把执行权交回上一层的中间件。
...
最外层的中间件收回执行权之后，执行next函数后面的代码。

如果没有`next()`就不会往下传递。

3.4


