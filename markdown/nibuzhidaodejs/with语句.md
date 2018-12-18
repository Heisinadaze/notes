>  with 语句可以方便地用来引用某个特定对象中已有的属性，但是不能用来给对象添加属性。要给对象创建新的属性，必须明确地引用该对象。  

一个简单的例子

```
    function Lakers () {
        this.name = 'jike';
        this.age = 22;
        this.gender = "boy";
    }
    let perple = new Lakers();
    with (perple) {
        let str = "姓名：" + name + "<br/>";
        str += "年龄" + age + "<br/>";
        str += "性别" + gender;
        document.write(str)
    }

```


![image.png](http://upload-images.jianshu.io/upload_images/2941543-26b192728cd8dec1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
