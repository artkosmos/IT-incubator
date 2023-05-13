import React from "react";

type AccordionPropsType = { title: string, collapsed: boolean }

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  return (
    <div>
      <AccordionTitle title={props.title}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = { title: string }

const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendering')
  return <h2>{props.title}</h2>
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