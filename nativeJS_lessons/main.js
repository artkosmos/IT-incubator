
//============================== Метод fetch (отправим запрос на сервер) ====================
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


//============================== Что такое promise и как его создать? ==========================
// promise это объект
// new Promise -> принимает callback (executor)

// executor принимает 2 callback функции resolve and reject


// new Promise((resolve, reject) => {
//     resolve(1)
//     // reject('error')
// })


// const promise = {
//     status: pending | fulfilled | rejected
//     value: undefined | value из resolve | value из rejected
// }

//============================== Методы промиса ===============================================
// then, catch, finally

// then
/*
// then((resolved) => {}, (rejected) => {})
then - срабатывает когда запрос завершен успешно или зарезолвился
Какие параметры -> 2 callback функции (первая для успешного выполнения, вторая для неуспешного)
 */


// catch
/*
catch - срабатывает когда запрос неуспешен (зареджектился)
Какие параметры -> callback функция
 */



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(json => console.log('Ошибка'))


// finally
/*
// finally(() => {})
finally - срабатывает вне зависимости от того зарезолвился или зареджектился промис
Какие параметры -> callback функция

!!! Ничего не принимает и ничего не возвращает
 */


//============================== Цепочка промисов =============================================
// const myPromise = new Promise((resolve, reject) => {
//
//     // resolve(2)
//     reject('Все пропало')
// })
//     .finally(() => console.log('Просто выведу в консоль'))
//     .then((data1) => console.log(data1 + 3))
//     .then((data2) => console.log(data2 * 2))
//     .catch((err) => console.log(err))
//     // .catch((err) => new Error('Еще ошибка'))
//     .catch((err) => console.log(err))
//     .then(() => {
//         return new Promise((resolve) => {
//             resolve('Я новый резолв')
//         })
//     })
//     .then((data4) => console.log(data4))
//     .catch((err) => console.log(err))
//
//
// console.log(myPromise)


// ============================================= Задачи на отработку =====================================================

// ============================================= Задача 1 =====================================================
// const p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
// })
// p.catch(error => console.log(error.message)) // The Fails!
// p.catch(error => console.log(error.message)) // The Fails!
// // отработают 2, т.к они независимы и каждый создает свой объект с одним и тем же промисом


// ============================================= Задача 2 =====================================================
// const a = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   .catch(error => console.log(error)) // The Fails!
//   .then(error => console.log(error)) // undefined
// // после catch возвращается промис в статусе pending и без значения, then отрабатывает, но возвращается undefined


// ============================================= Задача 3 =====================================================
// const b = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   .catch(error => console.log(error.message)) // The Fails!
//   .catch(error => console.log(error.message)) // второй catch не срабатывает (не ловит нейтральный промис)


// ============================================= Задача 4 =====================================================
// new Promise((resolve, reject) => {
//     resolve('Success!')
//   })
//   .then(() => {
//     throw Error('Oh noes!') // попадает сюда, но выбрасывает ошибку, поэтому идет в catch
//   })
//   .catch(error => {
//     return "actually, that worked" // catch принимает Error, но return другую строку
//   })
//   .catch(error => console.log(error.message)) // второй catch не срабатывает после выполненного первого
// // в итоге в консоли ничего не будет

// new Promise((resolve, reject) => {
//     resolve('Success!')
// })
//     .then(() => {
//        return Error('Oh noes!') // не выкидываем ошибку, а делаем return, соответственно catch не срабатывает
//     })
//     .catch(error => { // не словит
//         console.log(error)
//         return "actually, that worked"
//     })
//     .catch(error => console.log(error.message)) // не словит
//     .then(error => console.log(error)) // после последнего then ловит return и выводить в консоль сообщение

// ============================================= Задача 5 =====================================================
// Promise.resolve('Success!') // отрабатывает resolve
//   .then(data => { // принял значение
//     return data.toUpperCase() // привел к высшему регистру и вернул
//   })
//   .then(data => { // поймал значение и вывел в консоль
//     console.log(data)
//   })
// // в консоли будет SUCCESS!

// ============================================= Задача 6 =====================================================
// Promise.resolve('Success!') // отрабатывает resolve
//   .then(data => { // принял значение
//     return data.toUpperCase() // привел к высшему регистру и вернул
//   })
//   .then(data => {
//     console.log(data) // поймал значение и вывел в консоль
//     return data // вернул это же значение
//   })
//   .then(console.log) // попадает в then и сразу консолит пришедшее значение(короткий синтаксис)

// ============================================= Задача 7 =====================================================
// Promise.resolve('Success!') // отрабатывает resolve
//   .then(data => { // принял значение
//     data.toUpperCase() // привел к высшему регистру
//   })
//   .then(data => { // не было ничего возвращено из предыдущего then
//     console.log(data)
//   })
//   // в консоли будет undefined

