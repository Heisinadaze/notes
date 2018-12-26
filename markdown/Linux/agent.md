
[入口](https://console.ucloud.cn/uhids/agent)

安装命令
```
wget --timeout 3 -t 2  http://download.uhostsec.service.ucloud.cn:8090/ucloud-secagent-install.sh -O ucloud-secagent-install.sh && chmod +x ucloud-secagent-install.sh && ./ucloud-secagent-install.sh 3520076 && rm -f ucloud-secagent-install.sh
```

检查安装成功

`ps uax|grep uca`

下面的字段有`uca`就行了

`su name` 切换用户


### CentOS系统 7.2 64位竟然安装了iptables

卸载防火墙

```
yum remove iptables
```

[检查端口是否开通](http://tool.chinaz.com/port/)
