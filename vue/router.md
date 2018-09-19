
### 全局生命钩子


**router实例上添加**

1. `beforeEach`

2. `afterEach`


**组件上添加**

1. `beforeRouteEnter`

2. `beforeRouteUpdate`

3. `beforeRouteLeave`


所有方法带有的三个参数：

1. `to`

2. `from`

3. `next`



### 动态路由

```
{
  path: '/page/:id?'
}

this.$route.params.id
```
