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


  function removeTask(id: string) {
    /*let filteredTasks = tasks.filter(t => t.id != id);
    setTasks(filteredTasks);*/
  }

  function addTask(title: string) {
    /*let task = {id: v1(), title: title, isDone: false};
    let newTasks = [task, ...tasks];
    setTasks(newTasks);*/
  }

  function changeStatus(taskId: string, isDone: boolean) {
    /*let task = tasks.find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }

    setTasks([...tasks]);*/
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
