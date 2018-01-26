
## 遇到node-sass安装不上的问题

1. 下载当前目录下`/node_modules/*`文件 

`
链接：https://pan.baidu.com/s/1mkj6YSS 密码：nib2
`

2. 在该项目`package.json`中删除`"node-sass": 5.4.3`,即`npm install`时不安装这个包

3. npm install, 把`/node_modules/*`下5个文件放进去

4. cnpm install --save-dev node-sass

5. npm run dev

