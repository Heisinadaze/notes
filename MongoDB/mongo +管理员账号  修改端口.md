### 一、了解

mongo 管理员账号有两种，一种是admin用户（可以给所有的数据库设置权限,但不能直接访问某个数据库），另一种是针对特定数据库访问权限的用户（给该用户授权，必须在admin数据库下设置）


### 二、具体操作

1. 打开cmd，进入mongodb文件夹下bin目录；

2. mongo.exe；
3. show dbs;
4. use admin；
5. db.createUser({user:'root', pwd: 'password', roles: ['userAdminAnyDatabase']});
6. 关闭该cmd；
7. 新开一个cmd (最好开管理员权限)；
8. mongodb/bin> **mongod --dbpath d:\data\db --auth**(有auth启动才会验证管理员，默认不需要身份验证);
9. 新开一个cmd， > `mongo.exe`
10. use admin
11. show collections; // 提示无权限，则表示开启了验证
12. db.auth('root','password') // 验证身份（返回1 表示验证成功， 返回0表示错误）
13. show collections // 正常返回
14. 在admin库验证成功，再跳转到其他库，则可以正常访问
15. 添加单个数据库管理员：`db.createUser({user: 'test', pwd: '123456', roles: [{role: 'dbOwner', db: '库名'}]})`；
16. show roles // 查看当前数据库的所有角色





### 三、附

| 权限 | 介绍 |
| --- | --- |
|Read：|允许用户读取指定数据库|
|readWrite：|允许用户读写指定数据库|
|dbOwner| 数据库管理员 |
|dbAdmin：|允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile|
|userAdmin：|允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户|
|clusterAdmin：|只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。|
|readAnyDatabase：|只在admin数据库中可用，赋予用户所有数据库的读权限|
|readWriteAnyDatabase：|只在admin数据库中可用，赋予用户所有数据库的读写权限|
|userAdminAnyDatabase：|只在admin数据库中可用，赋予用户所有数据库的userAdmin权限|
|dbAdminAnyDatabase：|只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。|
|root：|只在admin数据库中可用。超级账号，超级权限|
|backup、restore| 备份恢复 |
