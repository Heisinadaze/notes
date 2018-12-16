
## MapReduce

```
db.col.mapReduce(
  function () {emit(key, value);},
  function (key, value) {return reduceFunction},
  {
    out: col,
    query: document,
    sort: document,
    limit: number
  }
)

map ：映射函数 (生成键值对序列,作为 reduce 函数参数)。
reduce 统计函数，reduce函数的任务就是将key-values变成key-value，也就是把values数组变成一个单一的值value。
out 统计结果存放集合 (不指定则使用临时集合,在客户端断开后自动删除)。
query 一个筛选条件，只有满足条件的文档才会调用map函数。（query。limit，sort可以随意组合）
sort 和limit结合的sort排序参数（也是在发往map函数前给文档排序），可以优化分组机制
limit 发往map函数的文档数量的上限（要是没有limit，单独使用sort的用处不大）
```



eg:

```
>db.posts.mapReduce( 
   function() { emit(this.user_name,1); }, 
   function(key, values) {return Array.sum(values)}, 
      {  
         query:{status:"active"},  
         out:"post_total" 
      }
).find()

在 posts 集合中使用 mapReduce 函数来选取已发布的文章(status:"active")，
并通过user_name分组，计算每个用户的文章数
```























