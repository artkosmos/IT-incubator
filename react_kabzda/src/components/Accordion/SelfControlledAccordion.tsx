import React, {useState} from 'react';

type SelfControlledAccordionPropsType = {
  title: string
}

function SelfControlledAccordion(props: SelfControlledAccordionPropsType) {
  console.log('Accordion rendering')

  const [collapsed, setCollapsed] = useState(false)

  const onClickHandler = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true)
  }

  return (
    <div>
      <SelfControlledAccordionTitle callBack={onClickHandler} title={props.title}/>
      {collapsed && <SelfControlledAccordionBody/>}
    </div>
  )
}

type SelfControlledAccordionTitlePropsType = {
  title: string
  callBack: () => void
}

const SelfControlledAccordionTitle = (props: SelfControlledAccordionTitlePropsType) => {
  console.log('AccordionTitle rendering')
  return <h2 onClick={props.callBack}>{props.title}</h2>
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

