//=============================Метод объекта==================================

// 1. Метод объекта

// способы создания метода объекта
const user = {
  name: 'Artem',
  age: 25,
  // 1 variant
  sayHi() {
    return `Hi, ${this.name}`
  },
  // 2 variant
  sayHi2: function () {
    return `Hi, ${this.name}`
  }
}

// 3 variant (outside the object)
user.sayHi3 = function () {
  return 'Hi'
}

// 4 variant (outside the object) separate variable
const sayHi4 = function () {
  return 'Hi'
}

console.log(user.sayHi())


//=============================this==================================

// this
// 1. равно глобальному объекту (global(nodeJS)/window)

// Что это такое?
// this - это объект перед точкой, В МОМЕНТ ВЫЗОВА

// Какой тип данных?
// это зачастую объект

// доказательство, что это такое
const test = {
  name: 'Vitalya',
  age: 35,
}

test.getTestName = function () {
  return this
}

console.log(test.getTestName()) // это непосредственно сам объект из контекста

//=============================call, bind, apply==================================

// call, bind, apply
// что за методы?
// для чего нужны?
// что принимают в качестве параметров?

// call
const user1 = {
  name: 'Artem',
  age: 25,
  sayHi() {
    return `${this.name}`
  },
  getAge(inc) {
    return `${this.age + inc}`
  },
  getFullInfo() {
    return `${this.name} and ${this.age}`
  }
}
const user2 = {
  name: 'Maksim',
  age: 10,
}

console.log(user1.sayHi.call(user2)) // присваивает новый контекст методу функции из user и вызывает метод
console.log(user1.getAge.call(user2, 10)) // передается еще аргумент для функции вторым параметром, можно и больше

// apply
console.log(user1.getAge.apply(user2, [7])) // то же самое что call, только параметры в массиве, а не через запятую
// тоже сразу вызывается и возвращает результат

// bind
const fullName = user1.getFullInfo.bind(user2) // привязывает метод к определенному контексту и присваивает переменной (возвращает функцию) для последующего вызова
const userAge = user1.getAge.bind(user2) // затем можем использовать его много раз с разными аргументами
const userAge1 = user1.getAge.bind(user2, 20)() // возвращает результат сразу вызова функции с аргументом, т.к. мы сами вызвали в конце
console.log(fullName())
console.log(userAge(50))
console.log(userAge1)

// example

const junior = {
  salary: 500,
  name: 'Artem',
  workExp: 0
}

const teamLead = {
  salary: 5000,
  name: 'Den',
  workExp: 7
}

function printDeveloperInfo(extraInfo='') {
  return `
    Name: ${this.name},
    Salary: ${this.salary},
    Experience: ${this.workExp},
    extraInfo: ${extraInfo}
    `
}

console.log(printDeveloperInfo()) // не указан контекст, поэтому берет global\window, а там таких свойств нет, соответственно undefined
console.log(printDeveloperInfo.call(teamLead)) // даем отдельной функции контекст
console.log(printDeveloperInfo.call(junior, 'Go to work'))
const leadInfo = printDeveloperInfo.bind(teamLead) // присваиваем функцию переменной, затем нужно вызывать
console.log(leadInfo('You are ROCK!'))

//=============================Случаи потери контекста==================================
// у стрелочной функции нету This, нету [...arguments], нельзя применить c.all, bind и apply

// 1ый - вызываем функцию без какого-либо контекста
const dev = {
  name: 'Nikita',
  programmingLanguage: 'Javascript',
  getName() {
    return this.name
  },
  getProgrammingLanguage() {
    return this.programmingLanguage
  }
}

const newGetName = dev.getName

console.log('getName', dev.getName())
console.log('newGetName', newGetName())


// const devGetName = newGetName.bind(dev)

// console.log('devGetName', devGetName())
// console.log('devGetName', dev.getName())

// 2ой - стрелочная функция, тогда начинает искать this в родителе выше

//=============================Функция-конструктор==================================

// Функция-конструктор

const person = {
  name: 'Den',
  age: 18,
  sex: 'male'
}

// для чего нужна

// Правила при работе с функцией конструктор
// 1. Имя функции начинается с большой буквы
// 2. При ее вызове нужно использовать ключевое слово new

// Базовая запись

function Person(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}

const person1 = new Person('Artem', 28, 'male')

console.log(person)
console.log(person1)
// Разница по сравнению с обычной функцией (что возвращают)
// всегда возвращает объект, примитивы игнорируются


// ---------------------------------- Задачи -----------------------------------------------

/*
1. Создайте объект car, у которого есть свойство brand и метод getBrand,
который выводит название марки машины.
Вызовите метод getBrand как метод объекта car.


2. Создайте объект counter, у которого есть свойство count и методы increment, decrement и reset,
которые увеличивают, уменьшают, зануляют (сбрасывает) значение счетчика соответственно.
Используйте ключевое слово this для обращения к свойству count.

3. Создайте объект person, у которого есть свойства name и age.
Создайте метод greet, который выводит сообщение с именем и возрастом персоны.
Используйте метод bind для создания новой функции,
которая будет связывать значение this с объектом person.

4. Создайте объект calculator, у которого есть свойства x и y и методы сложения и умножения этих чисел.
Создайте другой объект user, у которого есть свойства a и b.
Используйте метод call или apply для вызова методов объекта calculator с аргументами из объекта user.
 */

//1
const car = {
  brand: 'BMW',
  getBrand() {
    return this.brand
  }
}
console.log(car.getBrand())

//2
const count = {
  count: 0,
  increment() {
    return ++this.count
  },
  decrement() {
    return --this.count
  },
  reset() {
    return this.count = 0
  }
}

console.log(count.increment())
console.log(count.increment())
console.log(count.increment())
console.log(count.decrement())
console.log(count.reset())

//3
const personInfo = {
  name: 'Vitalya',
  age: 20
}

function greet() {
  return `Name: ${this.name}, Age: ${this.age}`
}

const personGreet = greet.bind(personInfo)
console.log(personGreet())

//4
const calculator = {
  x: 3,
  y: 5,
  sum(c) {
    return this.x + this.y + c
  },
  mul(b) {
    return this.x * this.y / b
  }
}

const man = {
  x: 10,
  y: 12,
}


console.log(calculator.sum.call(man, 100))
console.log(calculator.mul.apply(man, [2]))



