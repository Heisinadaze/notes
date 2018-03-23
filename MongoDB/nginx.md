
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
	client_max_body_size 50m;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        off;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
	
	server {
        	listen       8082;
        	server_name  127.0.0.1;

		location / {
            		root   d:\static\bloom;
            		index  index.html index.htm;
        	}
		
		# 管理
		location /api {
            		proxy_pass http://127.0.0.1:8000;
            		index  index.html index.htm;
        	}

        	error_page   500 502 503 504  /50x.html;
        	location = /50x.html {
            		root   html;
        	}
    	}

	server {
        	listen       8083;
        	server_name  127.0.0.1;

		location / {
            		root   d:\static\admin;
            		index  index.html index.htm;
        	}

		location /api {
            		proxy_pass http://127.0.0.1:8000;
            		index  index.html index.htm;
        	}


        	error_page   500 502 503 504  /50x.html;
        	location = /50x.html {
            		root   html;
        	}
    	}


}
