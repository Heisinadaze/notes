

**display: grid \ inline-grid \ subgrid**

```
grid: 生成块级网格
inline-grid: 生成行内网格
subgrid: 如果网格容器嵌套网格容器，用来继承父网格容器的列、行大小。

```

> 注：设置了网格布局之后，`column`, `float`, `clear`, `vertical-align`属性无效。


**grid-template-columns**
**grid-template-rows**
```
grid-template-columns 设置行和列大小

track-size: 轨道大小，可以css长度，百分比，分数，（fr单位）。
line-name: 网格线名字
```

eg: 
```
display: grid;
grid-template-columns: 40px 50px auto 50px 40px;
grid-template-rows: 25% 100px auto;

定义网格线名字，写[]里面
grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];

重复的部分用repeat()简化
grid-template-columns: repeat(3, 20px [col-start]) 5%;

===

grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start] 5%;
```

使用`fr`单位，将容器分为几等份。

如果包含实际值，设置`fr`的行或列将平分剩余部分；



**grid-template-areas**

```
'grid-area-name': 网格项的grid-area名
'.': 空网格单元
'none': 不定义网格区域
```

**grid-column-gap**
**grid-row-gap**

```
网格单元间距
```

> 简写： `grid-gap`

eg:

```
    display:grid;
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px; 
    grid-gap: 10px 15px;
```

**justify-items**
网格内对齐方式  但会影响宽度


```
start: 左对齐
end: 右对齐
center: 居中

```


**align-items**
没作用

```
start: 顶部对齐
end: 底部对齐
center: 居中对齐
```
















