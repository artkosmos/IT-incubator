import React from 'react';
import './App.css';
import {Button} from "./components/Button";
// ВАРИАНТЫ ОБРАБОТКИ onClick
/*
// первый вариант с передачей значения
const onClickHandler1 = (name: string) => {
  console.log(`Hello, I'm ${name}`)
}
// второй вариант через ссылку
const onClickHandler2 = () => {
  console.log(`Hello, I'm Vasya`)
}

return (
  <div className="App">
    <button onClick={onClickHandler2}>MyYoutubeChannel-1</button>
    <button onClick={() => onClickHandler1('Ivan')}>MyYoutubeChannel-2</button>
  </div>
)*/

function App() {
  const foo1 = (subscriber: string, age: number, address: string) => {
    console.log(subscriber, age, address)
  }

  const foo2 = (subscriber: string, age: number) => {
    console.log(subscriber, age)
  }

  const foo3 = () => {
    console.log("I'm a stupid button")
  }
  return (
    <div className="App">
      <Button name={'MyYoutubeChannel-1'} callBack={() => foo1('Artem', 25, 'live in Minsk')}/>
      <Button name={'MyYoutubeChannel-2'} callBack={() => foo2('Maksim', 40)}/>
      <Button name={'JustClickOnMe'} callBack={foo3}/>
    </div>
  )
}

export default App;
