
1. 安装命令

```
wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
chmod +x shadowsocks-all.sh
./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
```

2. 选择脚本

```
Which Shadowsocks server you'd select:
1.Shadowsocks-Python
2.ShadowsocksR
3.Shadowsocks-Go
4.Shadowsocks-libev
Please enter a number (default 1):
```

> 如直接输入3

3. 输入密码和端口

```
You choose = Shadowsocks-Go

Please enter password for Shadowsocks-Go
(default password: zzbiji.com):

password = 123

Please enter a port for Shadowsocks-Go [1-65535]
(default port: 8989):

port = 8989


Press any key to start...or Press Ctrl+C to cancel
```

4. 安装成功后

```
Congratulations, Shadowsocks-Go server install completed!
Your Server IP        :  45.32.73.59
Your Server Port      :  8989
Your Password         :  123
Your Encryption Method:  aes-256-cfb

Welcome to visit: https://teddysun.com/486.html
Enjoy it!
```

5. 客户端下载

[百度云](https://pan.baidu.com/s/1_KArCcOQoNitJT6x6G8UGQ )
提取码：cqcy 

6. 卸载

```
./shadowsocks-all.sh uninstall
```

7. 修改运行状态

```

Shadowsocks-Python 版：
/etc/init.d/shadowsocks-python start | stop | restart | status

ShadowsocksR 版：
/etc/init.d/shadowsocks-r start | stop | restart | status

Shadowsocks-Go 版：
/etc/init.d/shadowsocks-go start | stop | restart | status

Shadowsocks-libev 版：
/etc/init.d/shadowsocks-libev start | stop | restart | status
```

8. 默认配置文件路径

```
Shadowsocks-Python 版：
/etc/shadowsocks-python/config.json

ShadowsocksR 版：
/etc/shadowsocks-r/config.json

Shadowsocks-Go 版：
/etc/shadowsocks-go/config.json

Shadowsocks-libev 版：
/etc/shadowsocks-libev/config.json
```








