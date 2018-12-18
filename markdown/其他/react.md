
> react 用于构建用户界面的javascript;

(npm start)

首先需要引入三个js文件
* react.js
* react-dom.js
* browser.js
中文官网 http://react-cn.com


### 基本语法
由于使用了jsx语法(javascript+Xml,browser.js提供)，所以script的type值如下：
```
<script type="text/babel"></script>
```
Xml一般用来做数据保存
react-dom.js提供了一个方法，ReactDOM
```
ReactDOM.render(<h1>hello react</h1>,document.getElementById('container'))
```
第一个参数是要渲染的内容，第二个参数是要时使用的容器

如果第一个参数内容较多的话，可以赋给一个变量，
```
let h1=<h1>hello react</h1>，
ReactDOM.render(h1,document.getElementById('container'))
```
自定义组件，createClass方法
需要拿一个变量接受返回值,变量首字母必须要大写
```
	let Wumai=React.createClass({
		render(){
			return <div>雾霾走了，天气好了</div>
		}
	})
```
自定义组件引入时，要写成一个单标签的形式
```
ReactDOM.render(<Wumai/>,document.getElementById('container'))
```
若想要在里面插入内容，可以写成双标签，把内容放在双标签里面；如想要传参进去，如<Wumai count={10} />的形式；
如果觉得麻烦的话，要是用变量的形式
```
let wumai=<Wumai/>
ReactDOM.render(wumai,document.getElementById('container'))
```
可以把容器提前获取出来
```
let container=document.getElementById('container');
```
在react中，要实现angular的ng-transclude类似功能，直接放到标签里面就可以了
```
	let SmallBox=React.createClass({
		render(){//可以把渲染内容放到一个小括号里面
			return (
					<div>这是一个小盒子</div>
				)
		}
	})
	let BigBox=React.createClass({
		render(){
			return (
				<div>
					<h1>这是大盒子</h1>
					<SmallBox/>
					<SmallBox/>
				</div>
			)
		}
	})
	ReactDOM.render(<BigBox />,container)
```


* 	列表的渲染

```
	let List=React.createClass({
		render(){
			let list=[
				<h3 key={'a'}>小明</h3>,
				<h3 key={2}>小红</h3>,
				<h3 key={3}>小猪</h3>
			]

			return (
				<div>
					<h1>列表渲染</h1>
					{list}
				</div>
			)
		}
	})
	ReactDOM.render(<List/>,document.getElementById('container'))
```
数组渲染时，每个数组需要一个key;
这是一个数组，不要忘记加逗号，并且key值不可以重复，若里面是对象，先用for循环遍历，把它切换成这样的类型;或使用map方法遍历

	
### react-template
安装react-template
进入react-template文件夹
npm start 默认启动8080端口，在浏览器打开http://localhost:8080

把要写的页面都放在app/components下，同App同级;
在里面自定义文件demo1.js，
```
import React,{Component} from 'react';
export default class extends Compinent{
	render () {
		let list=[
			<h1>小明</h1>,
			<h1>小明</h1>,
			<h1>小明</h1>
		]
		return (
			<div>{list}</div>
		)
	}
}
```
在main.js文件中导入
```
import demo1 from './components/demo1'

render(<demo1/>, document.getElementById('root'))

```
* 引入css样式

导入外部样式表
新建一个css文件,在compponents文件夹下:
```
.container{
	width:400px;
	height:250px;
	background-color:#afa;
}
```
在demo.js中
```
import Styles from './demo.css';

exprot default class extends Component{
	render (){
		return (
			<div className={Styles.container}></div>
		)
	}
}
```
使用内部样式表
在demo.js中
```
let StyleSheet={
	title:{
		fontSize:24,
		color:'green'
	}
}
要用驼峰命名法，且不加单位
```
使用:
```
exprot default class extends Component{
	render (){
		return (
			<div className={Styles.container}>
				<h1 style={StyleSheet.title}>hello</h1>

				//附带一个行内样式
				<h3 style={{color:'blue'}}>react</h3>
			</div>
		)
	}
}
//自定义行内属性用{{}}:外层大括号用来输出，里层大括号是一个对象
```

