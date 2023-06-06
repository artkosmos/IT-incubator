import React from "react";
import style from "./Display.module.css";

type DisplayPropsType = {
  counter: number
  maxValue: number
}


export const Display: React.FC<DisplayPropsType> = ({counter, maxValue}) => {
  return (
    <div className={style.scoreboard}>
      <span className={counter === maxValue ? style.red : ''}>{counter}</span>
    </div>
  )
}