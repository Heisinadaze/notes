
let i: number = 1

let text: string = 'aa'

let isTrue: boolean = true

let arr: Array<any> = []

let obj: {x: number, y: string} = {x: 1, y: '1'}

let fn = (arr: string[], callback: (ind: number) => string[] ) => {
  return arr
}

/**
 * public 公开的，可以暴露的方法
 * private 私有的 不能在外部访问
 * protected 受保护的，可以在派生类中访问
 */

 class Animal {
   protected name: string

   constructor (name: string) {
     this.name = name
   }

   public getName () {
     return this.name
   }

 }

 class Dog extends Animal {
   private height: number

   constructor (name: string, height: number) {
     super(name)
     this.height = height
   }
 }

 const animal = new Animal('dog')
 const dog = new Dog('d', 5)
 console.log(animal.getName())
 console.log(dog.getName)

