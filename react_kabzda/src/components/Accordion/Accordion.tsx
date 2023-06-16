import React from "react";

type ItemsType = {
  title: string
  value: string
}

type AccordionPropsType = {
  title: string
  collapsed: boolean
  callBack: () => void
  items: ItemsType[]
  onItemClick: (value: string) => void
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  return (
    <div>
      <AccordionTitle callBack={props.callBack} title={props.title}/>
      {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  callBack: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendering')
  return <h2 onClick={() => props.callBack()}>{props.title}</h2>
}

type AccordionBodyPropsType = {
  items: ItemsType[]
  onItemClick: (value: string) => void
}
const AccordionBody = (props: AccordionBodyPropsType) => {
  console.log('AccordionBody rendering')

  const onItemClickHandler = (value: string) => {
    props.onItemClick(value)
  }

  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li key={index} onClick={()=>{onItemClickHandler(item.value)}}>{item.title}</li>
        )
      })}
    </ul>
  )
}

export default Accordion;