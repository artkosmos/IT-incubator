
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
const p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
p.catch(error => console.log(error.message)) // The Fails!
p.catch(error => console.log(error.message)) // The Fails!
// отработают 2, т.к они независимы и каждый создает свой объект с одним и тем же промисом


// ============================================= Задача 2 =====================================================
/*
!!!!
const p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
  })
  .catch(error => console.log(error))
  .then(error => console.log(error))
!!!!
 */


// const p = new Promise((resolve, reject) => {
//     reject('The Fails!')
// })
//     .catch(error => console.log(error))
//     .then(error => console.log(error))

// ============================================= Задача 3 =====================================================
/*
!!!!
const p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
  })
  .catch(error => console.log(error.message))
  .catch(error => console.log(error.message))
!!!!
 */


// ============================================= Задача 4 =====================================================
/*
!!!!
new Promise((resolve, reject) => {
    resolve('Success!')
  })
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return "actually, that worked"
  })
  .catch(error => console.log(error.message))
!!!!
 */

// new Promise((resolve, reject) => {
//     resolve('Success!')
// })
//     .then(() => {
//        console.log(Error('Oh noes!'))
//     })
//     .catch(error => {
//         console.log(error)
//         return "actually, that worked"
//     })
//     .catch(error => console.log(error.message))

// ============================================= Задача 5 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })
!!!!
 */

// ============================================= Задача 6 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
    return data
  })
  .then(console.log)
!!!!
 */

// ============================================= Задача 7 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(data => {
    data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })
!!!!
 */

// ============================================= Задача 8 =====================================================
/*
!!!!
Promise.resolve('Success!')
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return 'actually, that worked'
  })
  .then(data => {
    throw Error('The fails!')
  })
  .catch(error => console.log(error.message))
!!!!
 */


// ============================================= Задачи с собесов =====================================================

// ============================================= Задача 1 =====================================================
/*
!!!!
Promise.resolve("1")
    .then(data => {
        console.log(data);
    })
    .then(data => {
        console.log(data);
        return "2";
    })
    .then(data => {
        console.log(data);
    })
!!!!
 */

// ============================================= Задача 2 =====================================================
/*
!!!!
Promise.reject(1)
    .then(data => {
        console.log(data);
    })
    .then(null, data => console.log(data))
    .then(() => console.log('ok'));

Promise.reject()
    .then(
        data => console.log('ok'),
        data => console.log('error')
    )
!!!!
 */



// ============================================= Задача 3 =====================================================
/*
!!!!
Promise.reject("Api Error")
    .then(data => console.log('ok'))
    .catch(error => {
        console.log(error);
        return "1";
    })
    .then(data => {
        console.log(data);
    })
!!!!
 */

// ============================================= Задача 4 =====================================================
/*
!!!!
Promise.reject()
    .catch(() => {
        console.log('error1');
        return Promise.reject();
    })
    .catch(() => {
        console.log('error2');
    })
!!!!
 */

// ============================================= Задача 5 =====================================================
/*
!!!!
Promise.resolve()
    .then(data => {
        throw new Error('Api Error');
        return 1;
    })

    .then(data => console.log('ok'))

    .catch(error => {
        console.log(error.message); // => "Api Error"
        return "2";
    })

    .then(data => {
        console.log(data); // => "2"
    })
!!!!
 */

// ============================================= Задача 6 =====================================================
/*
!!!!
Promise.reject("Api Error")
    .catch(null)
    .then(data => console.log('ok'))
    .catch(error => console.log(error))
    .then(data => console.log('ok'))
!!!!
 */


// ============================================= Задача 7 =====================================================
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

// ============================================= Задача 8 =====================================================
/*
!!!!
Promise.reject()
    .finally(data => {
        console.log('finally'); // => "finally"
    })
!!!!
 */

// ============================================= Задача 9 =====================================================
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

// ============================================= Задача 10 =====================================================
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




