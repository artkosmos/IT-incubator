const students = [
  {
    id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
    // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
  },
  {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    id: 3,
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    id: 4,
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  },
  {
    id: 5,
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110
  },
  {
    id: 6,
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105
  },
];

const user = {
  name: "Bob",
  age: 23,
  friends: ["Alex", "Nick", "John"]
}

const superUser = {
  name: "Bob",
  age: 23,
  friends: [
    {
      id: 1,
      name: "Ann",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      id: 2,
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      id: 4,
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    }
  ]
}
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//1. Создайте полную (глубокую) копию объекта user ++++
const userCopy = structuredClone(user)
userCopy.name = 'John'
userCopy.age = 31
console.log(userCopy)


//2. Создайте полную (глубокую) массива students ++++
const studentsCopy = students.map(item => ({...item}))
studentsCopy[0].age = 56
studentsCopy[2].scores = 5
console.log(studentsCopy)


//3. Создайте полную (глубокую) копию объекта superUser
const superUserCopy = {...superUser, friends: superUser.friends.map(item => ({...item}))}
superUserCopy.friends[0].age = 101
console.log(superUserCopy)


//4. Отсортируйте students по успеваемости (лучший идёт первым)(sort)
const studentsCopySortedByScore = students.map(item => ({...item})).sort((a, b) => b.scores - a.scores)
console.log(studentsCopySortedByScore)


//5. Сформируйте массив студентов, у которых 100 и более баллов (filter)
const studentsCopyFiltered = students.filter(item => item.scores >= 100)
console.log(studentsCopyFiltered)


//6. Сформируйте массив имён студентов (map)
const studentsCopyNames = students.map(item => item.name)
console.log(studentsCopyNames)


//7. Добавьте всем студентам свойство "isStudent" со значением true (map)
const studentsCopyAddProperties = students.map(item => ({...item, isStudent: true}))
console.log(studentsCopyAddProperties)


//8. Nick женился. Выполните соответствующие преобразование массива
// students (map)
const studentsCopyChangeMarried = students.map(item => item.name === 'Nick' ? {...item, isMarried: true} : item)
console.log(studentsCopyChangeMarried)


// Внесите  следующие изменения в объект superUser:
// NB!!! Все преобразования выполняем иммьютабельно, если не сказано иное

//9.Удалите объект с id=1 из массива  friends
const superUserCopyDeletedById = {...superUser, friends: superUser.friends.filter(item => item.id !== 1)}
console.log(superUserCopyDeletedById)


//10. поменяйте объекту с id=2 из массива  friends значение св-ва name на
// "Donald"
const superUserCopyChangeNameById = {
  ...superUser, friends: superUser.friends.map(item => item.id === 2
    ? {...item, name: 'Donald'}
    : item)
}
console.log(superUserCopyChangeNameById)


//11. добавьте в список друзей нового друга
const newFriend = { id: 6, name: 'Adolf', age: 47, isMarried: false, scores: 199 }
const superUserCopyAddedFriend = {...superUser, friends: [...superUser.friends, newFriend]}
console.log(superUserCopyAddedFriend)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом не используя методы массивов и
// Math.max()
let student
let maxScore = 0
for (let i = 0; i < students.length; i++) {
  if (students[i].scores > maxScore) {
    maxScore = students[i].scores
    student = students[i]
  }
}
console.log(student.name)


//13. Найдите сумму баллов всех студентов (reduce)*
const studentsCopySumOfScores = students.reduce((acc, item) => acc + item.scores, 0)
console.log(studentsCopySumOfScores)


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет к каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (array) => {
  const arrayCopy = structuredClone(array)
  for (let i = 0; i < arrayCopy.length; i++) {
    const currentStudent = arrayCopy[i]
    const currentStudentsFriends = arrayCopy
      .filter((item) => item.id !== currentStudent.id)
      .map(item => item.name)

    arrayCopy[i]['friends'] = currentStudentsFriends
  }
  return arrayCopy
}

console.log(addFriends(students))


// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив students  и количество лучших студентов, которое надо получить в
// новом массиве. Если второго параметра нет, то по умолчанию возвращает лучшего студента
// getBestStudents(students) => {name: "Nick", age: 20, isMarried: false, scores: 120}
// getBestStudents(students, 3) => [{...}, {...}, {...}]
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

const getBestStudents = (array, quantity = 1) => {
  if (quantity === 1) {
    return [...array].sort((a, b) => a.scores - b.scores).at(-1)
  }
  const sortedArray = [...array].sort((a, b) => b.scores - a.scores)
  const arrayOfBestStudents = new Array(quantity).fill(null)
  for (let i = 0; i < quantity; i++) {
    if (sortedArray[i]) {
      arrayOfBestStudents[i] = sortedArray[i]
    }
  }
  return arrayOfBestStudents
}

console.log(getBestStudents(students,10))