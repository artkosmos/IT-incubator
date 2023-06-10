import React from 'react';

type SuperButtonPropsType = {
  name: string
  callBack: () => void
}

export const SuperButton = (props: SuperButtonPropsType) => {
  const {callBack, name, ...restProps} = props

  const onClickHandler = () => {
    callBack()
  }

  return (
    <>
      <button onClick={onClickHandler}>{name}</button>
    </>
  )
}

