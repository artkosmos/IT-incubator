import React, {ChangeEvent} from 'react';
import style from './Input.module.css'

type InputPropsType = {
  type: string
  spanValue: string
  value?: number
  callBack?: (value: number) => void
}

export const Input = ({type, spanValue, value, callBack}: InputPropsType) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    callBack?.(Number(event.currentTarget.value))
  }

  return (
    <div className={style.inputLine}>
      <span>{spanValue}</span>
      <input value={value ? value : ''} onChange={onChangeHandler} placeholder={'0'} className={style.input} type={type}/>
    </div>
  )
}
