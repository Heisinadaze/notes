
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


4. 合并中间件`koa-compose`

```
const compose = require('koa-compose');


const middlewares = componse(['main, one, two']);
app.use(middlewares);
```

5. 返回提示

```
// 500
const err = ctx => {
  ctx.throw(500);
}

// 404
ctx.response.status = 404;
```

6. 中间件的错误解决

```
const handler = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.response.status = e.statusCode || e.status || 500;
    ctx.response.body = {
      message: e.message
    };
  }
}
```

7. error事件监听

```
app.on('error', (err, ctx) => {
  console.log('server error', err)
})
```

8. 使用`try catch`解决报错就不会触发7error事件监听

```
// catch 最下面一行加
ctx.app.emit('error', err, ctx);
```

9. 读写`cookie`

```
const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}
```

10. 接收`post`请求参数 `koa-body`

```
const koaBody = require('koa-body');

app.use(koaBody());

const main = async ctx => {
  const body = ctx.request.body;
  console.log(body);
  if (!body.name) ctx.throw(400, 'name is required');
  ctx.body = { name: body.name }
}
```

> 谷歌插件`request Maker`发送post请求，

```
http://127.0.0.1:3000

content-type: application/x-www-form-urlencoded; charset=utf-8

name: abc123
```













