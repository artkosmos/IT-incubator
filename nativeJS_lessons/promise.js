Promise.reject('reject1') // возвращает сразу reject promise и значение string
    .catch(r => r + 'catch1') // catch принимает string т.к. до этого был отрицательный результат reject и возвращает строку "reject1catch1"
    .catch(r => r + 'catch2') // предыдущий catch возвращает resolve, т.к. отработал ошибку, значит этот catch игнорируется
    .then(r => r + 'then1')// с первого catch прыгаем сразу на then (т.к. resolve был), приходит строка "reject1catch1", возвращаем строку "reject1catch1then1"
    .finally(r => r + 'finally')// finally выполняется в любом случае, но он не может ничего принят или вернуть, поэтому ничего не делает и сквозь него падаем на следующий then
    .then(r => console.log(r)) // принимаем и выводим финальную фразу "reject1catch1then1"