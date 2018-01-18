
# 跑项目遇到的问题

### 针对`package.json/scripts`中的命令

```
  "scripts": {
    "start": "NODE_ENV=production node --harmony index.js"
  }
```

其中`start`里面是合并了两个命令（这是Mac中bash或Linux的shell中的独特操作）

我们需要改成

```
  "scripts": {
    "start": "set NODE_ENV=production && node --harmony index.js"
  }

```




