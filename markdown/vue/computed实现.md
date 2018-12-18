
* 建立与其他属性的联系，
* 属性改变后通知计算属性重新计算


初始化data,使用Object.defineProperty把这些属性转化为getter/setter.

初始化computed, 遍历computed里每个属性， 每个computed属性都是一个watch实例，每个属性提供的函数作为属性的getter，使用Object.definedProperty转化。

Object.defineProperty getter依赖收集，用于依赖发生变化时，触发属性重新计算。

若出现嵌套其他计算属性，先进行其他计算属性依赖收集。










