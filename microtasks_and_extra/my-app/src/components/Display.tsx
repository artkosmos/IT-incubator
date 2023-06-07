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
}


export const Display: React.FC<DisplayPropsType> = ({
                                                      counter,
                                                      maxValue,
                                                      using,
                                                      minValue,
                                                      setMaxValue,
                                                      setMinValue,
                                                      values
                                                    }) => {

  if (using === 'instruction') {
    return (
      <div className={`${style.scoreboard} ${style.instruction}`}>
        <div className={style.inputWrapper}>
          <Input callBack={setMaxValue} value={maxValue} type={'number'} spanValue={'max value'}/>
          <Input callBack={setMinValue} value={minValue} type={'number'} spanValue={'start value'}/>
        </div>
      </div>
    )
  }

  return (
    <div className={style.scoreboard}>
      <span className={values && counter === values.max ? style.red : ''}>{counter}</span>
    </div>
  )
}