又一种异步编程解决方法
内部可以保存多个状态

> 和普通函数的区别
1.function关键字与函数名之间有一个星号
2.函数体内部使用yield表达式，定义不同的内部状态

```
    function* helloWorldGenerator () {
        yield 'hello';
        yield 'world';
        return 'ending';
    }
    var hw = helloWorldGenerator(); // helloWorldGenerator {[[GeneratorStatus]]: "suspended"}
```
该函数存有三个状态；
在这里，调用该方法不会立即执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象

必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。
```
    hw.next();
    hw.next();
    hw.next();
    hw.next();
```

![Generator](http://upload-images.jianshu.io/upload_images/2941543-2606b6d71c554ccd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




> 它的value属性就是当前yield表达式的值hello，done属性的值false，表示遍历还没有结束。
第二次调用，Generator 函数从上次yield表达式停下的地方，一直执行到下一个yield表达式。

* 遍历器对象的next方法的运行逻辑如下。

（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。

（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

* yield表达式与return语句区别：
每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。
如果return之后，在后面加yield就不会执行，返回undefined;

Generator 函数不用yield表达式时就变成了一个单纯的暂缓执行函数。

> yield表达式只能用在 Generator 函数里面，用在其他地方都会报错。
yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
```
function* demo() {
  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}
```

> yield表达式用作函数参数或放在赋值表达式的右边，可以不加括号
```
function* demo() {
  foo(yield 'a', yield 'b'); // OK
  let input = yield; // OK
}
```

```
  var arr = [1, [[2, 3], 4], [5, 6]];

  var flat = function* (a) {
    var length = a.length;
    for (let i = 0; i < length; i++) {
      var item = a[i];
      if (typeof item !== 'number') {
        yield* flat(item);
      } else {
        yield item;
      }
    }
  };

  for (let f of flat(arr)) {
    console.log(f);
  }
// 1, 2, 3, 4, 5, 6
```

##### 与Iterator接口的关系
任意对象通过赋值[Symbol.iterator]属性，从而具有Iterator接口
```
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]
```

Generator函数执行后，返回一个遍历器对象，该对象本身就具有[Symbol.iterator]属性，执行后返回自身。
```
function* gen(){
  // some code
}

var g = gen();

g[Symbol.iterator]() === g // true
```

##### next方法
yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

```
  function* f() {
    for (var i = 0; true; i++) {
      // console.log(i)
      var reset = yield i;
      console.log(reset)
      if(reset) {
        i = -1;
      }
    }
  }

  var g = f();
  g.next()
  g.next()
  g.next()
  g.next()
  g.next(true)
```

![yield没有返回值](http://upload-images.jianshu.io/upload_images/2941543-887708563006d038.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。



##### for--of 循环
for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。

```
function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5

一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，
所以上面代码的return语句返回的6，不包括在for...of循环之中。
```

##### Generator.prototype.throw()
Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。

```
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b

```

上面代码中，遍历器对象i连续抛出两个错误。第一个错误被 Generator 函数体内的catch语句捕获。i第二次抛出错误，由于 Generator 函数内部的catch语句已经执行过了，不会再捕捉到这个错误了，所以这个错误就被抛出了 Generator 函数体，被函数体外的catch语句捕获。

throw方法可以接受一个参数，该参数会被catch语句接收，建议抛出Error对象的实例。

注意，不要混淆遍历器对象的throw方法和全局的throw命令。上面代码的错误，是用遍历器对象的throw方法抛出的，而不是用throw命令抛出的。后者只能被函数体外的catch语句捕获。

throw方法被捕获以后，会附带执行下一条yield表达式。也就是说，会附带执行一次next方法。

```
var gen = function* gen(){
  try {
    yield console.log('a');
  } catch (e) {
    // ...
  }
  yield console.log('b');
  yield console.log('c');
}

var g = gen();
g.next() // a
g.throw() // b
g.next() // c
```
只要 Generator 函数内部部署了try...catch代码块，那么遍历器的throw方法抛出的错误，不影响下一次遍历。

一旦 Generator 执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。如果此后还调用next方法，将返回一个value属性等于undefined、done属性等于true的对象，即 JavaScript 引擎认为这个 Generator 已经运行结束了。

##### Generator.prototype.return()
Generator函数返回的遍历器对象还有一个return方法，可以返回给定的值，并且终止遍历Generator函数

```
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }

```
上面代码中，遍历器对象g调用return方法后，返回值的value属性就是return方法的参数foo。并且，Generator函数的遍历就终止了，返回值的done属性为true，以后再调用next方法，done属性总是返回true。
如果return方法调用时，不提供参数，则返回值的value属性为undefined。

如果 Generator 函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行。
```
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }
```

#### yield* 表达式
如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
这个就需要用到yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。

```
function* inner() {
  yield 'hello!';
}

function* outer1() {
  yield 'open';
  yield inner();
  yield 'close';
}

var gen = outer1()
gen.next().value // "open"
gen.next().value // 返回一个遍历器对象
gen.next().value // "close"

function* outer2() {
  yield 'open'
  yield* inner()
  yield 'close'
}

var gen = outer2()
gen.next().value // "open"
gen.next().value // "hello!"
gen.next().value // "close"
```
从语法角度看，如果yield表达式后面跟的是一个遍历器对象，需要在yield表达式后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*表达式。

如果yield*后面跟着一个数组，由于数组原生支持遍历器，因此就会遍历数组成员。
```
function* gen(){
  yield* ["a", "b", "c"];
}

gen().next() // { value:"a", done:false }
```

实际上，任何数据结构只要有 Iterator 接口，就可以被yield*遍历。

```
let read = (function* () {
  yield 'hello';
  yield* 'hello';
})();

read.next().value // "hello"
read.next().value // "h"
```
##### 作为对象属性的Generator函数

```
let obj = {
  * myGeneratorMethod() {
    ···
  }
};
```











































































































































































