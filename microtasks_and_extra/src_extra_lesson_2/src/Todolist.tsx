 import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
 import {Button} from "./components/Button/Button";


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
  id: number
  title: string
  tasks: Array<TasksType>
  students: Array<string>
  removeTask: (taskId: string, todolistId: number) => void
  changeFilter: (value: FilterValuesType, todolistId: number) => void
  addTask: (title: string, todolistId: number) => void
  changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
  removeTodolist: (id: number) => void
  filter: FilterValuesType
}

export function Todolist(props: PropsType) {
  let [title, setTitle] = useState("")
  let [error, setError] = useState<string | null>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) {
      // addTask();
    }
  }
  const removeToDoListHandler = () => {
    props.removeTodolist(props.id)
  }
  const addTaskHandler = () => {
    props.addTask(title, props.id)
  }
  const removeTaskHandler = (taskId: string) => {
    props.removeTask(taskId, props.id)
  }
  const changeFilterAllHandler = () => {
    props.changeFilter('all', props.id)
  }
  const changeFilterActiveHandler = () => {
    props.changeFilter('active', props.id)
  }
  const changeFilterCompletedHandler = () => {
    props.changeFilter('completed', props.id)
  }

  return <div>
    <h3> {props.title}
      {/*<button onClick={() => {'removeTodolist'}}>x</button>*/}
      <Button name={'X'} callBack={removeToDoListHandler}/>
    </h3>
    <div>
      <input value={title}
             onChange={onChangeHandler}
             onKeyPress={onKeyPressHandler}
             className={error ? "error" : ""}
      />
      {/*<button onClick={() => {'addTask'}}>+</button>*/}
      <Button name={'+'} callBack={addTaskHandler}/>
      {error && <div className="error-message">{error}</div>}
    </div>
    <ul>
      {
        props.tasks.map(t => {
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked;
            props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
          }

          return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
            <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
            <span>{t.title}</span>
            {/*<button onClick={() => {'removeTask'}}>x</button>*/}
            <Button name={'x'} callBack={() => removeTaskHandler(t.taskId)}/>
          </li>
        })
      }
    </ul>
    <div>
      {/*<button className={props.filter === 'all' ? "active-filter" : ""} onClick={() => {}}>All</button>*/}
      <Button name={'All'} callBack={changeFilterAllHandler}/>
      {/*<button className={props.filter === 'active' ? "active-filter" : ""} onClick={() => {}}>Active</button>*/}
      <Button name={'Active'} callBack={changeFilterActiveHandler}/>
      {/*<button className={props.filter === 'completed' ? "active-filter" : ""} onClick={() => {}}>Completed</button>*/}
      <Button name={'Completed'} callBack={changeFilterCompletedHandler}/>
    </div>
    <p></p>
    {
      props.students.map((el) => {
        return (
          <div>{el}</div>
        )
      })
    }
  </div>
}


