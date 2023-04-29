import React from "react";

type AccordionPropsType = {title :string, collapsed :boolean}

function Accordion(props :AccordionPropsType) {
  console.log('Accordion rendering')
  return (
    <div>
      <AccordionTitle title={ props.title } />
      <AccordionBody collapsed={ props.collapsed } />
    </div>
  )
}

type AccordionTitlePropsType = {title :string}

const AccordionTitle = (props :AccordionTitlePropsType) => {
  console.log('AccordionTitle rendering')
  return <h2>{ props.title }</h2>
}

type AccordionBodyPropsType = {collapsed :boolean}

const AccordionBody = (props :AccordionBodyPropsType) => {
  console.log('AccordionBody rendering')
  if (props.collapsed ) {
    return <>This menu hasn't ready yet</>
  }
  return (
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Water</li>
    </ul>
  )
}

export default Accordion;