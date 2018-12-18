>const声明一个只读的常量，即常量的值不能被改变，如果改变就会报错
````
	 const a=10;
	 a=100;//报错
````

* 作用域：与let命令相同，只在声明所在的块级作用域内有效
````
	// if(true){
	// 	const foo=5;
	// }
	// console.log(foo);//报错
````

* 同样不能提升，存在暂时性死区，只能在声明的位置后面使用
````
	// if(true){
		// console.log(foo);
		// const foo=5;
	// }
````
* 不能重复声明，同let
````
	// const foo={};
	// foo.prop=123;
	// console.log(foo.prop);//123
	// foo={};//报错
	// 对象本身是可变的，依然可以为其添加新属性。但是不能重新赋值
````
> 冻结对象的方法

````
const foo=Object.freeze({});
foo.prop=123;//在常规模式下，不起作用，严格模式报错。
````
*  除了冻结对象本身，对象的属性也可以冻结
````
	var constantize=(obj)=>{
		Object.freeze(obj);//冻结obj
		Object.keys(obj).forEach((key,value)=>{
			if(typeof obj[key]==='object'){
				constantize(obj[key]);
			}
	 	})
	}
````

>ES6中声明变量的方法:var function const let class import;

####顶层对象
>在浏览器指window对象，在node指的是global对象，ES5中顶层对象的属性与全局变量是等价的

	
>顶层对象的属性与全局变量挂钩，被认为是JavaScript语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。
> ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。

````
	// var a=1;
	// 若在node的repl环境中，可也写成global.a
	//通用的this.a
	// console.log(window.a);//1

	// let b=1;
	// console.log(window.b);//undefined
````
> 同一段代码，若想拿到顶层对象，一般我们会想到用this方法，但是它是有局限性的
>全局环境中，this.会返回顶层对象，但是node和ES6返回当前所在模块

````
	// (function (){
	// 	console.log(this)//window,在严格模式下会报错
	// }())
````
>若非要获取的话，引用system.global库拿到global；保证在各种环境下global对象都是存在的
````
	require('system.global/shim')();
````
> ES6写法
````
	import shim form 'system.global/shim';shim();
````
