#### flex布局

概念：主轴、 交叉轴
可以让元素在主轴和交叉轴上面任意对齐，宽高占比，顺序排列
```
在父元素上设置
display: flex


justify-content
设置元素在主轴上的对齐方式
属性值：flex-start;主轴起点对齐
flex-end主轴终点对齐
center主轴中点对齐
space-bewteen把剩余的空间均分给项目与项目之间
space-around把剩余的空间均分给项目的两侧

align-items
设置项目在交叉轴上的对齐方式
flex-start交叉轴起点对齐
flex-end交叉轴终点对齐
center交叉轴中心对齐
stretch项目高度充满容器
baseline基线对齐

flex-direction
设置主轴方向
column从上到下
column-reverse从下到上
row代表主轴从左到右
row-reverse从右到左

flex-flow  
flex-direction和flex-wrap的简写 默认row nowrap

flex-wrap
如果元素过多，默认情况不换行，需要手动设置
wrap换行后高度均分容器高度。默认，但是换行后，有几行就会有几个主轴
wrap-reverse换行后上下顺序颠倒
nowrap不换行

align-content
当有多条主轴的情况下，设置项目在交叉轴上的对齐方式
flex-start/flex-end/center/space-between/space-around/stretch
针对多条主轴的设置方式，对单轴没用


针对单个元素设置的
flex-grow:占用空间（可以写占几份）
flex-shrink:缩小比例
flex-basis设置项目在主轴上占据空间，可以用%
align-self单独设置项目在交叉轴上的对齐方式
（auto | flex-start | flex-end | center | baseline | stretch）
order设置序号，排序















```












































































































