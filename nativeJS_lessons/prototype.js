//=============================Прототипы==================================

//             ЧТОЗА.__proto__            ЧТОЗА.prototype


//=============================__proto__==================================
// Для чего нужны прототипы?
// для наследования свойств другого объекта


const students = {
  age: 25,
  name: 'Artem',
  knowledge: 'JS'
}

let mentor =  {
  id: 2
}

mentor.__proto__ = students // mentor have access to all properties from students

console.log(mentor.age)
console.log(mentor.__proto__.name)

// second variant to write (more modern)

// mentor = Object.create(students)  // create new object{} with prototype students

Object.setPrototypeOf(mentor, students) // set prototype students for existing object mentor

console.log(Object.getPrototypeOf(mentor)) // {age: 25, name: 'Artem', knowledge: 'JS'}

console.log(mentor.knowledge)

// check is it its own properties -----> Object.hasOwnProperty()


// Чем может быть равен __proto__? -----> object or null


// У кого есть __proto__? -----> all objects


//=============================prototype==================================
function Car(brand) {
  this.brand = brand
}

const isPremiumCar = {
  isPremium: true
}

Car.prototype = isPremiumCar // extend Car constructor
const bmw = new Car('bmw')

console.log(bmw.isPremium)


// У кого есть свойство prototype? ----> functions and classes

// Какая связь между __proto__ и prototype? ----> __proto__ ссылается на prototype, a prototype это сама функция конструктор



//=============================Прототипы для функции-конструктора==================================

// Задание свойства в прототип для функции-конструктора

// Задание метода в прототип для функции-конструктора


// Как работает this для прототипов?


//=============================Создание своих методов для примитивов================================
// Откуда у примитивов взялись методы?
// Расскажи на примере (1).toString()


// Создай метод superSamurai для строки, который будет добавлять строку,
// переданную в качестве параметра в нашу функцию к нашей текущей строке


// Попробуй применить его к любой строке


// Создай свойство samuraiCount для чисел, которое должно равняться 100200


// Попробуй переопределить свойство length для строки и посмотри получилось ли


// Докажи что в JS все это объект


// =============== Задание по прототипам ========================================

/*
1. Создай функцию-конструктор Animal, внутри нее напиши console.log('Наш зверь')
2. С помощью функции-конструктора Animal создай экземпляр monkey
3. Посмотри что будет если создавать экземпляр без ключевого слова
4. Посмотри что будет если к monkey применить метод constructor
5. Посмотри что будет если взять instanceof monkey от Animal

6. Создай новые свойства для Animal: type, arial, isDangerous, energy
7. Создай экземпляр monkey и lion c этими свойствами и проверь вышло
8. Создай метод run внутри Animal, в котором будет проверяться свойство energy,
если energy больше нуля, то она будет уменьшаться на 20,
иначе выведи в консоль -> Пощади зверя!
9. Проверь экземпляры на наличие методов и их работу

10. Равны ли между собой методы для monkey и lion?
А теперь сравни метод map для любых двух массивов arr1.map === arr2.map и сделай вывод
11. Добавь метод run в prototype (и убери старый из Animal)
12. Попробуй вызвать данный метод для каждого из экземпляров
и посмотри в браузере что у нас за экземпляры
Поясни откуда у них взялся данный метод
13. Добавь с помощью prototype новое свойство hungry = 60% в Animal (вне его)
и такое же свойство внутри Animal hungry = 10%
и попробуй вывести данное свойство в консоль, сначала когда они оба есть и когда есть свойство
только вне функции (с помощью prototype)
Объясни как это работает?
14. Создай еще один метод в prototype -> getEnergyInfo и выведи в консоль текущий уровень энергии -> '(число)'
Создай ниже такой же метод в prototype ->
getEnergyInfo и выведи в консоль -> 'Текущий уровень энергии (число)'
Посмотри что будет

Объясни как это работает и что это дает?
 */


// =============== Решение задачи по прототипам ========================================


//=============================JSON==================================

// Для чего нужен JSON? ----> для передачи данных

// Что попадает в JSON, а что нет?
/*
JSON поддерживает следующие типы данных:
- Объекты { ... }
- Массивы [ ... ]
- null
- не поддерживает комментарии

- Примитивы:
   * cтроки,
   * числа,
   * логические значения true/false,
 */

/*
JSON пропускает некоторые специфические свойства объектов JavaScript:
- Свойства-функции (методы).
- Символьные ключи и значения.
- Свойства, содержащие undefined.
 */


// Пример
const frontData = {
  name: 'Alex',
  login: 'alexandro',
  age: 25,
  isOnline: false,
  isAdmin: false,
  email: 'alex25@gmail.com',
  password: '12345',
  location: {
    country: 'Belarus',
    city: 'Vitebsk'
  }
}

// как из данного объекта сделать JSON?
const jsonFrontData = JSON.stringify(frontData) // stringify has several owns properties to format data

// В чем отличие данных в JSON от обычного объекта?


console.log(frontData)
console.log(jsonFrontData)
console.log(typeof frontData) // object
console.log(typeof jsonFrontData) // string

// Как теперь серверу превратить этот JSON обратно в объект?
const objectFrontData = JSON.parse(jsonFrontData) // parse has several owns properties to format data

console.log(objectFrontData) // back to object


//=============================try, catch, finally==================================

// Для чего нужна данная конструкция и когда используется? ----> to handle some possibly errors

// Базовая запись
try {
  // condition
} catch (err) {
  // which errors
} finally {

}

// Как обработать ошибку?

const a = 1
try { // если ошибки нет, выполнит код
  const b = a + c // variable c is not exist
  console.log(b)
} catch (error) { // если в try ошибка, то переходит в catch
  console.log(error)
} finally {
  console.log('123') // выполняется в любом случае
}

// Какие свойства содержит объект ошибки и что они означают?

// Как можно сократить здесь код?
// error.name ----> название ошибки
// error.message -----> сообщение ошибки
// error.stack ----> нахождение ошибки

// Как создать пользовательскую ошибку?













