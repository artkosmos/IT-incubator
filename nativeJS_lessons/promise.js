// СОЗДАНИЕ СВОЕГО PROMISE --------------------------------------------------------------------------------------------

const server = {
  getData () {  // метод объекта
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data')
      }, 2000)  // зарезолвит промис через 2 секунды
    })
  }
}

server.getData().then((data) => console.log(data)) // возвращает промис и обрабатывает resolve


// МЕТОДЫ ПРОМИСОВ ----------------------------------------------------------------------------------------------------

// all ждет пока зарезолвятся все промисы в массиве и отдает результат в переменную, иначе ошибка
Promise.all([
  fetch("https://yahoo.com/?query=js"),
  fetch("https://google.com/?query=js"),
  fetch("https://duckduckgo.com/?query=js")
])// выводим пришедшие данные в виде массива или ловим ошибку
  .then((data => console.log(data)))
  .catch((error) => console.log(error))

// race возвращает первый выполнившийся запрос, не важно fulfilled или reject
Promise.race([
  fetch("https://yahoodd.com/?query=js"),  // сделана ошибка
  fetch("https://google.com/?query=js"),
  fetch("https://duckduckgo.com/?query=js")
])
  .then((data => console.log(data.url)))
  .catch((error) => console.log(error))

// allsettled всегда возвращает массив результатов от каждого запроса, где есть свойства status: fulfilled или rejected
// и свойство value с данными или свойство reason с ошибкой
// никогда не попадает в catch

// any ждет первый resolve и сразу его возвращает, вернет массив всех reject только если все запросы будут c ошибкой
Promise.any([
  fetch("https://yahoo.com/?query=js"),
  fetch("https://google.com/?query=js"),
  fetch("https://duckduckgo.com/?query=js")
])
  .then((data => console.log(data.url)))
  .catch((error) => console.log(error))

// ЗАДАЧКА С СОБЕСЕДОВАНИЯ --------------------------------------------------------------------------------------------

Promise.reject('reject1') // возвращает сразу reject promise и значение string
    .catch(r => r + 'catch1') // catch принимает string т.к. до этого был отрицательный результат reject и возвращает строку "reject1catch1"
    .catch(r => r + 'catch2') // предыдущий catch возвращает resolve, т.к. отработал ошибку, значит этот catch игнорируется
    .then(r => r + 'then1')// с первого catch прыгаем сразу на then (т.к. resolve был), приходит строка "reject1catch1", возвращаем строку "reject1catch1then1"
    .finally(r => r + 'finally')// finally выполняется в любом случае, но он не может ничего принят или вернуть, поэтому ничего не делает и сквозь него падаем на следующий then
    .then(r => console.log(r)) // принимаем и выводим финальную фразу "reject1catch1then1"