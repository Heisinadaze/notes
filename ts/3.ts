
class Student {
  fullName: string;
  // 公共字段
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter (person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let users = new Student('Jane', 'M.', 'user');

greeter(users)

