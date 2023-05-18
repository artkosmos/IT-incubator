import React from "react";
import s from './Button.module.css'


type ButtonPropsType = {
  name?: string
  callBack: () => void
  color?: string
  children?: React.ReactNode
  disabled?: boolean
}


export const Button: React.FC<ButtonPropsType> = (props:ButtonPropsType) => {

  const {callBack, color, children, disabled, ...restProps} = props

  const onClickHandler = () => {
    callBack()
  }

  /*const finalClassName = s.button
    + (disabled
      ? ' ' + s.disabled
      : color === 'red'
        ? ' ' + s.red
        : color === 'secondary'
          ? ' ' + s.secondary
          : ' ' + s.default)
    + (className ? ' ' + className : '')*/

  // const finalClassName = `${s.button} ${s.default}
  // const finalClassName = `${s.button} ${color === 'red' ? s.red : s.default}`
  // const finalClassName = `${s.button} ${color === 'red' ? s.red : s.default} ${disabled ? s.disabled : ''}`
  const finalClassName = `
  ${s.button} 
  ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default} 
  ${disabled ? s.disabled : ''}`


  return (
    <button className={finalClassName} onClick={() => onClickHandler}>{children}</button>
  )
}

// ----------------------------------------------------------------------------------------------------------

/*
import React from "react";


type ButtonPropsType = {
  name: string
  callBack: () => void
  color: string
}


export const Button: React.FC<ButtonPropsType> = ({
                                                    name,
                                                    callBack,
                                                    ...restProps
                                                  }) => {

  const onClickHandler = () => {
    callBack()
    restProps.color
  }

  return (
    <button onClick={() => onClickHandler}>{name}</button>
  )
}*/
