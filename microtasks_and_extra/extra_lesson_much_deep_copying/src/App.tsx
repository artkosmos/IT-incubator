import React, {useEffect, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

type ObjectTypeWithToDoListID = ObjectType & {
  todolistID: string
}

type ObjectType = {
  title: string
  filter: FilterValuesType
  tasks: Array<TasksType>
  students: Array<string>
}
export type TasksType = {
  taskId: string
  title: string
  isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";


function App() {

  const data: ObjectType[] = [
    {
      title: "What to learn",
      filter: "all",
      tasks: [
        {taskId: v1(), title: "HTML&CSS", isDone: true},
        {taskId: v1(), title: "JS", isDone: false}
      ],
      students: [
        'Rick Kane',
        'Finnlay Bentley',
        'Samia North',
        'Isaac Morton',
        'Lily-Ann Clifford',
        'Thalia Park',
        'Sapphire Cruz',
        'Cieran Vazquez',
        'Anya Estes',
        'Dominika Field',
        'Rosanna Chung',
        'Safiyah Davey',
        'Ryley Beasley',
        'Kalvin Trejo',
        'Evie-Mae Farrell',
        'Juliet Valencia',
        'Astrid Austin',
        'Lyle Montgomery',
        'Nisha Mora',
        'Kylie Callaghan',
        'Star Wilks',
        'Marissa Colley',
        'Asa Fuller',
        'Leigh Kemp',
        'Avleen Dawson',
        'Sammy Bonilla',
        'Acacia Becker',
        'Coral Shepherd',
        'Melina Molina',
        'Kiran Bailey',
        'Clara Escobar',
        'Alexandru Horn',
        'Brandon-Lee Mercado',
        'Elouise Weston',
        'King Long',
        'Kerri Searle',
        'Kanye Hamer',
        'Elwood Benitez',
        'Mikail Whitaker',
        'Bobby Hardy',
        'Talha Ferry',
        'Priscilla Landry',
        'Olivia-Grace Cain',
        'Kiaan Wallace',
        'Wesley Padilla90',
        'Ella-Grace Wooten91',
        'Kaif Molloy92',
        'Kamal Broadhurst93',
        'Bianca Ferrell94',
        'Micheal Talbot95',
      ]
    },
    {
      title: "What to do",
      filter: "all",
      tasks: [
        {taskId: v1(), title: "React", isDone: true},
        {taskId: v1(), title: "Angular", isDone: false}
      ],
      students: [
        'Jago Wormald1',
        'Saul Milne2',
        'Aariz Hester3',
        'Dion Reeve4',
        'Anisa Ortega5',
        'Blade Cisneros6',
        'Malaikah Phelps7',
        'Zeeshan Gallagher8',
        'Isobella Vo9',
        'Rizwan Mathis10',
        'Menaal Leach11',
        'Kian Walton12',
        'Orion Lamb13',
        'Faizah Huynh14',
        'Crystal Vaughan15',
        'Vivien Hickman16',
        'Stuart Lu17',
        'Karol Davison18',
        'Dario Burns19',
        'Chloe Rich20',
        'Martyna Felix',
        'Nida Glass',
        'Maeve Miles',
        'Hasnain Puckett',
        'Ayman Cano',
        'Safwan Perry',
        'Fox Kelly',
        'Louise Barlow',
        'Malaki Mcgill',
        'Leanna Cline',
        'Willard Hodge',
        'Amelia Dorsey',
        'Kiah Porter',
        'Jeanne Daly',
        'Mohsin Armstrong',
        'Laurie Rangel',
        'Princess Tierney',
        'Kasim Kendall',
        'Darryl Cope',
        'Elysha Ray',
        'Liyana Harris',
        'Kashif Blackburn',
        'Atif Zimmerman',
        'Sila Hartley',
        'Ralphie Hebert',
      ]
    }
  ]

  useEffect(() => {
    setTodo(data.map((element) => ({...element, todolistID: v1()})))
  }, [])


  const [todo, setTodo] = useState<Array<ObjectTypeWithToDoListID>>([])

  function removeTask(taskID: string, todolistId: string) {
    setTodo(todo.map(item =>
      item.todolistID === todolistId
        ? {...item, tasks: item.tasks.filter(el => el.taskId != taskID)}
        : item))
  }

  function addTask(title: string, todolistId: string) {
    let newTask: TasksType = {taskId: v1(), title, isDone: false}
    setTodo(todo.map(item =>
      item.todolistID === todolistId
        ? {...item, tasks: [newTask, ...item.tasks]}
        : item))
  }

  function changeStatus(taskID: string, isDone: boolean, todolistId: string) {
    setTodo(todo.map(item =>
      item.todolistID === todolistId
        ? {...item, tasks: item.tasks.map(el => el.taskId === taskID ? {...el, isDone} : el)}
        : item))
  }

  function changeFilter(value: FilterValuesType, todolistId: string) {
    setTodo(todo.map(item =>
      item.todolistID === todolistId
        ? {...item, filter: value}
        : item))
  }

  function removeTodolist(todolistID: string) {
    setTodo(todo.filter(item => item.todolistID !== todolistID))
  }

  return (
    <div className="App">
      {
        todo.map((tl, index) => {
          let allTodolistTasks = tl.tasks
          let tasksForTodolist = allTodolistTasks

          if (tl.filter === "active") {
            tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
          }
          if (tl.filter === "completed") {
            tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
          }

          return <Todolist
            key={index}
            todolistID={tl.todolistID}
            title={tl.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tl.filter}
            removeTodolist={removeTodolist}
          />
        })
      }

    </div>
  );
}

export default App;
