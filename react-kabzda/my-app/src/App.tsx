import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
/*import Star from "./components/Star/Star";*/
import Rating from "./components/Rating/Rating";

function App() {
  console.log('App rendering')
  return (
    <div>
      <div className='stars'>
        <AppTitle title={'This is React App'} type={'h1'} />
        <AppTitle title={'Rate it, please'} type={'h2'} />
        <Rating value={4} />
      </div>
      <div className='list'>
        <Accordion title={"Our menu"}/>
        <AppTitle title={'Rate it, please'} type={'h2'} />
        <Rating value={2} />
      </div>
    </div>
  );
}

function AppTitle(props :any) {
  console.log('AppTitle rendering')
  if (props.type === 'h1') {
    return <h1>{ props.title }</h1>
  }
  return <h3>{ props.title }</h3>
}

export default App;
