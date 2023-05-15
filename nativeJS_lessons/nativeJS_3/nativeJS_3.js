// если произойдет "то-то", то выполни "это"
// "то-то" - событие
// "это" - коллбэк функция

// event - описание или отчет о событии в виде объекта

const sm = window.document.getElementById("small")
const md = window.document.getElementById("medium")
const bg = window.document.getElementById("big")
const tn = window.document.getElementById("tiny")

// старый подход
const handler1 = () => {
  alert('Hi there!')
}
const handler2 = () => {
  alert('Hello again!')
}

sm.onclick = handler1
sm.onclick = handler2 // происходит перезатирание обработчика


//современный подход
sm.addEventListener('click', handler1)
sm.addEventListener('click', handler2) // можно вешать до 5 событий на элемент
sm.addEventListener('click', () => alert('That\'s me!'))

//снять обработчик события
sm.removeEventListener('click', handler1)
sm.removeEventListener('click', handler2)
sm.removeEventListener('click', () => alert('That\'s me!')) // не скинет обработчик, т.к. это новая функция

// всплытие события
// когда нажимается small, по сути оно нажимается и на medium, и на big,  и на body
const handler3= (event) => {
  event.stopPropagation() // останавливает всплытие на body, html и т.д.
  alert('MEDIUM')
}
const handler4= (event) => {
  event.stopPropagation() // останавливает всплытие на big
  alert('BIG')
}


md.addEventListener('click', handler3)
bg.addEventListener('click', handler4)

//вдруг если ты клинул на tiny, а обработчик висит на small, то лучге использовать currentTarget
sm.addEventListener('click', (event) => {
  event.stopPropagation() // останавливает всплытия для medium и big
  if (event.currentTarget.id === 'small') { // currentTarget элемент на котором сработало событие
    alert('AAAAAAAAAAAAAAAAAA')
  }
})

//обработка target
const hg = window.document.getElementById("huge")

hg.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    alert(event.target.id)
  }
})

// обработка ссылки, отмена стандартного переходы по ссылке
const a = document.querySelector('a')

a.addEventListener('click', (event) => {
  event.preventDefault()
})