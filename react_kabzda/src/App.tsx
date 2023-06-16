import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import SelfControlledAccordion from "./components/Accordion/SelfControlledAccordion";
import Accordion from "./components/Accordion/Accordion";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";

function App() {
  console.log('App rendering')

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
  const [toggle, setToggle] = useState<boolean>(false)

  const items = [
    {title: 'Tea', value: 'green Indian tea'},
    {title: 'Coffee', value: '100% arabica with cinnamon'},
    {title: 'Cocktail', value: 'fresh and cold peach tea'},
  ]


  return (
    <div>
      <div><OnOff/></div>
      <div><ControlledOnOff toggle={toggle} callBack={setToggle}/></div>
      <div className='stars'>
        <AppTitle title={'This is React App'} type={1}/>
        {/*<AppTitle title={'Rate it, please'} type={3}/>*/}
        <Rating value={ratingValue} callBack={setRatingValue}/>
      </div>
      <div className='list'>
        <Accordion
          onItemClick={(value)=>{alert(value)}}
          title={"Our drink menu"} collapsed={isCollapsed}
          callBack={() => {setIsCollapsed(!isCollapsed)}}
          items={items}
        />
        <SelfControlledAccordion title={"Our desserts menu"}/>
        {/*<Accordion title={"Our desserts menu"} collapsed={true}/>*/}
        <AppTitle title={'Rate it, please'} type={2}/>
        {/*<Rating value={2}/>*/}
        {/*<SelfControlledRating/>*/}
      </div>
    </div>
  );
}

type AppTitlePropsType = { type: number, title: string }

function AppTitle(props: AppTitlePropsType) {
  console.log('AppTitle rendering')
  if (props.type === 1) {
    return <h1>{props.title}</h1>
  }
  return <h3>{props.title}</h3>
}

export default App;
