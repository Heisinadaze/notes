
### 初始化 

```
npm init
```

安装一些依赖、包文件

`npm install ***`

```
    "koa": koa 框架

    "bluebird": 使用`Promise`, `async`

    "crypto": 加密转码

    "geoip-lite": 查找IP地址并返回它映射到的国家，地区和城市

    "mongoose": 使用数据库

    "mongoose-auto-increment": 自增

    "mongoose-paginate": 分页

    "jsonwebtoken": 一种紧凑的URL安全方法，用于在网络通信的双方之间传递

    "koa-body": 解析请求体中传进的数据

    "koa-cors": 跨域请求

    "koa-helmet": 配置请求头

    "koa-json": 返回json

    "koa-router": 路由

    "nodemailer": 发送邮件

    "nodemailer-smtp-transport": 自动发送给服务器

    "qn": 七牛upload

    "redis": 解决重启服务器丢失session问题

    "request": 我们可以用它来实现HTTP响应流的转接、模拟Form表单提交、支持HTTP认证、OAuth登录、自定义请求头等

    "simple-netease-cloud-music": 简易的网易云音乐

    "yargs": 定制化的参数功能

```





`.editorconfig`文件的作用：

> 帮助开发人员定义和维护一致的编码风格在不同的编辑器和IDE

```
属性：
　　indent_style: 设置缩进风格，tab或者空格。tab是hard tabs，space为soft tabs。

　　indent_size: 缩进的宽度，即列数，整数。如果indent_style为tab，则此属性默认为tab_width。

　　tab_width: 设置tab的列数。默认是indent_size。

　　end_of_line： 换行符，lf、cr和crlf

　　charset： 编码，latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom。

　　trim_trailing_whitespace： 设为true表示会除去换行行首的任意空白字符。

　　insert_final_newline: 设为true表明使文件以一个空白行结尾

　　root: 表明是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件。
```