* 传参

```
class Header extends Component{
	render(){
		return (
			<div>你好{this.props.title}</div>
		)
	}
}
<Header title="小明" />
```
通过this.props获取参数
这样可以传参，但是有一个缺陷
props是固定不变的，要想传一个变量，就用到state;

下面重新写一个demo.js
```
export default class exrends Component{
	
	constructor(props){
		//构造函数调用
		super(props);
		this.state:0
	}

	componentDidMount(){
		//这个方法会在组件加载成功之后调用
		//写一个定时器，让count持续++;
		//这里的类是_class;
		let self=this;
		setInterval(function(){
			//这里的this就是window
			self.state.count++;
			console.log(self.state.count);
			//这样是不行的，这里不允许直接操作state，提供了一个方法
			self.setState({
				count:self.state.count++;
			})
		})
	}
	render(){
		//渲染
		return (
			<div>
				<div>{this.state.count}</div>
			</div>
		)	
	}
}
```

> 如果想要改变this的指向,有两种方法：
1用一个变量在外面就收this
2在函数后面加bind
setInterval(function(){
	this//这样，里面的this就和外面的this一致了
}.bind(this),1000)

把上面的demo数据换成对象形式:
```
export default class extends Component{
	constructor (props){
		super(props);
		this.state={
			data:[
				{name:'小明',id:0},
				{name:'小红',id:1}
			],
			renderData:[]//用来接收转换之后的数据
		}
	}
	componentDidMount(){
		let data=this.state.data;
		let newdata=[];
		for(let i=0;i<data.length;i++){
			let name=data[i].name;
			let id=data[i].id;
			let comp=<div key={id}>{name}</div>
			newdata.push(comp);
		}
		this.setState({
			renderData:newdata
		})
	}
	render(){
		return (
			<div>
				<h1>列表渲染</h1>
				<div>{this.state.renderData}</div>
			</div>
		)
	}
}
```
就上面的demo,改变componentDidMount中的for循环，使用map方法
```
componentDidMount(){
	let data=this.state.data;
	let newdata=[];
	data.map(function(item){
		console.log(item);//遍历数组中的每一条元素
		return (<div key={item.id}>{item.name}</div>)
	})
	this.setState({
		renderData:newdata
	})
}

```
* 使用网络请求：

1.可以使用原生的ajax封装的方法;
2.也可以使用jq封装的方法;
3.还可以使用fetch方法，在GitHub上有

`npm install whatwg-fetch --save`
`cd whatwg-fetch`
`import 'whatwg-fetch'`
```
使用：
fetch(url).then(function(res){
	return res.json()//类似于JSON.parse
}).then(function(res){
	console.log(res);
})

```

路由
写到main.js中
```
import {Router,Route,IndexRoute,Link,hashHistory,IndexLink,browserHistory} from 'react-router'

hashHistory与browserHistory的区别：
跳转时url是否显示#

const ACTIVE={color:'red'}//选中的样式

let App=({children})=>(
	<div>
		<h1>APP</h1>
		<ul>
			<li><Link  to="/home"  activeStyle={ACTIVE}>home</Link></li>
			<li><Link  to="/list"  activeStyle={ACTIVE}>list</Link></li>
		</ul>
		{children}
	</div>
)
let Home=()=>(
	<div>
		<h1>这是home页面</h1>
	</div>
)
let List=()=>(
	<div>
		<h1>这是list页面</h1>
	</div>
)

编辑路由
let router=(<Router history={hashHistory})>
	<Router path="/" component={App}>
		<IndexRouter component={Home}/>//默认显示页面
		<Route path="/home" component={Home}/>
		如果有子路由的话，把单标签改为双标签，把子路由插进去
		<Route path="/list" component={List}>
			<IndexRouter component={One}/>
			<Route path="/list/one" component={One}/>
		</Route>
	</Router>
</Router>)


```
