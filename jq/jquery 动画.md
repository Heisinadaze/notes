

### 隐藏和显示

```
.hide(speed,callback); // 隐藏

.show(speed,callback); // 显示

.toggle(speed,callback); // 切换显示或隐藏的状态

speed: 隐藏或显示的速度（'slow', 'fast', 或毫秒数）

callback: 隐藏或显示之后执行的函数名称


```


### 淡入淡出

```
.fadeIn(speed,callback);

.fadeOut(speed,callback);

.fadeToggle(speed,callback);

.fadeTo(speed,opacity,callback); // 允许渐变为给定的不透明度（值介于 0 与 1 之间）。

```

### 滑动

```
.slideDown(speed,callback);

.slideUp(speed,callback);

.slideToggle(speed,callback);


```

### 创建自定义动画

```
.animate({params}, speed, callback);

注：对元素移动位置时，需要先给元素设置position;
    使用驼峰命名法： paddingLeft...


使用相对值'+=, -='
$('div').animate({
    left: '250px',
    paddingLeft: '10px',
    height: '+=150px'
})

使用预定义的值show,hide,toggle

$('div').animate({
    height: 'toggle'
})

队列功能
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
```


### 停止动画

```
.stop(stopAll,goToEnd); // 用于停止动画或效果，在它们完成之前

适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。

可选的 stopAll 参数规定是否应该清除动画队列。
默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。

可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

```





























































































