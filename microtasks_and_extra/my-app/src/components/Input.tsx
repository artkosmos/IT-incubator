import React, {ChangeEvent} from 'react';
import style from './Input.module.css'

type InputPropsType = {
  type: string
  spanValue: string
  value: number
}

export const Input = ({type, spanValue, value}: InputPropsType) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div className={style.inputLine}>
      <span>{spanValue}</span>
      <input value={value} onChange={onChangeHandler} placeholder={'0'} className={style.input} type={type}/>
    </div>
  )
}
