
interface Person {
  firstName: string
}

function sayName (person: Person) {
  return 'Hello, ' + person.firstName
}

let user = { firstName: '秦', lastName: '' }

document.body.innerHTML = sayName(user)

