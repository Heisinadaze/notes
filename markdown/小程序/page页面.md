
1. *data*: 初始值；

2. *onLoad*： 页面加载完成；

3. *onShow*: 页面显示；

4. *onReady*： 页面初次渲染完成；

5. *onHide*: 页面隐藏；

6. *onUnload*： 页面卸载完成；

7. *onPullDownRefresh*： 用户下拉；

8. *onReachBottom*： 页面上拉触底；

9. *onShareAppMessage*： 用户点击右上角转发；

> 此事件需要 return 一个 Object，用于自定义转发内容，返回内容如下：

```
return {
  title: '标题',
  path: '/', 必须是以 / 开头的完整路径,
  imageUrl: ''
  // 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。
  支持PNG及JPG。显示图片长宽比是 5:4。
  使用默认截图
}
```

10. *onPageScroll*： 页面滚动事件；

11. *onResize*： 页面尺寸变化；

12. *onTabItemTap*: 当前是`tab`页时，点击tab触发；

```
Page({
  data: {
    text: 'This is page data.'
  },
  onLoad(options) {
    // Do some initialize when page load.
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onResize() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      类似于`$nextTick`
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})
```


