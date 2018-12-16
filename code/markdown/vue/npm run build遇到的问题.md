

`vue run build`的时候


1. 提示
`Unexpected token: name (变量名)`

![image.png](https://upload-images.jianshu.io/upload_images/2941543-904efd864ba4d52f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这个一般是因为`UglifyJs`不能识别`ES6`
也就是说编译的时候，压缩失败了
具体是为什么，现阶段还不了解，先提供解决办法

根据报错提示的包文件，通过`ctrl + 鼠标左键`进行跟踪，找到这个文件

在网上找一个在线转es5的工具
[babel](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=)

把那个文件里面所有的内容全选在工具转换，然后替换掉原来的文件，就可以了。

2.  内存溢出

```
提示internal字样
```
![image.png](https://upload-images.jianshu.io/upload_images/2941543-7a5acc22befb5a78.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`package.json`文件中修改`build`

```
"build": "node --max_old_space_size=4096 build/build.js"
```



