本地缓存
只能存储字符串的数据，对于JS中常用的数组或对象却不能直接存储。
需要转换



![image.png](http://upload-images.jianshu.io/upload_images/2941543-6b20152bc2d14187.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```

let obj = {name: 'Tom'};
let str = JSON.stringify(obj);

// 存储
sessionStorage.obj = str;
//  读取
str = sessionStorage.obj

obj = JSON.parse(str)

  
```

![image.png](http://upload-images.jianshu.io/upload_images/2941543-e8b51709ed1fd448.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
// 存储
sessionStorage.setItem('str', obj)

// 读取
sessionStorage.getItem('str')
```
