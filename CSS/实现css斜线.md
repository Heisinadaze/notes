使用单个标签，实现斜线效果


![css斜线效果](http://upload-images.jianshu.io/upload_images/2941543-104ccda900a82f9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

假定这是一个div,宽高100px;

* 方法一：c3旋转缩放



![css](http://upload-images.jianshu.io/upload_images/2941543-ea381a416366a3b5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![css](http://upload-images.jianshu.io/upload_images/2941543-fabbac3e496b38e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![css](http://upload-images.jianshu.io/upload_images/2941543-f6ff01b28920a675.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
div{
  position:relative;
  margin:50px auto;
  width:100px;
  height:100px;
  box-sizing:border-box;
  border:1px solid #333;  
}

div::before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:50px;
  box-sizing:border-box;
  border-bottom:1px solid deeppink;
  transform-origin:bottom center;
  // transform:rotateZ(45deg) scale(1.414);
  animation:slash 5s infinite ease;
}
```

* 方法二：线性渐变linear-gradient()

渐变方向45deg,渐变色依次为transparent -> deeppink -> deeppink ->transparent。

```
        div{
            position:relative;
            margin:50px auto;
            width:100px;
            height:100px;
            box-sizing:border-box;
            border:1px solid #333;
            background:linear-gradient(45deg, transparent 49.5%, deeppink 49.5%, deeppink 50.5%, transparent 50.5%);
        }
```

* 方法三：伪元素+三角形
  
![css](http://upload-images.jianshu.io/upload_images/2941543-764b43ba3cea36a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
下面一个这样的三角，上面一个白的，盖着他

```
三角
        div::before{
            content:"";
            position:absolute;
            left:0;
            bottom:0;
            width:0;
            height:0;
            border:49px solid transparent;
            border-left:49px solid deeppink;
            border-bottom:49px solid deeppink;
        }
```

* 方法四clip-path
```
div {
    width: 100px;
    height: 100px;
    -webkit-clip-path: polygon(0 0, 0 100px, 100px 100px, 0 0);
    background: deeppink;
}
//polygon里面放三个点
```


完整代码
```
body{
  background:#eee;
}
div{
  position:relative;
  margin:50px auto;
  width:100px;
  height:100px;
  box-sizing:border-box;
  border:1px solid #333;  
  background:#fff;
  line-height:120px;
  text-indent:5px;
}

div::before{
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  width:0;
  height:0;
  border:49px solid transparent;
  border-left:49px solid deeppink;
  border-bottom:49px solid deeppink;
  animation:slash 6s infinite ease;
}

div::after{
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  width:0;
  height:0;
  border:48px solid transparent;
  border-left:48px solid #fff;
  border-bottom:48px solid #fff;
  animation:slash2 6s infinite ease;
}

@keyframes slash{
  0%{
    transform:translate(-50px);
  }
  30%{
    transform:translate(0px);
  }
  100%{
    transform:translate(0px);
  }
}
@keyframes slash2{
  0%{
    transform:translate(-100px);
  }
  30%{
    transform:translate(-100px);
  }
  60%{
    transform:translate(0px);
  }
  100%{
    transform:translate(0px);
  }
}
```






































































































