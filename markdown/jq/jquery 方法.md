

### 获取内容

```
.text() // 设置或返回所选元素的文本内容

.html() // 设置或返回所选元素的内容（包括html标记）

.val() // 设置或返回表单字段的值

```

*回调函数：*
两个参数： 被选中列表中当前元素的下标，原始值

```
$('button1').click(function() {
    $('#test1').text(function(i, orgText) {
        return `Old text: ${orgText} New text: Hello world! (index: i);`
    })
})

```


### 获取属性

```
.attr('属性') // 获取元素属性值

修改属性值
$('.link').attr('href', 'http://www.baidu.com');

设置多个值
$('.link').attr({
    'href': 'http://www.baidu.com',
    'title': 'a html'
});
```

*回调函数：*
两个参数： 被选中列表中当前元素的下标，原始值

```
$('button1').click(function() {
    $('#test1').text(function(i, origValue) {
        return `${origValue} Hello world!`;
    })
})

```



### 添加元素




*add*

向匹配的元素集添加元素

```
.add(selector) // 字符串值，把选到的选择器都添加进去

.add(elements) // 添加一个或多个元素

.add(html) // 添加html片段

.add(jQueryObject)

.add(selector, context) // context: 选择器开始进行匹配的位置

```



###### 添加新的HTML内容

```
.append(); // 在被选元素的结尾插入内容，添加多个时，以','分隔

.prepend(); // 在被选元素的开头插入内容

.after(); // 在被选元素之后插入内容

.before(); // 在被选元素之前插入内容

let text1 = '<p>文本1</p>' // 用html创建元素
let text2 = '$("<p></p>").text("Text2")' // 用jq创建元素
let text3 = document.createElement("p");
text3.innerHTML = 'Text.'; // 用原生js创建元素

$('p').append(text1, text2, text3);
```


### 删除内容

```
.empty() // 从被选元素中删除所有子元素

.remove() // 删除被选元素，及其子元素


过滤被删除的元素
remove() 方法接收一个参数，允许对被删元素进行过滤


```

---




### 操作css



```
.addClass(); // 向被选元素添加一个或多个类

.removeClass(); // 从被选元素删除一个或多个类

.toggleClass(); // 对被选元素进行添加/删除类的切换操作

.css(); // 设置或返回样式属性

```




### 操作元素尺寸

```
.width(); // 设置或返回元素的宽度(不包括内边距、边框、外边距)

.height();

.innerWidth(); // 返回元素的宽度（包括内边距）

.innerHeight();

.outerWidth(); // 返回元素的宽度（包括内边距和边框）

.outerHeight();
```























































