import React, {ChangeEvent} from 'react';

type SuperCheckBoxType = {
  checked: boolean
  callBack: (value: boolean) => void
}

export const SuperCheckBox: React.FC<SuperCheckBoxType> = ({checked, callBack, ...restProps}) => {

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    callBack(event.currentTarget.checked)
  }

  return (
    <>
      <input type='checkbox' onChange={onChangeHandler} checked={checked}/>
    </>
  );
};
