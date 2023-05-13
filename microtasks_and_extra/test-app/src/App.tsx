import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotesType = 'All' | 'Rubles' | 'Dollars'
export type MoneyType = {
  id: number
  banknotes: BanknotesType
  value: number
  number: string
}

let defaultMoney: MoneyType[] = [
  {id: 1, banknotes: 'Dollars', value: 100, number: ' a1234567890'},
  {id: 2, banknotes: 'Dollars', value: 50, number: ' z1234567890'},
  {id: 3, banknotes: 'Rubles', value: 100, number: ' w1234567890'},
  {id: 4, banknotes: 'Dollars', value: 100, number: ' e1234567890'},
  {id: 5, banknotes: 'Dollars', value: 50, number: ' c1234567890'},
  {id: 6, banknotes: 'Rubles', value: 100, number: ' r1234567890'},
  {id: 7, banknotes: 'Dollars', value: 50, number: ' x1234567890'},
  {id: 8, banknotes: 'Rubles', value: 50, number: ' v1234567890'},
]

// функция фильтрации
export const moneyFilter = (money: MoneyType[], filter: BanknotesType): MoneyType[] => {
  if (filter !== 'All') {
    return money.filter((item) => item.banknotes === filter)
  }
  return money
}

function App() {
  const [money, setMoney] = useState<any>(defaultMoney) // основная отрисовка
  const [filterValue, setFilterValue] = useState<any>('All') // фильтр

  // добавление возможности удаления банкнот
  const deleteBanknote = (id: number) => {
    const updatedBanknotes: MoneyType[] = money.filter(((item: MoneyType) => item.id !== id))
    setMoney(updatedBanknotes)
  }

  const filteredMoney = moneyFilter(money, filterValue) // результат вызова этой функции идет в отрисовку

  return (
    <div className="App">
      <Country
        data={filteredMoney}   // отрисовать будем деньги после фильтрации
        setFilterValue={setFilterValue}  // передаем UseState дальше на onClick
        deleteBanknote={deleteBanknote}
      />
    </div>
  );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