// ============================================= Задача 8 =====================================================
// Promise.resolve('Success!') // отрабатывает resolve
//   .then(() => { // не принимает значение
//     throw Error('Oh noes!') // выкидывает ошибку, поэтому следующий будет catch
//   })
//   .catch(error => { // принял значение ошибки
//     return 'actually, that worked' // вернул другую строку
//   })
//   .then(data => { // в then попадает нейтральный промис
//     throw Error('The fails!') // промис reject, соответственно попадем в ближайший catch
//   })
//   .catch(error => console.log(error.message)) // выводим сообщение ошибки
// // в консоли будет The fails!


// ============================================= Задачи с собесов =====================================================

// ============================================= Задача 9 =====================================================

// Promise.resolve("1")
//     .then(data => {
//         console.log(data); // 1
//     })
//     .then(data => {
//         console.log(data); // undefined
//         return "2";
//     })
//     .then(data => {
//         console.log(data); // 2
//     })

// ============================================= Задача 10 =====================================================
// Promise.reject(1)
//     .then(data => { // пропускает т.к. reject
//         console.log(data);
//     })
//     .then(null, data => console.log(data)) // в этом then есть второй параметр для обработки reject, выведет "1"
//     .then(() => console.log('ok')); // затем после отработки reject, этот then ловит нейтральный промис и выводит "ok"
//
// Promise.reject()
//     .then(
//         data => console.log('ok'), // первый пропускает, т.к. он для обработки Resolved
//         data => console.log('error') // второй callback ловит rejected и обрабатывает его, выводя "error"
//     )



// ============================================= Задача 11 =====================================================
// Promise.reject("Api Error") // rejected
//     .then(data => console.log('ok')) // miss
//     .catch(error => { // ловит reject и значение
//         console.log(error); // выводит в консоль "Api Error"
//         return "1"; // возвращает новое значение
//     })
//     .then(data => { // ловит нейтральный промис после catch и переданное значение
//         console.log(data); // выводит в консоль "1"
//     })
//   // в консоли будет "Api Error" и "1"

// ============================================= Задача 12 =====================================================
// Promise.reject()
//     .catch(() => { // попадаем в reject
//         console.log('error1'); // в консоль
//         return Promise.reject(); // возвращаем reject promise
//     })
//     .catch(() => { // попадаем в reject
//         console.log('error2'); // в консоль
//     })
//   // в консоли будет "error1" и "error2"

// ============================================= Задача 13 =====================================================

// Promise.resolve() // промис resolve
//     .then(data => {
//         throw new Error('Api Error'); // выкидывается ошибка, значит следующий будет catch
//         return 1; // до этого return не дойдет
//     })
//
//     .then(data => console.log('ok')) // пропускается, т.к. выше выкинута ошибка
//
//     .catch(error => { // ловит reject
//         console.log(error.message); // выводит в консоль "Api Error"
//         return "2"; // возвращает новое значение
//     })
//
//     .then(data => { // принимает значение и нейтральный промис
//         console.log(data); // выводит в консоль 2 и промис статус fulfilled
//     })
// // в консоли будет "Api Error" и "2"


// ============================================= Задача 14 =====================================================
Promise.reject("Api Error") // reject
    .catch(null) // ловит reject и ждет callback, но т.к. его нет, а только значение null, то этот catch игнорируется
    .then(data => console.log('ok')) // miss
    .catch(error => console.log(error)) // словил ошибку, вместо проигнорированного catch и вывел ее сообщение
    .then(data => console.log('ok')) // словил промис после catch и делает вывод в консоль
// в консоли будет "Api Error" и "оk"


// ============================================= Задача 15 =====================================================
/*
!!!!
Promise.resolve()
    .then(() => {
        return "1";
    })
    .finally(data => {
        console.log(data);
        return "2";
    })
    .then(data => console.log(data))
!!!!
 */

// ============================================= Задача 16 =====================================================
/*
!!!!
Promise.reject()
    .finally(data => {
        console.log('finally'); // => "finally"
    })
!!!!
 */

// ============================================= Задача 17 =====================================================
/*
!!!!
Promise.resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))

Promise.resolve()
    .then(() => console.log(11))
    .then(() => console.log(12))
!!!!
 */

// ============================================= Задача 18 =====================================================
/*
!!!!
Promise.resolve()
    .then(() => console.log(1))
    .then(() => { console.log(2); throw new Error(); })
    .catch(() => console.log(3))
    .then(() => console.log(4))

Promise.resolve()
    .then(() => console.log(11))
    .then(() => { console.log(12); throw new Error(); })
    .catch(() => console.log(13))
    .then(() => console.log(14))
!!!!
 */




