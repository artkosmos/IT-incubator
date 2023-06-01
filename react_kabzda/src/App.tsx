import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import SelfControlledAccordion from "./components/Accordion/SelfControlledAccordion";
import Accordion from "./components/Accordion/Accordion";

function App() {
  console.log('App rendering')

  const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  return (
    <div>
      <div><OnOff/></div>
      <div><OnOff/></div>
      <div className='stars'>
        <AppTitle title={'This is React App'} type={1}/>
        {/*<AppTitle title={'Rate it, please'} type={3}/>*/}
        <Rating value={ratingValue} callBack={(value) => setRatingValue(value)}/>
      </div>
      <div className='list'>
        <Accordion title={"Our drink menu"} collapsed={isCollapsed} callBack={setIsCollapsed}/>
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
