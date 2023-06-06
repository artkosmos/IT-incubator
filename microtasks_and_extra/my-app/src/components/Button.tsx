import React from "react";
import style from './Button.module.css'

type ButtonPropsType = {
  children: React.ReactNode
  callBack: () => void
  disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({callBack, children, disabled}) => {

  const onClickHandler = () => {
    callBack()
  }

  return (
    <button
      className={disabled ? `${style.button} ${style.disable}` : `${style.button}`}
      onClick={onClickHandler}
      disabled={disabled}
    >{children}
    </button>
  )
}