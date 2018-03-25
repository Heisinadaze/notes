AngularJS通过使用标识符的结构，让浏览器能够识别一些新的语法。如：
  使用双大括号{{}}语法进行数据绑定；
  使用DOM控制结构来实现迭代或者隐藏DOM片段；
  支持表单和表单的验证；
  能将逻辑代码关联到相关的DOM元素上；
  能将HTML分组成可重用的组件。

不适合使用的地方：
不常使用CRUD（增Create、删Delete、改Update、查Retrieve）的地方

引入js
```
<script src="http://code.angularjs.org/angular-1.0.1.min.js"></script>
```

##### 安装angular的命令
1. npm init  //做初始化
2. ls    查看
3. npm install --save angular  //安装angular
4. npm install --save angular-route  //安装路由

###架构：
* 指令
* config
* controller
* 过滤器
* 服务


###一、指令

> 又分为内置指令和自定义指令

常用指令：
1.` ng-app`表示在其所在的标签上，应用angularJs，一般放在跟标签html上，由于是单页应用，所以ng-app只需要写一个
```
<html ng-app="app">
```

2.`ng-init`做变量的初始化
```
<div ng-init="a=100;b=2">
    <h1>{{a}}</h1>
    <h1>{{a+b}}</h1>
</div>
```
3.加载两种方法
```
<h1>{{a}}{{b}}</h1>
或
<h1 ng-bind="a"></h1>
<h1 ng-bind="b"></h1>

```
区别：如果在后面加载js文件，{{}}会先把原样式加载出来，(即：在页面显示{{a}})，等js加载结束才会更改内容，所以可能会在页面闪一下，而ng-bind则会等到js加载结束才显示

4.事件绑定
```
<div ng-init="a='abc';">
    <h1>{{a}}</h1>
    <input ng-model=a />
</div>
```
在input中任意输入内容，在h1中就会自己动态更改内容，即事件绑定


5.ng-if:true显示；false隐藏
可以代替display:none;
```
<div ng-controlller='ctrl'>
	<div ng-if="flag">
		{{name}}
	</div>
	<input type="button" value="button" ng-model="flag" ng-click='change()' />
</div>

js代码：
	angular.module('app',[])
	.controller('ctrl',function($scope){
		$scope.flag=true;
		$scope.name="aaa";
		$scope.change=function(){
			console.log($scope.flag);
			$scope.flag=!$scope.flag;
		}
	})
```

6.ng-show="true"显示
  ng-hide="true"隐藏

7.ng-repeat="x in arr track by $index"
根据下标遍历，下标不会重复，在下面有具体代码解释。

8.ng-class
9.ng-view配合路由使用；
10.$rootScope()添加全局变量，用法同$scope
11.ng-model


* 自定义指令

先自定义一个最简单的指令
```
angular.module('app',[])
.controller('ctrl',function(){})
.directive('myHeader',function(){
    //使用directive来自定义指令
    return {
        restrict:"E",
        template:'<h1>你好</h1>'
    }
})


在html中，就可以直接使用<my-header></my-header>标签，

```
restrict有4个值：
E(element) C(class) M(注释) A(attribute)；
template也可以写成templateUrl,后面加文件路径

使用方法相同

当restrict：‘M’时，需要加一个属性
```
	.directive('hi',function(){
		return {
			restrict:'E',
			replace:true,
			template:'<h2>hhhh</h2>'
		}
	})
这样注释才能在页面显示出来
```
加replace和不加的区别：
不加的话直接显示<my-header></my-header>，在标签里面才是我们需要的，加上replace:true,就会把自定义标签去掉





