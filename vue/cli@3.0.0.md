
全局安装3.0.0版本

**需要node版本大于9.0**

> 推荐使用yarn ==> `npm i -g yarn`
> 使用yarn install 

```
npm install -g @vue/cli
```

* 创建一个项目
```
vue create project
```

* pick preset:
> 上下选择第二个： `Manually select features`(手动预设)

> 空格选择

![vue@3.0.0](https://github.com/Heisinadaze/notes/blob/master/images/WechatIMG52.jpeg)

除了单元测试，都选上了

后面的根据自己的需求进行回车选择


#### 遇到问题

1. 版本更新问题

> 在安装最新`node@10.14.1`时，npm没有安装成最新版本，导致报错

![question 1](http://cdn.jsan.top//vue-cli@3/4fbe6ae8a58eb132537e902d54f6843.png)

**解决**

```
npm uninstall npm -g

重新安一遍node
```

### 装饰器问题

> Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.

已经设置过还有，应该是没有设置成功

```
可能是tsconfig.json加载失败

npm i @types/node --save-dev
```



