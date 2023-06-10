import React, { KeyboardEvent, useState } from 'react'
import { SuperButton } from './SuperButton'
import { SuperInput } from './SuperInput'

type SuperInputPropsType = {
  callBack: (newValue: string) => void
  setError: (value: string | null) => void
}

export const SuperForm: React.FC<SuperInputPropsType> = ({ callBack, setError, ...restProps }) => {
  const [newValue, setNewValue] = useState<string>('')

  const onChangeHandler = (value: string) => {
    setNewValue(value)
    setError(null)
  }
  const onKeyDownHandler = (key: string) => {
    if (key === 'Enter') {
      onClickHandler()
    }
  }
  const onClickHandler = () => {
    callBack(newValue)
    setNewValue('')
  }

  return (
    <div>
      <SuperInput
        callBack={onChangeHandler}
        value={newValue}
        onKeyDownCallBack={onKeyDownHandler}
      />
      {/*<input value={newValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />*/}
      <SuperButton callBack={onClickHandler} name={'Add'} />
    </div>
  )
}
