
### nginx 刷新404

```
	location / {
            root   d:\static\add;
            index  index.html index.htm;
	    try_files  $uri $uri/ /index.html =404;
        }
```

加**try_files**
