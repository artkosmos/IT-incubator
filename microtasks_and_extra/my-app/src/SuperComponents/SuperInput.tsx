import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {SuperButton} from "./SuperButton";

type SuperInputPropsType = {
  callBack: (newValue: string) => void
  setError: (value: string | null) => void
}

export const SuperInput: React.FC<SuperInputPropsType> = ({callBack, setError, ...restProps}) => {
  const [newValue, setNewTitle] = useState<string>("")

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
    setError(null)
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClickHandler()
    }
  }

  const onClickHandler = () => {
    callBack(newValue)
    setNewTitle('')
  }

  return (
    <>
      <input
        value={newValue}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        placeholder={"Enter an item"}
      />
      <SuperButton name={'Add'} callBack={onClickHandler}/>
    </>
  )
}