如果要在自定义标签内做嵌套，直接写到自定义标签里面，也不会显示，需要在代码中同意嵌套,在嵌套元素加一个属性ng-transclude
```
	.directive('myHeader',function(){
		return {
			restrict:"E",
			// template:'<h1>你好</h1>'
			transclude:true,//表示同意嵌套
			template:'<h1 ng-transclude>nihao</h1>'
        //做嵌套时就会把元素都嵌套在这里
		}
    })

````

自定义指令的目的，一般是为了把重复的代码用自定义指令封装起来，使用的使用，传进相应的参数，就能得到自己想要的
 ```
	angular.module('app',[])
	.directive('myHeader',function(){
        return {
            restrict:"E",
            replace:true,
            scope:{//做配置
                title:'@',//表明title数据类型是一个字符串
                name:'='//表明name是一个变量
                show:'$'//函数方法
            },
            template:'<div><h1>{{title}}</h1></div>',
        }
    })


在html里面放进该自定义标签
<my-header title="首页"></my-header>
<my-header title="分类"></my-header>
<my-header title="购物车"></my-header>
<my-header title="我的"></my-header>
```

把上面的代码完善一下

```
	<my-header title="name" name="name" show="show(111)">asdlkfjdsalfjsadlk</my-header>
	<my-header title="分类"  name="name" show="show(222)"></my-header>
	<my-header title="购物车" name="name" show="show(333)"></my-header>


提供name,show方法
	angular.module('app',[])
	.controller('ctrl',function($scope){
		$scope.name="变量";
		$scope.show=function(arg){
			console.log('this is function show'+arg)
		}
	})
.directive('myHeader',function(){
		return {
			restrict:"E",
			replace:true,
			scope:{
				title:'@',//表明title数据类型是一个字符串
				name:'=',//表示name是一个变量
				show:'&'//函数方法
			},
			template:'<div ng-click="show()"><h1>{{title}}{{name}}</h1></div>',
			link:function($scope,$element,$attrs){
				// console.log($scope);
				// console.log($element);
				// console.log($attrs);
				console.log($attrs.title);
				console.log($attrs.name);
				console.log($attrs.show);
				$element.bind('click',function(){
					// console.log('a')
					console.log(this)
					this.style.backgroundColor="red";
				})
				$element.on('touchstart',function(e){
					console.log(e)
				})
			}
		}
	})
```
link提供了三个参数，用来控制和修改自定义的指令
```
.directive('myHeader',function(){
		// 如果里面只有一个link的function，那么就可以简写成下面的
		return function($scope,$element,$attrs){
			console.log($scope)
			$element.bind('click',function(){
				console.log(this)
				this.style.backgroundColor="red";
			})
		}
	})
```



### 二、controller控制器

1. 需要先定义模块

```
var app=angular.module('app',[]);
第一个参数是名称
第二个参数是依赖

app.controller('ctrl',function($scope){
    $scope.b=200;
    $scope.c='hello angular';
    $scope.arr=[1,2,3,4,5];
    $scope.show=function(){
        return  ''神奇动物在哪里";
    }
})


在html中，要引入ctrl:
<div ng-controller="ctrl">
    <h1>{{b}}</h1>
    <h1>{{c}}</h1>
    <h1>{{arr}}</h1>
    <h1>{{show()}}</h1>
</div>
```
写一个具体的案例，定义一个div，点击变色
```
css样式
.red{width:100px;height:100px;background:red;}
.green{width:100px;height:100px;background:green;}

html:
<div ng-controller="ctrl">
    <div ng-class="myclass" ng-click="change()"></div>
</div>

js代码：
angular.module('app',[])
.controller('ctrl',function($scope){
   $scope.myclass='green';
   $scope.change=function(){
       $scope.myclass=$scope.myclass=='green'?'red':'green';
   }
})
```
2.作用域
```
angular.module('app',[])
.controller('ctrl',function($scope,$rootScope){
    $scope.brand="cp";
    $rootScope.age=18;

})
.controller('ctrl2',function($scope){
    $scope.say=function($scope,$rootScope){
  	return 'nnnnn'
    }
    $rootScope.speak = function(){
      return "hello angular"
    }
})

添加一个$rootScope ,就可以在页面任意位置输出
{{age}}//在页面正常显示
{{brand}}//超出作用域，不显示
<div ng-controller="ctrl">
    {{age}}
    {{brand}}//两个都显示
    <div ng-controller="ctrl2">
            //在这里都可以正常显示
    </div>
