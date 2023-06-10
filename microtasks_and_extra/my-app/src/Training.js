// Задача 1: Поменять в объекте с id: 8 значение isDone с 'true' на "false"

// const tasks = {
//   ['todolistID1']: [
//     { id: 1, title: 'HTML&CSS', isDone: true },
//     { id: 2, title: 'JS', isDone: true },
//     { id: 3, title: 'ReactJS', isDone: false },
//     { id: 4, title: 'Rest API', isDone: false },
//     { id: 5, title: 'Graph SQL', isDone: false },
//   ],
//   ['todolistID2']: [
//     { id: 6, title: 'Milk', isDone: true },
//     { id: 7, title: 'Fruits', isDone: true },
//     { id: 8, title: 'Nuts', isDone: true },
//     { id: 9, title: 'Bread', isDone: false },
//     { id: 10, title: 'Sugar', isDone: false },
//   ],
// }

// console.log({
//   ...tasks,
//   ['todolistID2']: tasks['todolistID2'].map(item =>
//     item.id === 8 ? { ...item, isDone: false } : item
//   ),
// })

// Задача 2:
// 1) В массиве по ключу ["todolistID1"] оставить таски только со значением false
// 2) В массиве по ключу ["todolistID2"] оставить таски только со значением true

// const tasks = {
//   ['todolistID1']: [
//     { id: 1, title: 'HTML&CSS', isDone: false },
//     { id: 2, title: 'JS', isDone: true },
//     { id: 3, title: 'React', isDone: false },
//     { id: 4, title: 'Rest API', isDone: true },
//     { id: 5, title: 'Graph SQL', isDone: false },
//   ],
//   ['todolistID2']: [
//     { id: 6, title: 'Bread', isDone: false },
//     { id: 7, title: 'Milk', isDone: true },
//     { id: 8, title: 'Nuts', isDone: true },
//     { id: 9, title: 'Fruits', isDone: true },
//     { id: 10, title: 'Sugar', isDone: false },
//   ],
// }
//
// console.log({
//   ...tasks,
//   ['todolistID1']: tasks['todolistID1'].filter(item => !item.isDone),
//   ['todolistID2']: tasks['todolistID2'].filter(item => item.isDone),
// })

// Задача 3:
// 1) В массиве по ключу ["todolistID1"] с id: 3 поменять title с 'React' на 'React + Typescript'
// 2) В массиве по ключу ["todolistID2"] с id: 7 поменять title с 'Milk' на 'Butter'

// const tasks = {
//   ['todolistID1']: [
//     { id: 1, title: 'HTML&CSS', isDone: false },
//     { id: 2, title: 'JS', isDone: true },
//     { id: 3, title: 'React', isDone: false },
//     { id: 4, title: 'Rest API', isDone: true },
//     { id: 5, title: 'Graph SQL', isDone: false },
//   ],
//   ['todolistID2']: [
//     { id: 6, title: 'Bread', isDone: false },
//     { id: 7, title: 'Milk', isDone: true },
//     { id: 8, title: 'Nuts', isDone: true },
//     { id: 9, title: 'Fruits', isDone: true },
//     { id: 10, title: 'Sugar', isDone: false },
//   ],
// }
//
// console.log({
//   ...tasks,
//   ['todolistID1']: tasks['todolistID1'].map(item =>
//     item.id === 3 ? { ...item, title: 'React + Typescript' } : item
//   ),
//   ['todolistID2']: tasks['todolistID2'].map(item =>
//     item.id === 7 ? { ...item, title: 'Butter' } : item
//   ),
// })

// Задача 4 (Hard):
// С помощью логического оператора "И" (&&):
// 1) В массиве по ключу ["todolistID1"] с id: 1 поменять title с 'HTML&CSS' на 'HTML + CSS + Bootstrap',
// И по ключу ["todolistID1"] с id: 3 поменять title с 'React' на 'React + Typescript';

// 2) В массиве по ключу ["todolistID2"] с id: 7 поменять title с 'Milk' на 'Watermelon',
// // И по ключу ["todolistID2"] с id: 10 поменять title с 'Sugar' на 'Water';

// const tasks = {
//   ['todolistID1']: [
//     { id: 1, title: 'HTML&CSS', isDone: false },
//     { id: 2, title: 'JS', isDone: true },
//     { id: 3, title: 'React', isDone: false },
//     { id: 4, title: 'Rest API', isDone: true },
//     { id: 5, title: 'Graph SQL', isDone: false },
//   ],
//   ['todolistID2']: [
//     { id: 6, title: 'Bread', isDone: false },
//     { id: 7, title: 'Milk', isDone: true },
//     { id: 8, title: 'Nuts', isDone: true },
//     { id: 9, title: 'Fruits', isDone: true },
//     { id: 10, title: 'Sugar', isDone: false },
//   ],
// }
//
// let result = {
//   ...tasks,
//   ['todolistID1']: tasks['todolistID1'].map(item =>
//     // eslint-disable-next-line no-nested-ternary
//     item.id === 1
//       ? { ...item, title: 'HTML + CSS + Bootstrap' }
//       : item && item.id === 3
//       ? { ...item, title: 'React + Typescript' }
//       : item
//   ),
// }
//
// console.log(result)
