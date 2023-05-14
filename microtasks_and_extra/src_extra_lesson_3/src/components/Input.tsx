import React, {ChangeEvent, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

type InputPropsType = {
  ref: React.RefObject<HTMLInputElement>
}

export function Input(props: InputPropsType) {

  /*const onChangeHandler = ((event: ChangeEvent<HTMLInputElement>) => {
    props.setText(event.currentTarget.value)
  })*/

  return (
    <input ref={props.ref} type="text"/>
  )
}