#  ES6语法、
>  Let用来声明变量，但是所声明的变量，只在let命令所在的代码块内有效。不能用于变量提升

````

{

   let a=10;

   var b=0;

}

console.log(a);//undefine报错

console.log(b)//0

````

##### 适合环境

> for 循环中

> for(let i=0;i<10;i++){}



2. 变量提升问题

````

console.log(a);

console.log(b);

var a=2;

let b=0;

````

##  一个暂时性死区

````

var tmp=123;

if(true){

tmp='abc';

console.log(tmp);

console.log(typeof tmp)//有let时，typeof也就不安全了

let tmp;//如果不写这句话，console.log正常输出ABC，有了就会报错

//在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

}

// 举例一个隐蔽的死区

function bar(x=y,y=2){

   return [x,y];

}

bar();//报错，因为x=y时，也还没有声明

// 总结：暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
````

###  短板二：不允许重复声明
````

function (){

   let a=10;

   let a=1;

 }//报错

function (){

   let a=10;

   var a=1;

}//报错

function (a){

   let a=10;

}//报错

function (a){

   {

       let a=10;

   }

}//不报错

````

### ES6新增块级作用域

-  在Es5中没有块级作用域，只有全局和局部,带来的不合理的场景

>  1. 内层变量覆盖外层变量

```

var tmp=new Date();

function f(){

 console.log(tmp);

if(false){

var tmp="hello world";

}

}

f();//undefine，因为变量的提升问题

```

> 2. for循环计数


````

 var s='hello';

 for(var i=0;i<s.length;i++){

console.log(i);

}

console.log(i)//造成了全局泄露问题

````

- 而let实际就是为JS新增了块级属性

-  像前面的问题

````

function f1(){

let n=5;

if(true){

let n=10;

}

 console.log(n);

}

f1()//5

// 内层作用域可以定义外层作用域的同名变量，也可以代替IIFE

````



>在严格模式下

````

'use strict';

function f(){console.log('I am outside')}

(function(){

if(true){

function f(){console.log('I am inside')}

f();

}

// f();

})()

// 函数声明类似于var，即会提升到全局作用域或函数作用域头部

// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

{

let a = 'secret';

function f() {

return a;

}

}

// 函数表达式

{

let a = 'secret';

let f = function () {

return a;

};

}

````

新语法不太熟悉，望理解#  ES6语法、
>  Let用来声明变量，但是所声明的变量，只在let命令所在的代码块内有效。不能用于变量提升

````

{

   let a=10;

   var b=0;

}

console.log(a);//undefine报错

console.log(b)//0

````

##### 适合环境

> for 循环中

> for(let i=0;i<10;i++){}



2. 变量提升问题

````

console.log(a);

console.log(b);

var a=2;

let b=0;

````

##  一个暂时性死区

````

var tmp=123;

if(true){

tmp='abc';

console.log(tmp);

console.log(typeof tmp)//有let时，typeof也就不安全了

let tmp;//如果不写这句话，console.log正常输出ABC，有了就会报错

//在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”

}

// 举例一个隐蔽的死区

function bar(x=y,y=2){

   return [x,y];

}

bar();//报错，因为x=y时，也还没有声明

// 总结：暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
````

###  短板二：不允许重复声明
````

function (){

   let a=10;

   let a=1;

 }//报错

function (){

   let a=10;

   var a=1;

}//报错

function (a){

   let a=10;

}//报错

function (a){

   {

       let a=10;

   }

}//不报错

````

### ES6新增块级作用域

-  在Es5中没有块级作用域，只有全局和局部,带来的不合理的场景

>  1. 内层变量覆盖外层变量

```

var tmp=new Date();

function f(){

 console.log(tmp);

if(false){

var tmp="hello world";

}

}

f();//undefine，因为变量的提升问题

```

> 2. for循环计数


````

 var s='hello';

 for(var i=0;i<s.length;i++){

console.log(i);

}

console.log(i)//造成了全局泄露问题

````

- 而let实际就是为JS新增了块级属性

-  像前面的问题

````

function f1(){

let n=5;

if(true){

let n=10;

}

 console.log(n);

}

f1()//5

// 内层作用域可以定义外层作用域的同名变量，也可以代替IIFE

````



>在严格模式下

````

'use strict';

function f(){console.log('I am outside')}

(function(){

if(true){

function f(){console.log('I am inside')}

f();

}

// f();

})()

// 函数声明类似于var，即会提升到全局作用域或函数作用域头部

// 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

{

let a = 'secret';

function f() {

return a;

}

}

// 函数表达式

{

let a = 'secret';

let f = function () {

return a;

};

}

````

新语法不太熟悉，望理解
