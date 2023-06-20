import {TaskType} from "../Todolist";
import {v1} from "uuid";

// редюсер функция принимает два параметра, сами данные и объект экшн
export const taskReducer = (state: TaskType[], action: KingType): TaskType[] => {
  switch (action.type) {
    case 'REMOVE TASK':
      return state.filter(item => item.id !== action.payload.id)
    case "ADD TASK":
      let task = { id: v1(), title: action.payload.title, isDone: false };
      return [...state, task]
    default:
      return state
  }
}

type KingType = RemoveTaskACType | AddTaskACType // и потом накидываем типизации через |

// протипизировали только выходное значение по взрослому :)
type RemoveTaskACType = ReturnType<typeof removeTaskAC>

// экшн криэйтор возвращает обьект
export const removeTaskAC = (id: string) => {
  return {
    type: 'REMOVE TASK', // свойтво type будет всегда
    payload: {id}
  } as const // чтобы типизация была не просто строка,
  // которая не защищает, а строго определенное значение для case, без этого также будут ошибки
}

type AddTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (title: string) => {
  return {
    type: 'ADD TASK',
    payload: {title}
  } as const
}