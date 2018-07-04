
function fn () {
  var max = 10

  return function bar (x) {
    if (x > max) {
      console.log(x)
    }
  }
}

var f1 = fn()
f1(15)
