import React, {useState} from 'react';
import {ItemsType} from "../Accordion/Accordion";
import style from './CustomSelect.module.css'

type CustomSelectPropsType = {
  value?: string
  items: ItemsType[]
  callBack: (value: string) => void
}

export const CustomSelect = (props: CustomSelectPropsType) => {

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [onHoveredItemValue, setOnHoveredItemValue] = useState<string | undefined>(props.value)

  const onClickHandler = () => {
    setIsCollapsed(!isCollapsed)
    setOnHoveredItemValue(props.value)
  }

  const onClickListItemHandler = (value: string) => {
    setIsCollapsed(false)
    props.callBack(value)
  }

  const onMouseEnterItemHandler = (value: string) => {
    setOnHoveredItemValue(value)
  }

  const selectedValue = props.items.find(item => props.value === item.value)
  const hoveredValue = props.items.find(item => onHoveredItemValue === item.value)

  return (
    <div>
      <div
        className={style.title}
        onClick={onClickHandler}
      >
        {selectedValue && selectedValue.title}
      </div>
      {isCollapsed && props.items.map((item, index) => {
        return (
          <div
            onClick={() => onClickListItemHandler(item.value)}
            key={index}
            className={item.value === hoveredValue?.value ? `${style.item} ${style.active}` : `${style.item}`}
            onMouseEnter={() => onMouseEnterItemHandler(item.value)}
          >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}