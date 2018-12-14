>  异步编程的一种解决方式，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

###### 特点：
1. 对象状态不受外界的影响
2. 一旦状态改变就不会再变，任何时候都能得到这个结果
3. 一旦建立立即执行，无法取消。

> 基本用法

````
var promise=new Promise(function(resolve,reject){
		//代码块
		if(异步操作成功){
			resolve(value);
		}else{
			reject(error);
		}
	})
// 其中resolve和reject是两个函数，resolve在异步操作成功是执行，否则执行reject。

> 调用时，用then方法
	promise.then(function(value){
		//成功时resolve执行的代码
	 },function(error){
		//失败时reject执行的代码
	})
````

> 一个简单的例子、

````
	 function timeout(ms){
		return new Promise((resolve,reject)=>{
			setTimeout(resolve,ms,'done');
		})
	}

	 timeout(100).then((value)=>{
		console.log(value);//'done'
	})
````

> promise新建后会立即执行

````
	let promise = new Promise(function(resolve,reject){
		console.log('Promise');
		resolve()
	})

	promise.then(function(){
	 	console.log('Resolved');
	})
	console.log('hello world');
	Promise
	//hello world
	//Resolved
	//上面呢代码中，promise新建后会立即执行，所以首先输出，然后then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以最后输出
````

> 异步获取AJAX

````
	var getJSON=function(url){
		var promise=new Promise(function(resolve,reject){
			var xhr=new XMLHttpRequest();
			xhr.open('GET',url);
			xhr.send(null);
			xhr.onreadystatechange=handler;
			xhr.responseType='json';
			xhr.setRequestHeader('Accept','application/json');

			function handler(){
				if(this.readyState!==4){
					return;
				}
				if(this.status===200||this.status===304){
					resolve(this.response)
				}else{
					reject(new Error(this.statusText))//返回当前请求的响应行状态
				}
			}
		})
		return promise;
	}

	getJSON('/posts.json').then(function(json){
		console.log('Contents:'+json);
	},function(error){
		console.error('出错了',error)
	})
````


*  异步操作resolve除了可以返回一个正常值以外，还可以返回另一个异步操作；
````
	var p1=new Promise(function(resolve,reject){

	})
	var p2=new Promise(function(resolve,reject){
		resolve(p1);
	})
	//这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。
如果p1的状态是Pending，那么p2的回调函数就会等待p1的状态改变；
如果p1的状态已经是Resolved或者Rejected，那么p2的回调函数将会立刻执行。
````


>### then方法

* 定义在原型上的Promise.prototype.then
* 作用是为Promise实例添加状态改变时的回调函数
* 第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。
*  可以采用链式写法
````
	getJSON("/post/1.json").then(
	   post => getJSON(post.commentURL)
	 ).then(
	   comments => console.log("Resolved: ", comments),
	  err => console.log("Rejected: ", err)
	);
````

> ### catch方法

* Promise.prototype.catch方法
* 是then的另一种实现，即
	 getJSON.then(null,rejection),用于指定发生错误时的回调函数

````
	getJSON("/posts.json").then(function(posts) {
	  // ...
	 }).catch(function(error) {
	   // 处理 getJSON 和 前一个回调函数运行时发生的错误
	   console.log('发生错误！', error);
	 });
````
>  上面代码中，getJSON方法返回一个Promise对象，如果该对象状态变为Resolved，则会调用then方法指定的回调函数；如果异步操作抛出错误，状态就会变为Rejected，就会调用catch方法指定的回调函数，处理这个错误。另外，then方法指定的回调函数，如果运行中抛出错误，也会被catch方法捕获


 *  Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

````
	getJSON("/post/1.json").then(function(post) {
	  return getJSON(post.commentURL);
	}).then(function(comments) {
	  // some code
	}).catch(function(error) {
	  // 处理前面三个Promise产生的错误
	});
````
>  建议总是使用catch方法，而不使用then方法的第二个参数。没有指定catch方法，错误不会被捕获，也不会传递到外层代码，导致运行后没有任何输出。注意，Chrome浏览器不遵守这条规定，它会抛出错误“ReferenceError: x is not defined”。


* Node.js有一个unhandledRejection事件，专门监听未捕获的reject错误。
````
	 process.on('unhandledRejection', function (err, p) {
	  console.error(err.stack)
	 });
````
> 上面代码中，unhandledRejection事件的监听函数有两个参数，第一个是错误对象，第二个是报错的Promise实例，它可以用来了解发生错误的环境信息。。


> ######最好的方法就是
````
	someAsyncThing().then(function() {
	   return someOtherAsyncThing();
	 }).catch(function(error) {
	   console.log('oh no', error);
	   // 下面一行会报错，因为y没有声明
	  y + 2;
	}).catch(function(error) {
	  console.log('carry on', error);
	});
	 // oh no [ReferenceError: x is not defined]
	// carry on [ReferenceError: y is not defined]
````

>上面代码中，第二个catch方法用来捕获，前一个catch方法抛出的错误。
