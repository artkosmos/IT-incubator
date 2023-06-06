import React from "react";
import style from "./Display.module.css";
import {Input} from "./Input";

type DisplayPropsType = {
  counter?: number
  maxValue: number
  minValue: number
  using?: string
  setMinValue?: (value: number) => void
  setMaxValue?: (value: number) => void

}


export const Display: React.FC<DisplayPropsType> = ({
                                                      counter,
                                                      maxValue,
                                                      using,
                                                      minValue,
                                                      setMaxValue,
                                                      setMinValue
                                                    }) => {

  if (using === 'instruction') {
    return (
      <div className={`${style.scoreboard} ${style.instruction}`}>
        <div className={style.inputWrapper}>
          <Input value={maxValue} type={'number'} spanValue={'max value'}/>
          <Input value={minValue} type={'number'} spanValue={'start value'}/>
        </div>
      </div>
    )
  }

  return (
    <div className={style.scoreboard}>
      <span className={counter === maxValue ? style.red : ''}>{counter}</span>
    </div>
  )
}