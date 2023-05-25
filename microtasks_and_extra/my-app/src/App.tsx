import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type ToDoListType = {
  id: string
  title: string
  filter: FilterValuesType
}
type TaskType = {
  id: string
  title: string
  isDone: boolean
}
type ManyTasksType = {
  [key: string]: TaskType[]
}

function App() {

  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  let todolistID1 = v1()
  let todolistID2 = v1()

  let [todolists, setTodolists] = useState<ToDoListType[]>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState<ManyTasksType>({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ]
  })


  function removeTask(ToDoListID: string, taskID: string) {
    setTasks({...tasks, [ToDoListID]: tasks[ToDoListID].filter(item => item.id !== taskID)})
  }

  function addTask(ToDoListID: string, title: string) {
    const newTask: TaskType = {id: v1(), title: title, isDone: true}
    setTasks({...tasks, [ToDoListID]: [newTask, ...tasks[ToDoListID]]})
  }

  function changeStatus(ToDoListID: string, taskId: string, isDone: boolean) {
    setTasks({...tasks, [ToDoListID]: tasks[ToDoListID].map(item => item.id === taskId ? {...item, isDone} : item)})
  }

  function changeFilter(ToDoListID: string, filter: FilterValuesType) {
    setTodolists(todolists.map(item => item.id === ToDoListID ? {...item, filter} : item))
  }

  const mappedToDoLists = todolists.map(item => {

    let tasksForTodolist = tasks[item.id]

    if (item.filter === "active") {
      tasksForTodolist = tasks[item.id].filter(element => !element.isDone)
    }
    if (item.filter === "completed") {
      tasksForTodolist = tasks[item.id].filter(element => element.isDone)
    }

    return (
      <Todolist key={item.id}
                title={item.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={item.filter}
                ToDoListID={item.id}
      />
    )
  })

  return (
    <div className="App">
      {mappedToDoLists}
    </div>
  );
}

export default App;
