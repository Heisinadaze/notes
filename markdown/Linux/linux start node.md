
## linux 系统启动node服务

用自带的`nohup`

1. 启动

```
nohup node index.js &
```

2. 停止node服务

```
pkill node
```

3. 注：

> 在当shell中提示了nohup成功后，
还需要按终端上键盘回车键退回到shell输入命令窗口，
然后通过在shell中输入exit来退出终端；
如果在nohup执行成功后直接点关闭程序按钮关闭终端的话，
这时候会断掉该命令所对应的session，
导致nohup对应的进程被通知需要一起shutdown，
起不到关掉终端后调用程序继续后台运行的作用。
