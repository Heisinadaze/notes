# 属性

* Object.prototype： Object的原型对象。

# 方法

##### Object.assign()  用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

语法： `Object.assign(target, ...sources)`

target 目标对象。
sources 源对象。

返回值： 目标对象

Object.assign
 会跳过那些值为 null或 undefined的源对象。

不能解决深拷贝的问题

合并对象
```
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```

合并相同属性的对象
```
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```




##### Object.create() 方法会使用指定的原型对象及其属性去创建一个新的对象。

语法：`Object.create(proto[, propertiesObject])`

proto 新创建对象的原型对象。

propertiesObject 可选。如果没有指定为undefined，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应Object.defineProperties()的第二个参数。

返回值:   在指定原型对象上添加新属性后的对象。


如果propertiesObject参数不是 null或一个对象，则抛出一个 TypeError异常。


实现类式继承
```
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

function Rectangle() {
  Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```


当继承多个对象时：

```
function MyClass() {
     SuperClass.call(this);
     OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype);

Object.assign(MyClass.prototype, OtherSuperClass.prototype);

MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
     // do a thing
};
```


```
var o;

// 创建一个原型为null的空对象
o = Object.create(null);


o = {};
// 以字面量方式创建的空对象就相当于:
o = Object.create(Object.prototype);


o = Object.create(Object.prototype, {
  // foo会成为所创建对象的数据属性
  foo: { 
    writable:true,
    configurable:true,
    value: "hello" 
  },
  // bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});


function Constructor(){}
o = new Constructor();
// 上面的一句就相当于:
o = Object.create(Constructor.prototype);
// 当然,如果在Constructor函数中有一些初始化代码,Object.create不能执行那些代码


// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42

o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"

delete o.p
//false

//创建一个可写的,可枚举的,可配置的属性p
o2 = Object.create({}, {
  p: {
    value: 42, 
    writable: true,
    enumerable: true,
    configurable: true 
  } 
});
```

##### Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

语法： `Object.defineProperties(obj, props)`

返回值： 传递给函数的对象

##### Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。

语法： `Object.entries(obj)`

obj 可以返回其可枚举属性的键值对的对象。

返回值  给定对象自身可枚举属性的键值对数组。


```
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

转为map
var obj = { foo: "bar", baz: 42 }; 
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

##### Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。

语法： `Object.freeze(obj)`

obj  要被冻结的对象。
返回值  被冻结的对象。


##### Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

语法： `Object.getOwnPropertyDescriptor(obj, prop)`

obj  需要查找的目标对象
prop  目标对象内属性名称（String类型），加引号。

返回值： 如果改属性直接存在于对象上，返回，否则返回undefined。

```
  class Point {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }

    toString () {
      console.log(this.x + this.y);
    }
  }

  let p = new Point(1, 'y');
  let a = Object.getOwnPropertyDescriptor(p, 'x');
  console.log(a)
```


![Object.getOwnPropertyDescriptor](http://upload-images.jianshu.io/upload_images/2941543-d11a05f78651d860.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

ES6中，如果第一个参数不是一个对象，就会强制转换成一个对象，在ES5会报错。

##### Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。

如果没有任何自身属性，则返回空对象。

##### Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

```
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]
```

##### Object.getOwnPropertySymbols() 方法会返回一个数组，该数组包含了指定对象自身的（非继承的）所有 symbol 属性键。

##### Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
如果没有继承属性，返回null
```
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

##### Object.is()方法判断两个值是否是相同的值。

语法： `Object.is(value1, value2);`

返回一个Boolean值。

![比较](http://upload-images.jianshu.io/upload_images/2941543-62a28fcd02db04d1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

与==区别： 不会隐式转换类型

与===区别： 不会把+0和-0视为相等，并且可以认为NaN等于NaN。



##### **Object.keys()** 方法会返回一个由一个给定**对象**的自身可枚举属性组成的**数组**，数组中属性名的排列顺序和使用 for...in循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。

```
let arr = ["a", "b", "c"];
console.log(Object.keys(arr)); 
// ['0', '1', '2']

let anObj = { 100: 'a', 2: 'b', 7: 'c' }; 
console.log(Object.keys(anObj)); 
// ['2', '7', '100']

```

##### **Object.values()**
方法返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

```
var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]
```































