
## ObjectId

12个字节

* 前四个表示时间戳

* 接下来3个字节是机器识别码

* 紧接着的两个字节由进程Id组成（PID）

* 最后三个字节是随机数

> MongoDB采用ObjectId，而不是其他比较常规的做法（比如自动增加的主键）的主要原因，因为在多个 服务器上同步自动增加主键值既费力还费时。

**获取创建文档保存的时间戳**

```
ObjectId("nnnnnn").getTimestamp()

返回ISO格式的文档创建时间
```

**转换为字符串**

```
new ObjectId().str
```



# 自动增长

1. 创建一个counters集合，
`db.createCollection("counters")`

2. 向counters中插入数据，使productid作为key
`db.counters.insert({_id:"productid",sequence_value:0})`

3. 创建一个Javascript函数
```
function getNextSequenceValue(sequenceName){
   var sequenceDocument = db.counters.findAndModify(
      {
         query:{_id: sequenceName },
         update: {$inc:{sequence_value:1}},
         new:true
      });
   return sequenceDocument.sequence_value;
}
```

4. 使用getNextSequenceValue函数创建新文档
```
db.products.insert({
   "_id":getNextSequenceValue("productid"),
   "product_name":"Apple iPhone",
   "category":"mobiles"})
```

5. 查看
`db.products.find()`


![_](https://github.com/Heisinadaze/mynotes/blob/master/MongoDB/id++.png)