</div>
总结：在哪个标签调用控制器方法，就只能在该div里面显示，若想要在外面显示，可以在更外层标签调用控制器，或使用$rootScope;
```

3.$watch、$apply方法监听

双向数据绑定:
ng-model-->$scope.name-->{{name}}
ng-model常出现在input中，监听内容变化

脏机制查询，须手动触发，$digest或使用timeout

```
html:
<div ng-controller="ctrl">
    <h1>{{name}}</h1>
</div>

js:
angular.module('app',[])
.controller('ctrl',function($scope,$timeout){
    $scope.name="小明";
    
    $scope.$watch('name',function(newvalue,oldvalue,scope){
        console.log('新值：'+newvalue);
	    console.log('旧值：'+oldvalue);
	    console.log("scope"+scope.name)
    },false)
    $timeout(function(){
        $scope.name="小红";
    },2000)
})
效果：h1中的小明，经过2s自动切换成小红；
```
> $watch和$timeout都是库中封装的方法，直接调用就可以。
> $watch()有3个参数，第一个表示要检测的目标；第二个参数类似于callback的函数，当检测的目标发生变化时执行；第三个参数是布尔值，表示是否进行深度监听，true表示深度监听；
> 其中第二个参数function(){}又有三个参数，分别是('新值：'+newvalue)('旧值：'+oldvalue)("scope"+scope.name)；
> 如果监听一般的字符串等时，不需要深度监听，就能检测到，当监听的是对象时，就需要进行深度监听才能检测到它内部的变化
> $timeout是已经封装好的延时计时器，用法和原生的一样；还有$interval
如果要使用原生的演示器，并且效果不变时，就需要借助$apply方法，代码如下：
```
setTimeout(function(){
    $scope.$apply(function(){
        $scope.name='小红';
    })
},2000)
```

就上面案例中，$watch事件列举一个监听的对象，第三个参数是true的小案例；

```
<div ng-controller="ctrl">
	<h1>{{brand.name}}</h1>
	<input ng-model="brand.name">
</div>

angular.module('app',[])
.controller('ctrl',function($scope){
    $scope.brand={
        name:'hello',
        age:18
    }
    
    $scope.$watch('brand',function(newvalue,oldvalue,scope){
        console.log('新值：'+newvalue);
		console.log('旧值：'+oldvalue);
		console.log("scope"+scope.name);
    },true)
    //最后一个参数必须是true,否则检测不到里面的变化，就不能打印到控制台
})



```

### 三、config

配置

### 四、过滤器

```
angular.module('app',[])
.controller('ctrl',function($scope){
    $scope.price=998;
    $scope.time=new Date();
    $scope.arr=[
			{name:'abc',age:100},
			{name:'def',age:20},
			{name:'ghi',age:15},
			{name:'jkl',age:43},
			{name:'mno',age:27}
		]
})
```

* currency货币过滤currency:'$'；

```
<h1>{{price | currency}}</h1>
不写参数，默认美元，并保留两位小数

<h1>{{price | currency:"￥"}}</h1>
人民币
```
* date日期格式化date:"yyyy-MM-dd hh:mm:ssa"；

```
	<h1>{{time | date : "hh:mm:ssa"}}</h1>
    最后加a，显示上午下午（am\pm）
	<h1>{{time | date : "yyyy-MM-dd"}}</h1>
	<h1>{{time | date : "yyyy-MM-dd hh:mm:ssa"}}</h1>
```
* json 变化不大，一般不用
```
<h1>{{json | json}}</h1>
```
* filter内容过滤filter:'abc'；`实现搜索功能`

```
<input ng-model="myfilter" />
<ul ng-repeat="x in arr | filter:myfilter">
    <li>{{x.name}}+'---'+{{x.age}}</li>
</ul>
在input中输入要找的内容，ul中自动过滤显示要查看的li;
ng-repeat表示遍历，arr是要遍历的数组；
```
* limitTo数量过滤，写几，显示几条；

```
在上面的例子中直接添加
<ul ng-repeat="x in arr | limitTo:2">
    <li>{{x.name}}+'---'+{{x.age}}</li>
