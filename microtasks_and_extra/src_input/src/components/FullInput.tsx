import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
  changeMessage: (text: string) => void
}

function FullInput (props: FullInputPropsType) {
  let [text, setText] = useState('')
  console.log(text)
  // когда функция выносится вверх, ее надо самостоятельно типизировать
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value)
  }
  const onClickInputHandler = () => {
    props.changeMessage(text)
    setText('')
  }

  return (
    <div>
      <input value={text} onChange={onChangeInputHandler}/>
      <button onClick={onClickInputHandler}>+</button>
    </div>
  )
}

export default FullInput