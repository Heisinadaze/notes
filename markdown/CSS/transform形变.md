有四个属性值：
translate  // 位移(距离，有translateX,translateY)
rotate // 旋转（角度deg，也有相应的XY方向）
scale  //缩放 （缩放倍数，有XY方向的）
skewX  /  skewY // 倾斜

常用于2d变化中

> 3D效果

在父元素加
```
transform-style: preverse-3d;//开启3d模式
```

设置舞台深度
```
perspective: 200px;
```

设置舞台中心点
```
perspective-origin: 0 0;
```

设置元素背面不可见，是元素给元素自身上添加
```
backface-visibility: hidden;
```


使用transform进行设置
```
transform: rotate3d(1,1,0,90deg)
第一个数字表示X轴是否发生旋转，第二个参数表示Y轴是否旋转，第三个Z轴，第四个参数为旋转角度

transform:translate3d(100px,100px,1000px)

transform:scale3d(1.5,0.5,1);








```
