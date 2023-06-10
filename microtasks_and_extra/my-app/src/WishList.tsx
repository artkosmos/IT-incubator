// Рома 02.06.2023
// Начальная src

// EASY LEVEL
// import React, { ChangeEvent } from 'react'
//
// type TaskType = {
//   id: string
//   title: string
//   isDone: boolean
// }
//
// type PropsType = {
//   title: string
//   tasks: Array<TaskType>
//   removeTask: (taskId: string) => void
//   changeTaskStatus: (taskId: string, isDone: boolean) => void
// }
//
// export function WishList(props: PropsType) {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <ul>
//         {props.tasks.map(t => {
//           const onClickHandler = () => props.removeTask(t.id)
//           const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//             props.changeTaskStatus(t.id, e.currentTarget.checked)
//           }
//
//           return (
//             <li key={t.id} className={t.isDone ? 'is-done' : ''}>
//               <input type="checkbox" checked={t.isDone} onChange={onChangeHandler} />
//               <span>{t.title}</span>
//               <button onClick={onClickHandler}>x</button>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// // MEDIUM LEVEL and HARD LEVEL
//
import React, { ChangeEvent } from 'react'

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

type PropsType = {
  todolistID: string
  title: string
  tasks: Array<TaskType>
  removeTask: (todolistID: string, taskID: string) => void
  changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
}

export function WishList(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>

      <ul>
        {props.tasks.map(t => {
          const onClickHandler = () => props.removeTask(props.todolistID, t.id)
          const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked)
          }

          return (
            <li key={t.id} className={t.isDone ? 'is-done' : ''}>
              <input type="checkbox" onChange={onChangeHandler} checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={onClickHandler}>x</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// Илья 02.06.2023
// Начальная src
//
// import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
// import {OsType, WishesDataPropsType} from "./App";
// import {SuperInput} from "./superComponents/SuperInput";
// import SuperCheckbox from "./superComponents/SuperCheckbox";
// import {SuperSelect} from "./superComponents/SuperSelect";
//
// export type OsTypeForSelect = "Android" | "iOS" | "Select OS"
// export type StatusTypeForSelect = "All" | "Active" | "Completed"
//
// export type WishListPropsType = {
// 	wishes: WishesDataPropsType[]
// 	osFilter: OsType
// 	setOsFilter: (text: OsType) => void
// 	addNewWish: (oS: OsTypeForSelect, newValue: string) => void
// 	removeWish: (id: string) => void
// 	activityFilter : StatusTypeForSelect
// 	setActivityFilter: (filterValue: StatusTypeForSelect) => void
// 	changeWishStatus: (wishId: string, statusValue: boolean) => void
// }
//
// export const WishList = (props: WishListPropsType) => {
// 	const [error, setError] = useState<string | null>(null)
// 	const [oS, setOS] = useState<OsTypeForSelect>("Select OS")
// 	// const onNewItemChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 	// 	props.setNewWishTitle(e.currentTarget.value)
// 	// 	setError(null)
// 	// }
//
// 	const addWishHandler = (newValue: string) => {
// 		if (oS !== "Select OS") {
// 			if (newValue.trim() !== ""){
// 				props.addNewWish(oS, newValue)
//
// 				setOS("Select OS")
//
// 			} else setError("Select item")
// 		} else setError("Select OS")
// 	}
//
// 	const removeWishHandler = (id: string) => {
// 		props.removeWish(id)
// 	}
//
//
//
// 	const onChangeOSHandler = (value: string) => {
// 		setOS(value as OsTypeForSelect)
// 		setError(null)
// 	}
// 	const onChangeFilterOSHandler = (value: string) => {
// 		props.setOsFilter(value as OsType)
// 	}
// 	const onChangeActivityFilterHandler = (value: string) => {
//
// 		props.setActivityFilter(value as StatusTypeForSelect)
//
// 	}
//
// 	const changeStatusHandler = (wishId: string , value: boolean) => {
// 		props.changeWishStatus( wishId, value)
// 	}
//
// 	return (
// 		<div>
// 			<h1>Phones</h1>
// 			<div style={{display: "flex", justifyContent: "space-between"}}>
// 				<div>
// 					<SuperInput callBack={addWishHandler}  setError={setError}/>
// 					{/*<input placeholder={"Enter an item"}*/}
// 					{/*	   value={props.newWishTitle}*/}
// 					{/*	   onChange={onNewItemChangeHandler}*/}
//
//
// 					{/*/>*/}
// 					{ error === "Select item" ?  <div>{error}</div> : "" }
//
// 				</div>
// 				<div>
// 					{/*<select value={oS} onChange={onChangeOSHandler}>*/}
// 					{/*	<option value={"Select OS"}>Select OS</option>*/}
// 					{/*	<option value={"Android"}>Android</option>*/}
// 					{/*	<option value={"iOS"}>iOS</option>*/}
// 					{/*</select>*/}
// 					<SuperSelect options = {[{value: 'Select OS', label: "Select OS"}, {value: 'Android', label: "Android"}, {value: 'iOS', label: "iOS"}]}  callBack={onChangeOSHandler} />
// 					{ error === "Select OS" ?  <div>{error}</div> : "" }
// 				</div>
// 				<div>
// 					{/*<button onClick={addWishHandler}>Add</button>*/}
// 				</div>
// 			</div>
// 			<ul>
// 				{props.wishes.map(el => {
// 					return (
// 						<li key={el.id}>
//
// 							{/*<input type="checkbox" checked={el.checked} onChange={(event)=>changeStatusHandler(el.id, event)}/>*/}
// 							<SuperCheckbox checked={el.checked} callBack={(value)=>{changeStatusHandler(el.id, value)}}		 />
// 							<span> {el.title} </span>
// 							<span> / OS: </span>
// 							<span> {el.OS} </span>
// 							<button onClick={() => removeWishHandler(el.id)}>X</button>
// 						</li>
// 					)
// 				})}
// 			</ul>
// 			<div style={{display: "flex", justifyContent: "space-between"}}>
// 				<div style={{marginRight: "20px"}}>
// 					FILTER BY OS:
// 					{/*<div>*/}
// 					{/*	<select value={props.osFilter} onChange={onChangeFilterOSHandler}>*/}
// 					{/*		<option value={"All"}>All</option>*/}
// 					{/*		<option value={"Android"}>Android</option>*/}
// 					{/*		<option value={"iOS"}>iOS</option>*/}
// 					{/*	</select>*/}
// 					{/*</div>*/}
// 					<SuperSelect options = {[{value: 'All', label: "All"}, {value: 'Android', label: "Android"}, {value: 'iOS', label: "iOS"}]} callBack={onChangeFilterOSHandler} />
// 				</div>
// 				<div>
// 					FILTER BY ACTIVITY:
//
// 					<div>
// 						<SuperSelect options = {[{value: 'All', label: "All"}, {value: 'Active', label: "Active"}, {value: 'Completed', label: "Completed"}]} callBack={onChangeActivityFilterHandler}/>
// 					</div>
//
//
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