</ul>
表示显示ul中的前两条
```
* uppercase全部大写；

```
	<ul ng-repeat="x in arr">
		<li>{{x.name | uppercase}}</li>
	</ul>
```
* lowercase全部小写；和大写的用法一样

* orderBy通过**进行排序；

```
<ul ng-repeat="x in arr | orderBy:'age'">
	<li>{{x.name | uppercase}}</li>
</ul>
按年龄从小到大排序，也可以按name排序
```


ng-repeat方法
```
angular.module('app',[])
.controller('ctrl',function($scope){
    $scope.arr=[
			{name:'王源',age:18},
			{name:'王俊凯',age:27},
			{name:'易烊千玺',age:15},
			{name:'王源1',age:23},
			{name:'王俊凯2',age:21},
			{name:'易烊千玺3',age:23},
		]

	$scope.arr2=[1,1,3,4,5,6]
})


<ul ng-repeat="x in arr | orderBy:'age'">
	<li>{{x.name}} -- {{x.age}}</li>
</ul>
<ul ng-repeat="x in arr2 track by $index">
	<li>{{x}}</li>
</ul>
```
> 使用track by $index,在不知道数组是否重复的情况下使用，若重复而没有使用，则会报错

##### 自定义过滤器
````
angular.module('app',[])
.filter('tc',function(){
    return function(ele){
    
        console.log(ele);
        return ele+'@@@';
    }
})
.controller('ctrl',function($scope){
    $scope.name='小明';
})


在使用时就可以直接使用
<div ng-controller="ctrl">
	<h1>{{name | tc}}</h1>
</div>
````


### 五、服务
1.内置服务

$interval定时器
```
angular.module('app',[])
.controller('ctrl',function($scope){
    $scope.count=0;

    $interval(function(){
        $scope.count++;
    },1000)
})
```

2.$location方法
```
$location打印出来，在原型中的方法
$location.absUrl()；//当前文件所在的绝对路径
$location.host()// 当前IP
$location.port()// 当前端口
```

3.ajax数据交互,调用$http方法
```
angular.module('app',[])
.controller('ctrl',function($scope,$http){

    $http.get('http://*********')
    .then(function(res){
        console.log(res);
        return res.data;
    })
    .then(function(res){
        console.log(res);
        $scope.pro=res;
    })
1.6以后版本使用thin，之前的版本都是success(function(){})
若想知道用的什么方法，可以打印console.log($http.get('http://www.。。。。。'))
})
```

4.自定义服务

五种方法
* value
* constant
* factory
* service
* provider


自定义服务不需要加$;

constant定义一个常量，除了constant服务，其他都不能注入到config里面

value定义了一个可变量：
```
angular.module('app',[])
.config(function(PI){
    console.log(PI);
})
.controller('ctrl',['$scope','$http','president',function($scope,$http,president){
    $scope.name='hello';
    $scope.pic=president;
}])
.controller('ctrl2',function($scope,$http,president,PI){
    $scope.name='world';
    $scope.picc=presidet;
    $scope.pi=PI;
})
.value('president','abc')
.constant('PI',3.1415926)
```


service、factory
```
	angular.module('app',[])
	.controller('ctrl',function($scope,math,math2){
		// 注入math，调用他的加法
		let result=math.add(2,3);
		$scope.result=result;

		$scope.result2=math2.add(1,2);
	})
	.service('math',function(){
		// 可以添加方法，添加到this上面
		this.add=function(x,y){
			return x+y;
		}
		this.min=function(x,y){
			return x-y;
		}
	})
	.factory('math2',function(){
		let factory={};
		factory.add=function(x,y){
			return x+y;
		}
		return factory;
	})
