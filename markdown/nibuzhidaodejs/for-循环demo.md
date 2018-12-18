
![for](http://upload-images.jianshu.io/upload_images/2941543-cf39b2ab7343b89c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```
    var num = 0;
    outermost:
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                break outermost;
            }
            num++;
        }
    }
    console.log(num) // 5
```
outermost表示外部的for语句。如果每个循环正常执行10次，则num++会执行100次。但内部break带了一个参数，即要返回的标签。添加这个标签的结果将导致break语句不仅退出当前循环，还会退出外部循环。



![continue](http://upload-images.jianshu.io/upload_images/2941543-82f2a296e2f1ba11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```
    var num = 0;
    outermost:
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                continue outermost;
            }
            num++;
        }
    }
    console.log(num) // 95
```



#### switch

```
    var i = 100
    switch (i) {
        case 25: 
            alert('25');
            break;
        case 35:
            alert('35');
            break;
        case 45:
            alert('45');
            break;
        default: 
            alert('other')
    }
```
![image.png](http://upload-images.jianshu.io/upload_images/2941543-ba72d164dd0d2f5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)































