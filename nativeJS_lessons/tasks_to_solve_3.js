//1. Реализуйте функцию, которая принимает параметром подстроку, число повторов и разделитель, а возвращает строку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"


//2. Реализуйте функцию, которая принимает параметром строку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром строку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

//5. Реализуйте функцию, которая принимает параметром строку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в строке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

// 1 task
function repeatString(string, repeat, divider) {
  return new Array(repeat).fill(string).join(divider)
}

console.log(repeatString('hello', 3, ', '))

// 2 task
function checkStart(string, value) {
  return string.toLowerCase().startsWith(value.toLowerCase())
}

console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "ync"))

// 3 task
function truncateString(string, quantitySymbols) {
  return `${string.slice(0, quantitySymbols)}...`
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))




