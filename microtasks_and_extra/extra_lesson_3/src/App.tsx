import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TodosType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {

  const [todos, setTodos] = useState<TodosType[]>([])
  console.log(todos)
  /*const [text, setText] = useState('')*/

  let myRef = useRef<HTMLInputElement>(null)
  //  useRef хранит в себе переменную, не ререндерив компонент при каждом ее изменении

  // получение данных с сервера
  /*useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])*/
  // Три режима работы useEffect:
  // 1) ничего не добавляем в конце и работает без перерерыва
  // 2) ставим [] и он срабатывает 1 раз
  // 3) если засунуть внутрь [] переменную, он будет запускаться при ее изменении

  const showTodosHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }

  const hideTodosHandler = () => {
    setTodos([])
  }

  /*const addTaskHandler = ()=> {
    let newTask: TodosType = {userId: 1, id: todos.length + 1, title: text, completed: false}
    const updatedTasks = [newTask, ...todos]
    setTodos(updatedTasks)
    setText('')
  }*/

  const addTaskHandlerSecond = () => {
    if (myRef.current) {
      let newTask: TodosType = {userId: 1, id: todos.length + 1, title: myRef.current.value, completed: false}
      setTodos([newTask, ...todos])
      myRef.current.value = ''
    } else {
      console.log('input value is missing')
    }
  }

  return (
    <div className="App">
      <div>
        <input type="text" ref={myRef}/>
        {/*<Input setText={setText} value={text}/>*/}
        <Button name={'add'} callBack={addTaskHandlerSecond}/>
      </div>
      <div>
        <button onClick={showTodosHandler}>Show me Todos</button>
        <button onClick={hideTodosHandler}>Hide Todos</button>
      </div>
      <ul>
        {todos.map(item => {
          return (
            <li key={item.id}>
              <span>{item.id} </span>
              <span>{item.userId} </span>
              <span>{item.title }</span>
              <input type="checkbox" checked={item.completed}/>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
