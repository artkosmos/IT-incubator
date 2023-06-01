import React from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  callBack: () => void
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  return (
    <div>
      <AccordionTitle callBack={props.callBack} title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
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

const AccordionBody = () => {
  console.log('AccordionBody rendering')

  return (
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Water</li>
    </ul>
  )
}

export default Accordion;