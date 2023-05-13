
// вначале вызывается функция, потом переданный колл бэк
const makePizza = function(title, callBack) {
  console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`)
  callBack()
}

const readBook = function() {
  console.log('Читаю книгу «Колдун и кристалл»…')
}

const eatPizza = function() {
  console.log('Ура! Пицца готова, пора подкрепиться.')
}

// Приготовление пиццы. Длительный процесс
makePizza('pepperoni', readBook)
eatPizza()