```
service是把方法添加到this上面，factory则是先定义一个对象，然后在对象上添加方法，最后返回这个对象

provider只能定义在config里面
```
angular.module('app',[])
.config(function($provide){
    先注入provide对象
    $provide.provider('math',fuction(){
        this.$get=function(){
            var factory={};
            factory.add=function(x,y){
                return x+y;
            }
    
            return factory;
        }
    })
})
.controller('ctrl',function($scope,math){
    $scope.result=math.add(3,3);
})
```
方法更类似于factory；

> 在自定义服务中，由于服务和$scope,$http等是同级，所以在服务中不能引入$scope,$http等，如若特别想用的话，可以在服务里面传进两个形参，在调用的时候再传进去。





#### 路由
最简单的目的就是为了跳转显示页面，加载html；
为了缩小angular体系，把路由独立出来；使用时，要把依赖写进去

在说路由时，附带一个添加css的方法，也是angular提供的，{angular-css.min.js}

angular-router:

angular.module('qiongyou',['ngRouter'])

```
<a href="#/home">home</a>
<div ng-view></div>

angular.module('app',['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .$otherwise('home.html')//设置打开网页时的默认页面

    $routeProvider
    .when('/home',{
        template:"<h1>这是首页</h1>",//或templateUrl:'home.html',
       // css:'home.css'//可以直接这样写
        css:{
            href:'home.css',
            persist:true//表示是否永久保存
        },
        controller:function(){
            console.log($css);
            $scope.arr=[
                {name:'aaa',age:'12'}, {name:'aaa',age:'12'} ]
        }
    })
})

```

以上就是一个简单的路由，点击a标签就会在a标签下面的ng-view中显示出来，当然，路由可以分好多级，在页面a标签上设锚点，要和路由中的when的名称一致


ui-router:
{angular-ui-router/release/angular-ui-router.min.js}

使用ui.router,显示区域使用ui-view；
```
angular.module('app',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/footer/home/tn');
      //点击进去默认要显示的页面；

    $stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'home.html'，
       // 如果下面有关联的控制器的话
        controller:'home'
	})
})
.controller('home',function($scope,$http){
      //相关操作
})


在页面a标签，
<a ui-sref='home'>首页</a>这里的home和state中的名称一致
如果想要点击样式的话
<a ui-sref='home' ui-sref-active=“active”>首页</a>
active是自定义的class样式


```

如果想在路由下面再定义一个子路由
```

angular.module('app',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/footer/home/tn');
      //点击进去默认要显示的页面；

    $stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'home.html'，
       // 如果下面有关联的控制器的话
        controller:'home'
	})
	.state('home.search',{
		url:'/search',
		templateUrl:'search.html'
	})
})

<a ui-sref='home.search'>首页下的搜索页面</a>


```

如果想定义一个子路由,并且不再同一个js 文件中写，就在父路由的依赖里面把字路由都写进去。把相应的js引入html。

#####传参

1路由传参、2点击事件传参、3通过提交服务器，然后从服务器返回数据


1路由传参
<a ui-sref="home({p1:'100',p2:'200'})">首页</a>
通过传键值对

参数接受
在state中接收参数
```
$stateProvider
.state('home',{
      url:'/home',//可以通过/home/:p1:p2取到，但是不建议这样
      params:{
          p1:null,
          p2:null,//可以配置一个默认的参数，
      },
      templateUrl:'home.html',
      controller:'home'
})
.controller('home',function($stateParams){
    通过控制器的$stateParams拿到参数，
    let p1=$stateParams.p1;
    console.log(p1);//100
})
```

2通过ng-click="change(x.id)"


在控制器中定义一个change方法
```
$scope.change=function(id){
    console.log(id);
}


实现页面的内部跳转，引用$state
.controller('home',function($state){
    通过$state的方法
    $state.go('state的状态',{id:id})
})
在state('home',{
    url:'/home',
    templateurl:'路径',
        
  controller:function($scope,$stateParams,){
      let id=$stateParams.id;
})
})

```
在事件传参时，可以传$index,当前的下标，还可以传$event,在控制器里面，
```
ng-click=change($event);

.controller('home',function(e){
    console.log(e.target);//获取到事件对象
})



ng-click=change($index);

.controller('home',function(a){
    console.log(a);//获取到下标
})
```


##### angular也有jsonp方法：

```
$http.jsonp(链接).success(function(

))
```
