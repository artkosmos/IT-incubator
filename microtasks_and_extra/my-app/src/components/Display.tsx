import React from "react";
import style from "./Display.module.css";
import {Input} from "./Input";
import {ValuesType} from "../App";

type DisplayPropsType = {
  counter?: number
  maxValue?: number
  minValue?: number
  using?: string
  setMinValue?: (value: number) => void
  setMaxValue?: (value: number) => void
  values?: ValuesType
  maxInputError?: boolean
  setMaxInputError?: (value: boolean) => void
  minInputError?: boolean
  setMinInputError?: (value: boolean) => void
  condition: boolean
  setCondition?: (value: boolean) => void
}


export const Display: React.FC<DisplayPropsType> = ({
                                                      counter,
                                                      maxValue,
                                                      using,
                                                      minValue,
                                                      setMaxValue,
                                                      setMinValue,
                                                      values,
                                                      maxInputError,
                                                      minInputError,
                                                      condition,
                                                      setCondition
                                                    }) => {

  if (using === 'instruction') {
    return (
      <div className={`${style.scoreboard} ${style.instruction}`}>
        <div className={style.inputWrapper}>
          <Input
            callBack={setMaxValue}
            value={maxValue}
            type={'number'}
            spanValue={'max value'}
            inputError={maxInputError}
            condition={condition}
            setCondition={setCondition}
          />
          <Input
            callBack={setMinValue}
            value={minValue}
            type={'number'}
            spanValue={'start value'}
            inputError={minInputError}
            condition={condition}
            setCondition={setCondition}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={style.scoreboard}>
      {maxInputError || minInputError
        ? <span className={style.counterErrorMessage}>Choose correct values!</span>
        : condition
          ? <span className={style.counterMessage}>Choose value and press SET</span>
          : <span className={values && counter === values.max ? style.red : ''}>{counter}</span>}
    </div>
  )
}