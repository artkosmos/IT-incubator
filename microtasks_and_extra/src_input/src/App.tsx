import React, {ChangeEvent, useState} from 'react';
import './App.css';
import FullInput from "./components/FullInput";
import Input from "./components/Input";
import Button from "./components/Button";


function App() {
  let [message, setMessage] = useState([
    {message: 'Hi, everyone!'},
    {message: 'How are you?'},
    {message: 'The weather is good.'}
  ])

  let [text, setText] = useState('') //для второго подхода вынесен в основной компонент для доступа общего

  const changeMessage = (text: string) => {
    let newMessage = {message: text}
    setMessage([newMessage, ...message])
    setText('')
  }
// первый подход с кнопкой и инпутом в одном компоненте
// второй подход с разделением на компоненты
  return (
    <div className={'App'}>
      {/*<FullInput changeMessage={changeMessage}/>*/}
      <div className={'inputButton'}>
        <Input text={text} setText={setText}/>
        <Button name={'Add message'} callBack={()=>{changeMessage(text)}}/>
      </div>
      {message.map((item, index) => {
        return (
          <div key={index}>{item.message}</div>
        )
      })}
    </div>
  )
}

export default App;
