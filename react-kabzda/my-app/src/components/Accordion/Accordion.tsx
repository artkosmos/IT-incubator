import React from "react";

function Accordion(props :any) {
  console.log('Accordion rendering')
  return (
    <div>
      <AccordionTitle title={ props.title }/>
      <AccordionBody />
    </div>
  )
}

const AccordionTitle = (props :any) => {
  console.log('AccordionTitle rendering')
  return <h2>{ props.title }</h2>
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