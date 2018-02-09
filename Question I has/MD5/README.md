# MD5


![image.png](http://upload-images.jianshu.io/upload_images/2941543-928997435fcb8aa1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![image.png](http://upload-images.jianshu.io/upload_images/2941543-8dbdca399a368fb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


使用
引入
import upload from '../../md5/uploadMd5'


![上传文件](http://upload-images.jianshu.io/upload_images/2941543-3d0e15546063c06f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



在
```
:before-upload="beforeAvatarUpload"

beforeAvatarUpload () {
 
}

```


![image.png](http://upload-images.jianshu.io/upload_images/2941543-73022dcc27e304d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

返回的参数中success=true表示后台已有该文件
就不会再上传。




