import React from 'react';
import style from './Input.module.css'

type InputPropsType = {
  type: string
  spanValue: string
}

export const Input = ({type, spanValue}: InputPropsType) => {
  return (
    <div className={style.inputLine}>
      <span>{spanValue}</span>
      <input className={style.input} type={type}/>
    </div>
  )
}
