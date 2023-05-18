import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {SuperToDoList} from "./components/SuperToDoList";

// children это то что внутри тегов компонента
// с помощью них можно передавать в один компонент много разного контента для отрисовки

function App() {

  const tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
  ]

    return (
        <div>
          {/*<Button name={'Button'} callBack={() => {}} />*/}
          <Button callBack={() => {}} color={'red'}>RED Button</Button>
          <Button callBack={() => {}}>Default Button</Button>
          <Button callBack={() => {}} color={'secondary'} disabled >Disabled Button</Button>
          <div>------------------------------------------------------------</div>
          <SuperToDoList tasks={tasks}>
            <Button callBack={() => {}} color={'red'}>RED Button</Button>
            <Button callBack={() => {}}>Default Button</Button>
            <Button callBack={() => {}} color={'secondary'} disabled >Disabled Button</Button>
          </SuperToDoList>
          <div>------------------------------------------------------------</div>
          <SuperToDoList tasks={tasks}>
            <Button callBack={() => {}} color={'red'}>RED Button</Button>
            <div>Some info</div>
            <div>Some info</div>
            <div>Some info</div>
            <div>Some info</div>
            <div>Some info</div>
            <div>Some info</div>
          </SuperToDoList>
          <div>------------------------------------------------------------</div>
          <SuperToDoList tasks={tasks}>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <div>Some info</div>
            <div>Some info</div>
            <div>Some info</div>
            <Button callBack={() => {}} color={'red'}>RED Button</Button>
            <Button callBack={() => {}}>Default Button</Button>
            <Button callBack={() => {}} color={'secondary'} disabled >Disabled Button</Button>
          </SuperToDoList>
        </div>
    );
}



export default App;
