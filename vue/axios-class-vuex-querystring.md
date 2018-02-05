一、通过axios插件进行数据请求：


* get请求
```
   this.$https.get(`/msgboard/msgBoardPage
    ?zoneId=${this.user.id}                     
    &pageNo=${this.currentPage}
    &pageSize=10`)
    .then(res => {
        console.log(res)
    })
```
```
    this.$https.get(`/msgboard/msgBoardPage
                      ?zoneId=${this.user.id} 
                      &pageNo=${this.currentPage}
                      &pageSize=10`)
    .then(res => {
        console.log(res)
    })
```

* post请求
```
     this.$https.post(`/msgboard/msgBoardAdd`,
                        querystring.stringify({
                            message: this.textarea,
                            state: this.value
                        }))
    .then({
        console.log(res)
    })
```
> ${}   里面放变量

二、动态添加class

```
    :class="{'class名': i>1 && i<5}"

    // 根据条件添加class，注：大括号外面要加引号
    
    动态添加多个class名
    :class="{'class1': 条件一, 'class2': 条件二}"
```

三、vuex

官方定义：一种集中式的存储管理应用所有组件的状态(状态管理模式)

![依赖](http://upload-images.jianshu.io/upload_images/2941543-a774b846e866a9dc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

用来兼容IE不支持store的情况
在模块化的打包系统中，必须显示的通过
```
Vue.use()
```
来安装


![引入](http://upload-images.jianshu.io/upload_images/2941543-e359a5bcfc7a2486.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`也可以通过引用全局的script标签引入`

使用场景：开发大型单页应用

* 核心就是store仓库，它包含着你的应用中大部分的状态(state)

vuex 和单纯的全局对象有两点不同

1.Vuex的状态是响应式的。
2.不能直接改变store中的状态。改变 store 中的状态的唯一途径就是显式地提交(commit) mutations。

在main.js中

![注入](http://upload-images.jianshu.io/upload_images/2941543-6d8bf1842831538f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

把store实例注入到所有的子组件
并且子组件能够通过this.$store()访问到

当一个组件需要多个状态时，如果都声明为计算属性会重复冗余。所以引出mapState辅助函数帮助生成计算属性

```
import {mapState} from 'vuex'

computed: mapState({
    count: state => state.count

    countAlias: 'count' // 等同于 `state => state.count`

    countState (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        return state.count + this.localCount
    }
})
```
getters 从store中的state中派生出一些状态；Getters 接受 state 作为其第一个参数


mapGetters 辅助函数：仅仅是将 store 中的 getters 映射到局部计算属性
```
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}

```
Mutations
`更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
`
```
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```
需要以相应的 type 调用 store.commit 方法
```
store.commit('increment')
```


### 四、querystring类
node.js原生自带类，直接`require('querystring')`使用

```
四个方法：
querystring.stringify(obj, [sep], [eq])； // 对象格式化成参数字符串

querystring.parse(str, [sep], [eq], [options]); // 字符串格式化成对象

querystring.escape(); // 参数编码

querystring.unescape(); // 参数解码

```

**1.querystring.stringify(obj, [sep], [eq])；**

接受三个参数
[sep]: 分隔符，默认`&`
[eq]: 分配符，默认`=`

```
    let obj = {
      name: '名字',
      age: 12
    }

    let param = querystring.stringify(obj)
    console.log(param)

```
![image.png](http://upload-images.jianshu.io/upload_images/2941543-736b80f9ff96692b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



**2.querystring.parse(str, [sep], [eq], [options])；**

```
    let a = querystring.parse(param)
    console.log(a)
```
![image.png](http://upload-images.jianshu.io/upload_images/2941543-a2ce47e0b208d4c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**3.querystring.escape**



