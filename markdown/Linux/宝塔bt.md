
安装Linux免费版

```
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh

会提示安装目录，直接安装在默认目录： y



关闭安全入口：rm -f /www/server/panel/data/admin_path.pl
```

### 解决安装MongoDB之后，不能直接在宝塔页面成功启动

```
/etc/init.d/mongodb start
```

