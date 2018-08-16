vue2.0基本用法

(npm run dev)

`vue init webpack demo`

和angular有许多类似的地方，由于使用了大量ES6语法，所以不支持IE8以下版本

### 一、基本语法
vue实例最外层放一个<div id="app"></div>

1.{{}}:同angular一样，使用{{}}包裹变量
```
<h1>{{ name }}</h1>
```
同样，和angular一样，可以在{{}}里面写表达式，{{1+1}}{{Math.random()>0.5}}{{‘abc’.toUpperCase()}}{{ 10>30?30:60 }},注意，这里不能写if()else

2.v-model
和angular的ng-model类似，实现数据的双向绑定
```
<h1>{{ name }}</h1>
<input type="text" v-model="name" />

使用name变量之前，要先定义
创建模板对应的vue实例
var vm=new Vue({
    el:'#app',//el:elements Vue对应的根标签
    data:{//对应的数据
        name:'小明'
    }
})

```
在data中可以定义变量数组对象字符串

3遍历v-for(in/of)
不仅可以遍历数组元素，还可以遍历数组下标
```
	<ul>
		<li v-for="(person,i) of people">{{i+person.name}}</li>
	</ul>

var vm=new Vue({
    el:'#app',
    data:{
       people:[
          {name:'xiaoming'},
          {name:'xiaohong'},
        ]
    }
})
```
使用v-for遍历对象的value；
```
<li v-for="value in mine">{{value}}</li>

var vm=new Vue({
    el:'#app',
    data:{
       mine:{
          name:'xiaoming',
          age:18
        }
    }
})
```

v-for可以遍历对象的value和key值，注意value在前，key在后

```
<li v-for="(value,key) in mine">{{value}}{{key}}</li>
```

4.点击事件v-on:click="change"
无论使用什么事件，都是用v-on指令，后面跟事件名称即可,可以不加()在不传参的情况下
```
<h3 v-on:click="show">点击显示</h3>

定义函数时，要使用methods
var vm=new Vue({
    methods:{
        show:function(){
            console.log(event);
        }
        //可以简写成一下的形式ES6新语法
        show(){
            console.log(event)
        }
    }
})
```
> 如果想要得到里面的变量，可以直接写vm.变量名，如vm.show或vm.name;

5.v-if决定是否渲染,可以和v-else连用
```
<section v-if="flag">hhhh</section>
<section v-else>lksdjfkaldj</section>
```

6.v-show决定是否显示
 ```
<div v-show="flag">h2</div>
```

7.v-on添加事件
```
<button v-on:click="test1">按钮1</button>

可以简写成@
<button @click="test1">按钮1</button>

还可以写其他的事件
<button @mouseover="test2">按钮2</button>
<input type="text" @keyup='test3' />
等等

还可以添加修饰符，针对某一个按键起作用
<input type="text" @keyup.enter='test3' />
只用在点击enter键时，才会执行函数，注意，这样的针对某一个按键起作用，就必须绑定在键盘事件上
<input type="text" @keyup.up='test3' />上下键的上

同样也可以取消默认事件
<a href="http://www.baiu.com" @click.prevent="test4">baidu</a>

还可以取消冒泡
<a href="http://www.baiu.com" @click.stop="test4">baidu</a>

```
> 说到这里，可以复习一下原生的取消默认事件的方法，和取消冒泡的方法
```
event.stopPropagation取消冒泡事件
event.preventDefault;取消默认事件
```


8.v-bind绑定属性
```
<h2 v-bind:class="class"></h2>

同样可以简写成
<h2 :class="class"></h2>

不光可以写class，其他的属性都可以这样写，
在使用v-bind简写形式时，
必须加冒号，不然会把它里面的值当成一个字符串显示，而不是我们要的变量得形式
```

