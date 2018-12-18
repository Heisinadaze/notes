

### 打包

`npm run build`


**Appache配置**

本机模拟服务器软件`WMP Server`

`httpd.conf`文件下

```
1. 
LoadModule rewrite_module modules/mod_rewrite.so

这一行取消注释

2.

<Directory />
  Options FollowSymLinks
  AllowOverride none (=> all 两个这种地方，都改成all)
  Order deny.all
  Deny from all
</Directory>
```

3.  `/www/.htaccess`文件
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html& [L]
  RewriteCond %{REQUEST_FiLENAME} !-f
  RewriteCond %{REQUEST_FiLENAME} !-d
  RewriteRule . index.html [L]
</IfModule>
```


