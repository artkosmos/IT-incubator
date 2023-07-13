
//============================== async/await ================================

const foo1 = () => { // стандартная запись создания промиса resolve
  return new Promise((res) => {
    res(123)
  })
}

const foo = async () => { // сразу резолвит и возвращает промис (короткая запись)
  return 123
}

// еще 2 вида записи:
// const foo2 = async function() {}
// async function() {}

const timerPromise = () => {  // промис зарезолвится через 2 секунды
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(2)
    }, 2000)
  })
}

const asyncFn = async () => {
  console.log('timer start')
  await timerPromise()  // подождать пока выполнится промис (типо синхронная функция)
  console.log('timer end') // выполнится только после результата выполнения await
}

asyncFn()
console.log(1) // выполнится после первого вывода в консоль, так как код выполняется синхронно, пропуская await

//============================== Задание ================================
/*
1. Отправь запрос с методом get для получения пользователей, используя метод fetch
const USERS_URL = `https://jsonplaceholder.typicode.com/users`

2. Обработай ответ response и декодируй его с помощью метода (какого) ????
3. Выведи в консоль users
console.log('users', users)
4. Обработай возможную ошибку и в случае ее возникновения: выведи error
console.log('error', error)

5.Выведи в консоль первого пользователя (с id=1)
 console.log('firstUserId', firstUserId)
6. Получи весь список задач (todos) для первого пользователя (с id=1)
Подумай где это нужно делать?

Базовый URL:
const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`

Пример url:
const USERS_URL = `https://jsonplaceholder.typicode.com/todos?userId=1`

Подсказка: нужно отправить новый запрос, используя данные полученные из предыдущего запроса
7. Выведи данные задачи в консоль и проделай все по аналогии с пользователями
(декодирование, обработка ошибки и тд):
console.log('todos', todos)

Проверь полученный результат (везде дб userId=1)

8. Получается неудобный код (если делать запросы снова -> растет вправо)
-> перепиши код на async/await

Для этого создай функцию getTodosWithUserData

9. Вызови результат функции в консоль
console.log('promise', promise)

10. Обработай ошибки и напиши какой-нибудь finally
11. Проверь работоспособность catch
12. Попробуй сломать URL -> посмотри что будет
 */

const TODOS_URL = `https://jsonplaceholder.typicode.com/todos`
const USERS_URL = `https://jsonplaceholder.typicode.com/users`

fetch(USERS_URL)
  .then(response => response.json())
  .then(users => {
    console.log('users', users)
    const firstUser = users[0].id // id первого user

    fetch(`${TODOS_URL}?userId=${firstUser}`)
      .then(response => response.json()) // декодирование данных
      .then(todos => console.log(todos))
  })
  .catch(error => {

    console.log('error', error)
  })

// переписать коды выше на async await
const fooAsync = async () => {
  try {
    const usersResponse = await fetch(USERS_URL)
    const users = await usersResponse.json() // декодирование
    const firstUser = users[0].id

    const todoResponse = await fetch(`${TODOS_URL}?userId=${firstUser}`)
    const todoForFirstUser = await todoResponse.json() // декодирование

    return todoForFirstUser

  } catch (error) {
    console.log('error', error)
  }
}
fooAsync().then(data => console.log(data) )

//============================== Задачи ================================

//============================== Задача 1 ================================

// Требуется переписать данный код, который использует then, catch и finally, в код,
// который использует исключительно async await и try, catch, finally.


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
// const createNewPost = () => {
//     isLoading = true;
//     fetch(POSTS_URL, {
//         method: 'POST',
//     })
//         .then((response) => response.json())
//         .then((result) => {
//             console.log('result', result)
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
//         .finally(() => {
//             isLoading = false;
//         });
// };
// createNewPost();

// переписанный код на async await

const createNewPostAsync = async () => {
  isLoading = true // запускается крутилка к примеру

  try {
    const response = await fetch(POSTS_URL, {method: 'POST'})
    return await response.json()
  }
  catch (error) {
    console.log(error)
  }
  finally {
    isLoading = false
  }
}

createNewPostAsync().then() // обрабатываем return

//============================== Задача 2 ================================
/*
Требуется переписать данный код, который использует then и catch, в код, который
использует исключительно async await и try, catch.

const getTodosByIds = (ids) => {
const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
Promise.all(requests)
.then((responses) => {
const dataResults = responses.map((data) => data.json());
return Promise.all(dataResults)
})
.then((allTasks) => {
console.log(allTasks);
})
.catch((error) => {
console.log(error);
})
}
getTodosByIds([43, 21, 55, 100, 10]);
 */

const getTodosByIdAsync = async (array) => {
  try {
    const arrayOfRequests = array.map(id => fetch(`${TODOS_URL}/${id}`))
    const responses = await Promise.all(arrayOfRequests)
    const result = await Promise.all(responses.map(item => item.json()))

    return result
  }
  catch (error) {
    console.log(error)
  }
}

getTodosByIdAsync().then(data => console.log(data))

