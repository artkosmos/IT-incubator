import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";

export type ValuesType = {
  min: number
  max: number
}


function App() {

  const [maxValue, setMaxValue] = useState<number>(1)
  const [minValue, setMinValue] = useState<number>(0)
  const [values, setValues] = useState<ValuesType>({min: 0, max: 0})
  const [counter, setCounter] = useState<number>(0)
  const [maxInputError, setMaxInputError] = useState<boolean>(false)
  const [minInputError, setMinInputError] = useState<boolean>(false)


  /*useEffect(() => {
    if (maxValue !== values.max) {
      setText('incorrect value')
    } else {
      setText('')
    }
  }, [minValue, maxValue])*/

  useEffect(() => {
    if (maxValue === minValue || minValue > maxValue) {
      setMaxInputError(true)
      setMinInputError(true)
    } else if (maxValue < 0) {
      setMaxInputError(true)
    } else if (minValue < 0) {
      setMinInputError(true)
    } else {
      setMaxInputError(false)
      setMinInputError(false)
    }
  }, [minValue, maxValue])

  const increment = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(values.min)
  }
  const addValues = () => {
    setValues({...values, min: minValue, max: maxValue})
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
        maxInputError={maxInputError}
        setMaxInputError={setMaxInputError}
        minInputError={minInputError}
        setMinInputError={setMinInputError}
      />
    </div>
  )
}

export default App;
