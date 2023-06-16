import React, {useState} from 'react';

export const CustomSelect = () => {

  const data: string[] = ['high', 'medium', 'low']
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('Select one')

  const onClickHandler = () => {
    setIsCollapsed(!isCollapsed)
  }

  const onClickListItemHandler = (value: string) => {
    setIsCollapsed(false)
    setTitle(value)
  }

  return (
    <div>
      <div onClick={onClickHandler}>{title}</div>
      <ul>
        {isCollapsed && data.map((item, index) => {
          return (
            <li onClick={() => onClickListItemHandler(item)} key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}