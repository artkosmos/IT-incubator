import React, {useState} from 'react';
import {SuperInput} from "./SuperInput";

export type EditSpanPropsType = {
  status: string
  callBack: (value: string) => void
}

export const EditSpan = (props: EditSpanPropsType) => {

  const [newValue, setNewValue] = useState<string>(props.status)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const onDoubleClickHandler = () => {
    setIsEdit(true)
  }

  const onKeyDownCallBack = (key: string) => {
    if (key === "Enter") {
      props.callBack(newValue)
      setIsEdit(false)
    }
  }

  return (
    <>
      {isEdit && <SuperInput callBack={setNewValue} value={newValue} onKeyDownCallBack={onKeyDownCallBack}/>}
      {!isEdit && <span onDoubleClick={onDoubleClickHandler}>{newValue}</span>}
    </>
  );
};
