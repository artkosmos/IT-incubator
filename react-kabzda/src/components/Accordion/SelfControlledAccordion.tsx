import React, {useState} from 'react';

type SelfControlledAccordionPropsType = { title: string }

function SelfControlledAccordion(props: SelfControlledAccordionPropsType) {
  console.log('Accordion rendering')

  const [collapsed, setCollapsed] = useState(false)

  const onClickHandler = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true)
  }

  return (
    <div>
      <SelfControlledAccordionTitle title={props.title}/>
      <button onClick={onClickHandler}>Show menu</button>
      {collapsed && <SelfControlledAccordionBody/>}
    </div>
  )
}

const SelfControlledAccordionTitle = (props: SelfControlledAccordionPropsType) => {
  console.log('AccordionTitle rendering')
  return <h2>{props.title}</h2>
}

const SelfControlledAccordionBody = () => {
  console.log('AccordionBody rendering')

  return (
    <ul>
      <li>Ice cream</li>
      <li>Chocolate</li>
      <li>Biscuits</li>
    </ul>
  )
}

export default SelfControlledAccordion;

