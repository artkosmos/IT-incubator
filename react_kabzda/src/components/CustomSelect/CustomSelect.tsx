import React, {useState} from 'react';
import {ItemsType} from "../Accordion/Accordion";

type CustomSelectPropsType = {
  value?: string
  items: ItemsType[]
  callBack: (value: string) => void
}

export const CustomSelect = (props: CustomSelectPropsType) => {

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsCollapsed(!isCollapsed)
  }

  const onClickListItemHandler = (value: string) => {
    setIsCollapsed(false)
    props.callBack(value)
  }

  const selectedValue = props.items.find(item => props.value === item.value)

  return (
    <div>
      <div onClick={onClickHandler}>{selectedValue && selectedValue.title}</div>
      <ul>
        {isCollapsed && props.items.map((item, index) => {
          return (
            <li onClick={() => onClickListItemHandler(item.value)} key={index}>{item.title}</li>
          )
        })}
      </ul>
    </div>
  )
}