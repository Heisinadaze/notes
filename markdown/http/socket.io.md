#### 一、实现一个双向通讯

> `socket`主要有两种方法
`socket.on('方法名', '参数')` // 接收数据
`socket.emit('方法名', '参数')` // 向服务器 \ 客户端发送数据

###### 1. 客户端

引入
```
// 直接下载下来，script引入
<script type="text/javascript" src="./socket.io.js"></script>

// 推荐
import VueSocketio from 'vue-socket.io'
// 在vue中
Vue.use(VueSocketio, 'http://localhost:8000')
```
![socket.io](https://upload-images.jianshu.io/upload_images/2941543-a3648fa94ba2a69b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 在vue中，通过`this.$socket`获取socket.io实例

```
// 自定义methods
    send () {
      this.$socket.emit('send', '111')
    },
```

获取返回值

```
// mounted () {}

    this.$socket.on('acc', msg => {
      alert(msg)
      console.log(1)
    })
```

###### 2. 服务端(node)

先接收一个`http.createServer`返回的变量

![socket.io](https://upload-images.jianshu.io/upload_images/2941543-d856df8bf1cf07bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
io.on('connection', function(socket) {
    //接收并处理客户端的hi事件
    socket.on('acc', function(data) {
        console.log(data);

        //触发客户端事件c_hi
        socket.emit('事件','返回的变量')
    })

    //断开事件
    socket.on('disconnect', function(data) {
        console.log('断开',data)
        socket.emit('leave','离开');
        //socket.broadcast用于向整个网络广播(除自己之外)
        //socket.broadcast.emit('c_leave','某某人离开了')
    })

});
```











#### 二、实现一个简易聊天窗口





#### 三、websocket

使用H5自带的websocket。

```
    var host = window.location.host
    if (location.protocol === 'https:') {
      var server = 'wss://' + host + '/wss'
    } else {
      var server = 'ws://' + host + '/wss'
    }
    console.log(server)
    this.websock = new WebSocket(server)
    socket.onopen = function (event) {
      console.log('已连接')
      socket.send('来自服务端的消息')
    };
    socket.onmessage = function (event) {
      console.log('收到消息')
      console.log(event.data)
    }
    socket.onclose = function (event) {
      console.log('链接失败')
      console.log(event.code)
      console.log(event)
      let _this = this
      setTimeout(() => {
        _this.initWebSocket()
      }, 1000)
    }
```

###### 实现断开重连机制

[git地址](https://github.com/joewalnes/reconnecting-websocket)

```
cnpm i reconnecting-websocket

把上面的new WebSocket()
替换成
new ReconnectingWebSocket('ws://....')

正常使用默认的参数就可以了
```

* 遇到问题
![socket](https://upload-images.jianshu.io/upload_images/2941543-e5d3fac7e0998e71.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

链接关闭，event.code = 1006;
在固定时间内没有通信 就会自动断开`TCP`链接

在`nginx`中设置
```
proxy_read_timeout: 默认60s;
```













