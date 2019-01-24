
1. *onLaunch*: 

> 小程序初始化完成时（全局只触发一次）；

2. *onShow*: 

> 小程序启动，监听小程序显示；

3. *onHide*: 

> 监听小程序隐藏；

4. *onError*： 

> 错误监听；

5. *onPageNotFound*

> 404 页面不存在；


**官方对前台、后台定义： **

> 当用户点击右上角关闭，或者按了设备 Home 键离开微信，
小程序并没有直接销毁，而是进入了后台；
当再次进入微信或再次打开小程序，
又会从后台进入前台。
需要注意的是：只有当小程序进入后台一定时间，
或者系统资源占用过高，才会被真正的销毁。


```
App({
  onLaunch(options) {
    // Do something initial when launch.
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/...'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  }
})
```

### 获取App实例*getApp(Object)*

```

```

