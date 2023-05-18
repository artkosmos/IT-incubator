import React from "react";

export type PropsType = {
  tasks: TaskType[]
  children: React.ReactNode
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export const SuperToDoList: React.FC<PropsType> = (props: PropsType) => {
  const {tasks, children, ...restProps} = props

  return (
    <div>
      <ul>
        {tasks.map(item => {
          return (
            <li key={item.id}>
              <span>{item.id}</span>
              <span>{item.title}</span>
              <input type="checkbox" checked={item.isDone}/>
            </li>
          )
        })}
      </ul>
      <div>{children}</div>
    </div>
  )

}