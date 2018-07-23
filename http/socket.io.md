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
















