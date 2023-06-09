import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";
import {saveState} from "./localStorage";

export type ValuesType = {
  min: number
  max: number
}


function App() {

  const [maxValue, setMaxValue] = useState<number>(5)
  const [minValue, setMinValue] = useState<number>(0)
  const [values, setValues] = useState<ValuesType>({min: 0, max: 5})
  const [counter, setCounter] = useState<number>(0)
  const [maxInputError, setMaxInputError] = useState<boolean>(false)
  const [minInputError, setMinInputError] = useState<boolean>(false)
  const [condition, setCondition] = useState<boolean>(false)


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
    setCondition(false)
  }

  return (
    <div className={s.mainContentWrapper}>
      <Counter
        values={values}
        increment={increment}
        reset={reset}
        currentValue={counter}
        maxInputError={maxInputError}
        minInputError={minInputError}
        condition={condition}
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
        condition={condition}
        setCondition={setCondition}
      />
    </div>
  )
}

export default App;
