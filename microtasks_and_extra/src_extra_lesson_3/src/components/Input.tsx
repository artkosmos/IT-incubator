import React, {ChangeEvent} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;


type InputPropsType = {
  setText: (text: string) => void
  value: string
}

export function Input(props: InputPropsType) {

  const onChangeHandler = ((event: ChangeEvent<HTMLInputElement>) => {
    props.setText(event.currentTarget.value)
  })

  return (
    <input value={props.value} type="text" onChange={onChangeHandler}/>
  )
}