#### 一、四种数据集合


Array  Object Map Set


##### 1. Set：类似于数组，但是成员的值都是唯一的，没有重复的值。

    | 方法：|             |
    | :--------: | :---------: |
    | add  | 添加 |
    | clear | 清空 |
     | delete | 删除 |
     | has | 如果集包含指定元素，则返回 true。 |
     | valueOf | 返回指定对象的原始值。 |


 数组去重
```
    let arr1 = [1, 3, 2, 4, 5, 3, 1, 4, 2];
    const result = [...new Set(arr1)];
    console.log(result); // [1, 3, 2, 4, 5]
```

```
     let set = new Set();
     let a = NaN;
     let b = NaN;
     set.add(a).add(b);
     // 向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。但只能存一个NaN的值。
     set.add({});
     set.add({});
     set.size; // 由于两个空对象不相等，所以它们被视为两个值。
     const array = Array.from(set); // Array.from方法可以将 Set 结构转为数组。
```
数组去重方法二：
```
     function dedupe (arr) {
         return Array.from(new Set(arr));
     }
```
 |遍历方法|          |
    | :--------: | :---------: |
    | keys()  | 返回键名的遍历器 |
     | values() | 返回键值的遍历器 |
    | entries() | 返回键值对的遍历器 |
    | forEach() | 使用回调函数遍历每个成员 |

>  Set的遍历顺序就是插入顺序。
       由于键名和键值是同一个值 ，所以keys方法和values方法的行为完全一致。

```
     let set = new Set(['red', 'green', 'blue']);
     for (let item of set.keys()) {
         console.log(item); // 'red', 'green', 'blue'
     }
     for (let item of set.entries()) {
         console.log(item)
     }
     ["red", "red"]
     ["green", "green"]
     ["blue", "blue"]
     可以通过for--of直接遍历Set.
     for (let x of set) {
         console.log(x)
     }

     let a = new Set([1, 2, 3]);
     let b = new Set([4, 3, 2]);
```
 并集
```
     let union = new Set([...a, ...b]);
     Set {1, 2, 3, 4}
```

 交集
```
     let intersect = new Set([...a].filter(x => b.has(x)));
     set {2, 3}
```
 差集
```
     let difference = new Set([...a].filter(x => !b.has(x)));
      Set {1}
```

  扩展 
     WeakSet结构与 Set 类似，也是不重复的值的集合。
     区别：WeakSet 的成员只能是对象，而不能是其他类型的值。
     WeakSet没有size属性，没有办法遍历它的成员。


##### 2. Map对象
Object只能用字符串当作键。
Map各种类型的值（包括对象）都可以当作键
```
    const m = new Map();
    const o = {p: 'Hello World'};
    m.set(o, 'content');
    m.get(o); // content
    m.has(o) // true
    m.delete(o)
    m.has(o) // false
    const map = new Map([
         ['name', '张三'],
         ['title', 'Author']
    ]);

     map.size // 2
     map.has('name') // true
     map.get('name'); // "张三"
     map.has('title') // true
     map.get('title') // "Author"
```
>  如果对同一个键多次赋值，后面的值将覆盖前面的值。
```
    forEach方法还可以接受第二个参数，用来绑定this。
     map.forEach(function(value, key, map) {
         this.report(key, value);
     }, reporter);
```
WeakMap结构与Map结构类似，也是用于生成键值对的集合。
     WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
    一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除。

     注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。
    const wm = new WeakMap();
    let key = {};
    let obj = {foo: 1};

    wm.set(key, obj);
    obj = null;
    wm.get(key)
    Object {foo: 1}


·

-------------------------------------------------------------

·
##### `for--in`  和  `for--of` 区别
JavaScript 原有的for...in循环，只能获得对象的键名，不能直接获取键值。
     ES6 提供for...of循环，允许遍历获得键值
```
     var arr = ['a', 'b', 'c', 'd'];
     for (let a in arr) {
       console.log(a); // 0, 1, 2, 3
     }
     for (let a of arr) {
       console.log(a); // a, b, c, d
     }
     for...in循环读取键名，for...of循环读取键值。
```
for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。
```
     let arr = [1, 3, 5, 7];
     arr.foo = 'hello';

     for (let i in arr) {
       console.log(i); // '1', '3', '5', '7', 'foo'
     }

     for (let i of arr) {
       console.log(i); // 1, 3, 5, 7
    }
     for--in 返回的都会转换成字符串格式，for--of不会。
```
Set 结构遍历时，返回的是一个值，
而 Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值。
```
     let map = new Map().set('a', 1).set('b', 2);
     for (let pair of map) {
       console.log(pair);
     }
    ['a', 1]
    ['b', 2]

     for (let [key, value] of map) {
       console.log(key + ' : ' + value);
     }
     a : 1
     b : 2

     let es6 = {
       edition: 6,
       committee: "TC39",
       standard: "ECMA-262"
     };
     像这样的一个对象，在直接使用for--of时，会报错，解决方法：
     for (var key of Object.keys(es6)) {
       console.log(key + ':' + es6[key]);
     }

     也可以使用Generator函数将对象重新包装一下。
     function* entries (obj) {
       for (let key of Object.keys(obj)) {
         yield [key, obj[key]]
       }
     }
    for (let [key, value] of entries(es6)) {
      console.log(key, value)
    }
```
##### 循环的缺点
* forEach循环无法中途跳出，break和return 都不能奏效。但for-of可以

* for--in缺点：主要用于便利对象
* 数组键名是Number，但for--in是以字符串作为键名；
* for--in不仅可以遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键；
* 有时for--in会以任意顺序遍历。
