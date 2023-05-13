import React from "react";
type ButtonPropsType = {
  name: string
  callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
  const onClickHandler = () => {
    // кнопка обрабатывает callBack
    props.callBack()
  }
  return (
    <button onClick={onClickHandler}>{props.name}</button>
  )
}