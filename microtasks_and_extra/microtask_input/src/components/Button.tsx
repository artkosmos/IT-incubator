import React from 'react';

type ButtonPropsType = {
  name: string
  callBack: () => void
}

const Button = (props: ButtonPropsType) => {
  const onClickInputHandler = () => {
    props.callBack()
  }

  return (
    <div>
      <button onClick={onClickInputHandler}>{props.name}</button>
    </div>
  );
};

export default Button;