// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
  console.log(nums)
  // console.log(arguments) - псевдомассив
  return nums.reduce((acc, item) => acc + item, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
  if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
    return "00"
  }
  if (a === b && b === c) {
    return "10"
  }
  if (a === b || b === c || a === c) {
    return "01"
  }
  return '11'
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
  const arrayOfNumbers = number.toString().split('')
  return arrayOfNumbers.reduce((acc, item) => acc + Number(item), 0)
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
  const oddIndexNumbers = arr.reduce((acc, item, index) => {
    if (index % 2 !== 0) {
      acc += item
    }
    return acc
  }, 0)
  const evenIndexNumbers = arr.reduce((acc, item, index) => {
    if (index % 2 === 0) {
      acc += item
    }
    return acc
  }, 0)
  return evenIndexNumbers > oddIndexNumbers
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, которые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
  const positiveIntNumbersArr = array.filter(item => Number.isInteger(item) && item > 0)
  return positiveIntNumbersArr.map(item => item ** 2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
  if (N === 0) {
    return 0
  }
  return N + sumFirstNumbers(N - 1)
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
  let banknotes = []
  while (amountOfMoney !== 0) {
    if (amountOfMoney >= 1000) {
      amountOfMoney -= 1000
      banknotes.push(1000)
    } else if (amountOfMoney >= 500) {
      amountOfMoney -= 500
      banknotes.push(500)
    } else if (amountOfMoney >= 100) {
      amountOfMoney -= 100
      banknotes.push(100)
    } else if (amountOfMoney >= 50) {
      amountOfMoney -= 50
      banknotes.push(50)
    } else if (amountOfMoney >= 20) {
      amountOfMoney -= 20
      banknotes.push(20)
    } else if (amountOfMoney >= 10) {
      amountOfMoney -= 10
      banknotes.push(10)
    } else if (amountOfMoney >= 5) {
      amountOfMoney -= 5
      banknotes.push(5)
    } else if (amountOfMoney >= 2) {
      amountOfMoney -= 2
      banknotes.push(2)
    } else {
      amountOfMoney -= 1
      banknotes.push(1)
    }
  }
  return banknotes
}