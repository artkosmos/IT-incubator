import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";


function App() {

  const [maxValue, setMaxValue] = useState<number>(2)
  const [minValue, setMinValue] = useState<number>(1)
  const [counter, setCounter] = useState<number>(minValue)

  const increment = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(minValue)
  }


  return (
    <div className={s.mainContentWrapper}>
      <Counter
        maxValue={maxValue}
        minValue={minValue}
        increment={increment}
        reset={reset}
        currentValue={counter}
      />
      <Instruction
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
    </div>
  )
}

export default App;