9.计算属性computed;
```
<h2>{{ aDouble }}</h2>
<h2>{{ aPlus }}</h2>
<input type="number" v-model="aPlus">

	var vm=new Vue({
		el:'#app',
		data:{
			a:10,
		},
		computed:{//计算属性
			aDouble:function(){
				return this.a*2;//这里的this.a==vm.a;
			},
			aPlus:{
				get:function(){
					return this.a*2;
				},
				set:function(newValue){
					console.log(newValue);
					if(newValue>100){
						this.a=100;
					}else if(newValue<=0){
						this.a=0;
					}else{
						this.a=newValue;
					}
				}
			}
		}
	})
```
计算属性可以内部编写两个函数，分别是get和set，读取计算属性的时候走get方法，设置计算属性值得时候，就走set方法，set方法中的参数就是要设置的新值，可以再get方法内部进行条件判断，决定是否使用其新值

> 对于计算属性，直接当成普通属性使用即可
不能加括号作为函数使用 ，他代表一个函数的返回值
如果把它写在methods里面，那么他就是一个函数的方法


计算属性实现的效果，使用函数也都可以实现，，但是尽量使用计算属性，计算属性更加加高效，对于取值来说，只有当值发生改变，计算属性内部的函数才会执行一次，而函数会使用几次就执行几次


9.实例属性
vm.$data
vm.$el
vm.$parent
vm.$root
vm.$children
在路由分级时，会用到children

10.实例方法vm.$watch
同angular，
```
	// 使用$watch可以监测某个值得变化
	vm.$watch('a',function(newValue,oldValue){
		console.log("newValue="+newValue);
		console.log("oldValue="+oldValue);
	})
返回一个函数，用来停止触发回调
var unwatch = vm.$watch(‘a’, cb);
unwatch();
```

### 二、组件
类似于angular的自定义指令，用来封装重复使用的代码块

注册组件
```
如果需要换行，可以使用普通字符串，后面用\拼接，或者使用模板字符串
Vue.component('hello',{
		template:'<div>\
						<h1>我是hello</h1>\
						<p>我是HELLO标签</p>\
						<p>我是HELLO标签{{msg}}</p>\
					</div>',
		data(){//组件中的data数据，必须是函数，数据通过return进行返回


			// 组件中的data必须是函数的原因是：每个组件欧拥有自己独立的数据，不与其他共享，因为共享数据后，会相互影响，导致数据错乱
			return {
				msg:'message'
			};
		}
	})

在html代码中，只需要加入<hello></hello>就可以了
```
这是一个全局的标签
其中template对应的是被替换过去的HTMl模板结构；
必须存在一个跟标签(root element)


下面创建一个局部的实例
```
	var vm=new Vue({
		el:'#app',
		components:{//局部组件直接写在实例的components中，其他实例无法使用。
			hi:{
				template:'<h2>我是hi标签</h2>'
			}
		}
	})
```

父组件与子组件的传值props


> 在这里需要提一下引用类型；
数组和对象都是引用类型，其他的都是普通的值类型

```
var arr=[1,2,3,4];
var arr2=arr;
arr2.push(5);
此时arr与arr2同时都变成了[1,2,3,4,5];
这是因为arr定义一个数组，就会开创一个空间，并把值都传到空间，然后arr指向了这个空间，定义一个arr2,让他等于arr，这时arr2也指向了这个空间，所以通过这两个随意改变指都会影响到另一个，这样的数组就是引用型。此仅为个人理解。
```

组件内部的props里面的值都是组件的属性，用于接受外界的值，然后赋值到组件内部

```
<my-component :msg="msg"></my-component>

	Vue.component('my-component',{
		props:['msg'],//props用于接受外界传递的值
		template:'<p>message={{msg}}</p>'
	})
```

	 父组件与子组件之间的传值

```
<my-component :msg="msg"></my-component>
这里的msg是一个变量

	Vue.component('my-component',{
		props:['msg'],//props用于接受外界传递的值
		template:'<p>message={{msg}}</p>'
	})
	var vm=new Vue({
		el:'#app',
		data:{
			msg:'message'
		}
	})

在页面显示的<p>message=message</p>
```
这里的props是单向数据流的，但是对于引用类型的数组对象不能单向；


