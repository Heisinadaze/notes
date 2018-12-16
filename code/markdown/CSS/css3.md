* border-radius // 圆角 （最多八个值，前四个和后四个中间用“/”线分隔）

* box-shadow // 盒阴影 (inset 20px 20px 30px blue)

* text-shadow // 字阴影 （当需要添加多个阴影的时候，中间用','分隔，box-shadow一样）

* background-size // 设置背景图片大小（contain / cover）

* background-origin // 设置背景图原点 (border-box / padding-box / content-box)

* background-clip // 设置背景图的裁剪

* 线性渐变
 background: linear-gradient() // 线性渐变 (to right, red, blue) (45deg, red, blue)

```
        div{
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg,red 30%,lightskyblue,blue);
        }

    <div></div>
```

![线性渐变](http://upload-images.jianshu.io/upload_images/2941543-e5621b2f2229fa2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 百分比写不写都行

* 径向渐变
background: radial-gradient() // 径向渐变 (at 100px 100px, red, blue)
```
        div{
            width: 200px;
            height: 200px;
            background: radial-gradient(at  50px 50px,red 10%,blue,gold)
        }

    <div></div>
```

![径向渐变 他在发呆](http://upload-images.jianshu.io/upload_images/2941543-7954f24c37681418.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


