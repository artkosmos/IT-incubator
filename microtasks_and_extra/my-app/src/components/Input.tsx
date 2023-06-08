import React, {ChangeEvent, useState} from 'react';
import style from './Input.module.css'

type InputPropsType = {
  type: string
  spanValue: string
  value?: number
  callBack?: (value: number) => void
  setIsDisabled?: (value: boolean) => void
}

export const Input = ({
                        type,
                        spanValue,
                        value,
                        callBack,
                        setIsDisabled,
                      }: InputPropsType) => {

  const [error, setError] = useState<boolean | null>(null)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.currentTarget.value) < 0) {
      setError(true)
      setIsDisabled?.(true)
    } else {
      setError(null)
      setIsDisabled?.(false)
    }

    callBack?.(Number(event.currentTarget.value))
  }

  return (
    <div className={style.inputWrapper}>
      <div className={style.inputLine}>
        <span>{spanValue}</span>
        <input
          value={value ? value : ''}
          onChange={onChangeHandler}
          placeholder={'0'}
          className={error ? `${style.input} ${style.error}` : style.input}
          type={type}
        />
      </div>
      <div className={error ? `${style.errorMessage} ${style.active}` : style.errorMessage}>
        only positive numbers!
      </div>
    </div>
  )
}
