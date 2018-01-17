

# 安装 

[官网地址](https://www.mongodb.com/)

百度云存windows-64安装包
`链接：https://pan.baidu.com/s/1mkgOEm8 密码：ttpf`

直接下载msi安装

[_](https://github.com/Heisinadaze/mynotes/blob/master/MongoDB/1.png)

自定义安装目录

在c: 目录下新建data 文件夹

在data文件夹下新建db文件夹和log文件夹

然后在安装的目录下，进入bin文件夹，执行

```
mongod --dbpath c:\data\db
```
成功会显示

[_](https://github.com/Heisinadaze/mynotes/blob/master/MongoDB/2.png)

打开一个新的命令行

在安装目录下新建一个`mongod.cfg`文件，

```
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db

```

在bin目录下，执行命令

```
mongod.exe --config "安装目录\mongod.cfg" --install
```

然后启动

```
mongo.exe
```









