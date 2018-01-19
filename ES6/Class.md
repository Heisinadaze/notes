基本语法： 
```
  class Point {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }

    toString () {
      return '(' + this.x + ', ' + this.y + ')';
    }

    toValue() {
      // ...
    }
  }
```

用ES5语法可以替代为
```
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```


> 在类的实例上面调用方法，其实就是调用原型上的方法。
```
class B {}
let b = new B();

b.constructor === B.prototype.constructor // true
```


###### 类的属性名，可以采用表达式。
```
let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
```

##### 类和模块的内部，默认就是严格模式


### constructor 方法

`constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。`

```
class Point {
}

// 等同于
class Point {
  constructor() {}
}
```
constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

```
class Foo {
  constructor() {
    return Object.create(null);
  }
}

new Foo() instanceof Foo  // false
```
###### 类必须要用`new`调用

> 使用`Object.getPrototypeOf`而不用`__proto__`的原因：
`__proto__` 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的JS引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 `Object.getPrototypeOf` 方法来获取实例对象的原型，然后再来为原型添加方法/属性。

#### 类的表达式

```
    const MyClass = class Me {
      getClassName () {
        console.log(Me.name);
      }
    }

    let inst = new MyClass();
    inst.getClassName(); // Me

    console.log(Me)
```
这个类的名字是MyClass而不是Me，Me只在 Class 的内部代码可用，指代当前类。在函数外面使用则报错。

如果内部没有用到的话，可以省略Me:
```
const MyClass = class { /* ... */ };
```

* 一个立即执行的class：
```

    let person = new class {
      constructor(name) {
        this.name = name;
      }

      sayName() {
        console.log(this.name);
      }
    }('张三');

    person.sayName(); // "张三"
```

##### 不可以变量提升

##### Class内部的getter，和setter函数

```
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
```

##### Class 的静态方法

`类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。`

```
      class Foo {
        static classMethod () {
          return 'hello';
        }
      }

      Foo.classMethod(); // 'hello'
```
如果静态方法包含this关键字，这个this指的是类，而不是实例。

```
      class Foo {
        static bar () {
          this.baz();
        }

        static baz () {
          console.log('hello');
        }

        baz () {
          console.log('word');
        }
      }

      Foo.bar(); // 'hello'
```

父类的静态方法，可以被子类继承。
静态方法也是可以从super对象上调用的。

```
    class Foo {
      static classMethod () {
        return 'hello';
      }
    }

    class Bar extends Foo {
      static classMethod () {
        console.log(super.classMethod() + ', too');
      }
    }

    Bar.classMethod();
```

# 继承 `extends`


```
      class Point {
      }

      class ColorPoint extends Point {
        constructor (x, y, name) {
          super(x, y); // 调用父类的constructor(x, y)
          this.name = name;
        }

        toString () {
          return this.color + ' ' + super.toString(); // 调用父类的toString()
        }
      }
```
`super`关键字，表示父类的构造函数，用来新建父类的this对象。

如果子类显示写出constructor方法，则子类必须调用super()方法，否则子类因为没有自己的this对象儿报错。如果子类没有定义constructor方法，这个方法被默认添加。

ES5继承的实质： 先创建子类的实例对象this，然后将父类的方法添加到this上面。

ES6继承： 先创建父类的实例（super），然后调用子类的构造函数修改this。

父类的静态方法也会被子类继承

##### super 关键字

既可以当作函数使用，也可以当作对象使用。

* `super `作为函数调用时
代表父类的构造函数。
```
      class Point {
      }
      
      class P extends Point {
        constructor () {
          super()  // `super`代表父类的构造函数，返回子类的实例
        }
      }

      let cp = new P();
```
 

```
      class A {
        constructor() {
          console.log(new.target.name); // 指向当前正在执行的函数
        }
      }

      class B extends A {
        constructor() {
          super();
        }
      }
      
      new A() // A
      new B() // B

作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
```

* `super `作为对象时
在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

```
      class A {
        p() {
          return 2;
        }
      }
      
      class B extends A {
        constructor() {
          super();
          console.log(super.p()); // 2 相当于A.prototype.p()
        }
      }
      
      let b = new B();
```

```
      class A {
        constructor() {
          this.p = 2;
        }
      }
      
      class B extends A {
        get m() {
          return super.p;
        }
      }
      
      let b = new B();
      b.m // undefined

由于super指向父类的原型对象，
所以定义在父类实例上的方法或属性，
是无法通过super调用的
```
```
      class A {
        constructor() {
          this.x = 1;
          console.log(this.x)
        }
      }
      A.prototype.x = 4
      
      class B extends A {
        constructor() {
          super();
          this.x = 2;
          super.x = 3; 
          console.log(super.x); // 4
          console.log(this.x); // 3
        }
      }
      
      let b = new B();

赋值时返回的子类对象，取值时还是父类的原型对象。
```
> 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的原型对象。

```
      class Parent {
        static myMethod(msg) {
          console.log('static', msg);
        }
      
        myMethod(msg) {
          console.log('instance', msg);
        }
      }
      
      class Child extends Parent {
        static myMethod(msg) {
          super.myMethod(msg);
        }
      
        myMethod(msg) {
          super.myMethod(msg);
        }
      }
      
      Child.myMethod(1); // static 1
      
      var child = new Child();
      child.myMethod(2); // instance 2
```

使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。

类的 prototype 属性和`__proto__`属性

```
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```



### Mixin 模式
多个对象合成一个新的对象

```
      function mix(...mixins) {
        class Mix {}

        for (let mixin of mixins) {
          copyProperties(Mix, mixin); // 拷贝实例属性
          copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
        }

        return Mix;
      }

      function copyProperties(target, source) {
        for (let key of Reflect.ownKeys(source)) {
          if ( key !== "constructor"
            && key !== "prototype"
            && key !== "name"
          ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
          }
        }
      }

```


使用
```
class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}
```





















