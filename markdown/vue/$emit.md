使用$emit

在父组件中引用子组件

```
<child @from-child-msg="方法名"></child>
```

在子组件中使用$emit

```
this.$emit('from-child-msg', 子组件传递的值)
```

传进去的值，会变成改方法名的第一个默认参数
eg:


![子组件中](http://upload-images.jianshu.io/upload_images/2941543-04a9f998df107ab2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![父组件中](http://upload-images.jianshu.io/upload_images/2941543-4063bbf3fc604225.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

getNums是在父组件methods中定义的方法
