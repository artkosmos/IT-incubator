import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import style from './App.module.css'
import {Display} from "./components/Display";


function App() {

  const maxValue: number = 5
  const minValue: number = 0

  const [counter, setCounter] = useState<number>(minValue)

  const increment = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(minValue)
  }

  return (
    <div className={style.counter}>
      <div className={style.counterWrapper}>
        <Display maxValue={maxValue} counter={counter}/>
        <div className={style.buttonsArea}>
          <Button callBack={increment} disabled={counter === maxValue}>ADD</Button>
          <Button callBack={reset} disabled={counter === minValue}>RESET</Button>
        </div>
      </div>
    </div>
  )
}

export default App;
