import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";

export type ValuesType = {
  min: number
  max: number
}


function App() {

  const [maxValue, setMaxValue] = useState<number>(0)
  const [minValue, setMinValue] = useState<number>(0)
  const [values, setValues] = useState<ValuesType>({min: 0, max: 0})
  const [counter, setCounter] = useState<number>(0)

  console.log(maxValue)
  console.log(minValue)

  const increment = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(values.min)
  }
  const addValues = () => {
    setValues({min: minValue, max: maxValue})
    setCounter(minValue)
  }

  return (
    <div className={s.mainContentWrapper}>
      <Counter
        values={values}
        increment={increment}
        reset={reset}
        currentValue={counter}
      />
      <Instruction
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setCounter={addValues}
      />
    </div>
  )
}

export default App;
