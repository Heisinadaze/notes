object的每个实例都有下列属性和方法

```
var obj = new Object();
```
* constructor 保存着用于创建当前对象的函数。对于前面的例子而言，就是Object（）；

* hasOwnProperty： 用于检查给定的属性在当前对象的实例中（不是实例的原型中）是否存在。作为参数的属性名必须以字符串的形式指定。
```
obj.hasOwnProperty("name")
```
* isPrototype(): 用于检测传入的对象是否是传入对象的原型

* propertyIsEnumerable(): 用于检测给定的属性是否能够使用for-in语句来枚举。用法同hasOwnProperty；

* toLocaleString(): 返回对象的字符串表示，该字符串与指定环境的地区对应。

* toString(): 返回对象的字符串表示
* valueOf(): 返回对象的字符串、数值、布尔表示




































