使用slot分发
作用类似于angular的ng-transclude嵌套元素；
```
	Vue.component('my-app',{
		template:`
				<div>
					<p>我是my-app</p>
					<slot>如果没有分发内容，显示我</slot>
					<slot name="header">如果没有分发内容，显示我</slot>

				</div>`
		
	})


具名slot的使用
		<my-app>
			<h2 slot="header">h2</h2>
			<hr>
			<h3 slot="footer">h3</h3>
			<hr>
			<h4>h4</h4>
		
		</my-app>
```
如果写两遍slot，那么就会打印两遍，但会报错;但是，如果把他变成具名属性，就可以正常使用了


// export导出
// import导入

### 三、使用vue做一个项目

命令行内：
1.通过命令行安装vue脚手架
npm install -g vue-cli

2设置项目名称
vue init webpack 项目名

cd 项目名

npm install

npm run dev运行项目默认打开8080端口


####路由
路由安装
npm install vue-router

npm run dev

完成之后进行的步骤：
在main.js中
```
1.import VueRouter from 'vue-router'//引入路由文件
```
引入home
```
import Home from 'home'
```
//2.安装插件main.js
```
Vue.use(VueRouter)
```
3.编写页面在app.js
```
 <router-link to="/home"></router-link>
```
4.定义路由main.js
```
const routes=[
	{path:'/home',component:Home}
	path对应的是app.js 中to="/home"
	components对应的是引入的名称
]
```
其中的
```
const routes=[
	{ path: '/', component: Home }
      表示打开默认显示home页面
]
```
5创建VueRouter实例main.js
```
const router = new VueRouter({
	routes//这是简写(routes:routes)
})
```
6.在main.js中的
```
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
添加：
  router
})
```
添加一个文件夹在src文件夹下，里面添加我们需要的页面，每个页面只需要一个后缀名为vue的文件，里面就包含了html，css和js的所有内容。其中html写在<template></template>内，并且在里面添加一个根标签，把内容都放在我们设置的跟标签里面

和angular不同的是，路由跳转没有直接使用a标签的锚点，而是有它专用的标签
<router-link to="/home">首页</router-link>
，同样，也不需要使用ui-view,而是它专用的
<router-view></router-view>

replace属性
```
<router-link :to="/home" replace></router-link>//页面切换不会留下历史痕迹
```

tag属性,会渲染成tag指定的标签
```
<router-link :to="/home" tag="li">Home</router-link><li>Home</li>
```


active-class属性
这个属性是设置激活链接时的class属性
```
<router-link :to="/home" active-class="active">Home</router-link>
```
> active-class属性的默认值是router-link-active

exact属性
开启router-link的严格模式
```
<router-link :to="/" exact>home</router-link>
```





二级路由
```
先引入
import One from 'one',
import two from 'two',

const router=[
	{path:'/home',component:Home,children:[
		{path:'one',component:One},
		{path:'two',component:two},
	]}
]

 <router-link to="/home/one">One</router-link>
<router-view></router-view>
```

网络请求
npm install vue-resource
安装
```
Vue.use(VueResource)


export default{
	data(){
		return {
			data:[]//把返回的数据都放到数组中
		}
	},
	mounted(){
		this.$http.get().then(function(res){
			console.log(res);
			// console.log(JSON.parse(res.body).data);
			this.data=JSON.parse(res.body).data;
		})
	}
}
```
网络请求使用mounted



### 引用第三方js库：

在需要的.vue文件中，script里面引入；
import $ from '../../static/lib/jquery-3.1.1.min.js'

就这么简单



```
export default{
    data(){
        return (
            //定义的变量写这里
            data:[];
            name:'xiaoming'
        )
    },
    mounted(){
        //js代码写在这里
       在引用swiper时，把swiper的js代码放到这里，如果是动态创建的元素，
       建议用setTimeout包住
           new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:2000,
			    speed:1000,
			    autoplayDisableOnInteraction:false,
			    pagination: '.swiper-pagination',
			})
    }，
    methods:{//方法写这里
        get(){}
    }

}

```
