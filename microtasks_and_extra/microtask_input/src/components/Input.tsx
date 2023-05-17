import React, {ChangeEvent} from 'react';

type InputPropsType = {
  text: string
  setText: (text: string) => void
}

const Input = (props: InputPropsType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setText(event.currentTarget.value)
  }
  return (
    <div>
      <input value={props.text} onChange={onChangeInputHandler}/>
    </div>
  );
};

export default Input;