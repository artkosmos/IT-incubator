// правило CRUD
const students = [
    {
        id: 1,
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        id: 4,
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
];
// map под капотом
const newMap = (arr) => {
    const result = []
    const transform = (student) => student.name
    for (let i = 0; i < arr.length; i++) {
        result[i] = transform(arr[i])
    }
    return result
}

console.log(newMap(students))

// возврат упрощенного массива
const getTransformStudents = (arr) => {
    const result = []
    const transform = (student) => ({name: student.name, scores: student.scores})
    for (let i = 0; i < arr.length; i++) {
        result[i] = transform(arr[i])
    }
    return result
}

console.log(getTransformStudents(students))

//разделение на разные функции
const getName = (student) => student.name
const getNewStudents = (student) => ({
    name: student.name,
    scores: student.scores
})

const newArrMap = (arr, callback) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i])
    }
    return result
}

// filter под капотом
// conditionFn это функция с каким то условием
const newFilter = (arr, conditionFn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (conditionFn(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

// изменение свойства completeStudy и возвращение нового массива
const jsx = students.reduce((acc, student) => {
    acc.push({...student, completeStudy: false})
    return acc
}, [])

console.log(jsx)

// можно использовать map и добавить условие, чтобы изменять только некоторые элементы изначального массива
const newJsx = students.map((student) => {
    if (student.name === 'John') {
        return {...student, isMarried: true}
    }
    return student
})

console.log(newJsx)