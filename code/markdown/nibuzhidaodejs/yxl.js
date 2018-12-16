
function Word (words) {
  this.words = words
}

Word.prototype = {
  alert () {
    console.log(this.words) // hello world
  }
}

var w = new Word('hello world');
w.print = function () {
  console.log(this.words) // hello world
  console.log(this) // { words: 'hello world', print: [Function] }
}

w.print()
w.alert()

console.log(w.__proto__ === Word.prototype)









