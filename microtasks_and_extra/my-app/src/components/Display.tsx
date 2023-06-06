import React from "react";
import style from "./Display.module.css";
import {Input} from "./Input";

type DisplayPropsType = {
  counter: number
  maxValue: number
  using?: string
}


export const Display: React.FC<DisplayPropsType> = ({
                                                      counter,
                                                      maxValue,
                                                      using
                                                    }) => {

  if (using === 'instruction') {
    return (
      <div className={`${style.scoreboard} ${style.instruction}`}>
        <div className={style.inputWrapper}>
            <Input type={'number'} spanValue={'max value'}/>
            <Input type={'number'} spanValue={'start value'}/>
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