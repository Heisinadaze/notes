
|属性|	类型|	默认值|	描述|	最低版本|
|--|--|--|--|--|
|navigationBarBackgroundColor	|HexColor|	#000000	|导航栏背景颜色，如 #000000| |	
|navigationBarTextStyle|	String|	white|	导航栏标题颜色，仅支持 black / white||	
|navigationBarTitleText	|String|	|	导航栏标题文字内容	||
|navigationStyle|	String|	default	|导航栏样式，仅支持以下值：default 默认样式，custom 自定义导航栏，只保留右上角胶囊按钮。参见注2。|	微信客户端 6.6.0|
|backgroundColor|	HexColor|	#ffffff|	窗口的背景色	||
|backgroundTextStyle	|String|	dark|	下拉 loading 的样式，仅支持 dark / light|	|
|backgroundColorTop	|String	|#ffffff|	顶部窗口的背景色，仅 iOS 支持	|微信客户端 6.5.16 |
|backgroundColorBottom	|String	|#ffffff|	底部窗口的背景色，仅 iOS 支持	|微信客户端 6.5.16|
|enablePullDownRefresh|	Boolean	|false	|是否开启当前页面的下拉刷新。||
|onReachBottomDistance|	Number|	50	|页面上拉触底事件触发时距页面底部距离，单位为px。||
|pageOrientation	|String|	portrait|	屏幕旋转设置，支持 auto / portrait / landscape ||

### 一 、 *tabBar*

|属性|	类型|	必填	|默认值|	描述|	最低版本|
|--|--|--|--|--|--|
|color|	HexColor|	是	|	|tab 上的文字默认颜色，仅支持十六进制颜色	||
|selectedColor|	HexColor|	是|	|	tab 上的文字选中时的颜色，仅支持十六进制颜色	||
|backgroundColor	|HexColor|	是|	|	tab 的背景色，仅支持十六进制颜色	||
|borderStyle|	String|	否|	black|	tabbar上边框的颜色， 仅支持 black / white	||
|list	|Array	|是|	|	tab 的列表，最少2个、最多5个 tab	||
|position	|String	|否|	bottom|	tabBar的位置，仅支持 bottom / top	||
|custom	|Boolean	|否	|false	|自定义 tabBar|

其中的list

```
list: [
  {
    "pagePath": "pages/index/index",
    "text": "首页",
    "iconPath": "",
    "selectedIconPath": "" // 选中的图片路径
  }
]
```

### 二 、 *networkTimeout*设置网络超时

```
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000,
    ...
  },
```

### 三 、 *requiredBackgroundModes*后台运行

```
  // 目前只支持audio
  "requiredBackgroundModes": ["audio"]
```

### 四 、 小程序跳转到其他小程序

```
wx.navigateToMiniProgramAppIdList
```

### 五 、 声明全局自定义组件

```
都声明到这里
usingComponents
```

### 六 、 分包、分包预下载规则*preloadRule*、声明分包结构*subpackages*

### 七 、 权限相关

```
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
```



