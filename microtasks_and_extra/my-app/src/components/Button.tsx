import React from "react";
import style from './Button.module.css'

type ButtonPropsType = {
  children: React.ReactNode
  callBack: () => void
  disabled?: boolean
  using?: string
  condition: boolean
}

export const Button: React.FC<ButtonPropsType> = ({
                                                    callBack,
                                                    children,
                                                    disabled,
                                                    using,
                                                    condition
                                                  }) => {

  const onClickHandler = () => {
    callBack()
  }

  return (
    <button
      className={disabled
        ? `${style.button} ${style.disable}`
        : using === 'counter'
          ? `${style.button} ${style.aqua}`
          : using === 'instruction'
            ? `${style.button} ${style.orange}`
            : `${style.button}`
      }
      onClick={onClickHandler}
      disabled={disabled}
    >{children}
    </button>
  )
}