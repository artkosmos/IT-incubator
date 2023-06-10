import React, { ChangeEvent, KeyboardEvent } from 'react'

type SuperInputPropsType = {
  callBack: (value: string) => void
  value: string
  onKeyDownCallBack: (key: string) => void
}

export const SuperInput = ({ callBack, value, onKeyDownCallBack }: SuperInputPropsType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    callBack(event.currentTarget.value)
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDownCallBack(event.key)
  }

  return <input value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
}
