import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {OsType, WishesDataPropsType} from "./App";
import {SuperInput} from "./SuperComponents/SuperInput";
import {SuperCheckBox} from "./SuperComponents/SuperCheckBox";
import {SuperSelect} from "./SuperComponents/SuperSelect";

export type OsTypeForSelect = "Android" | "iOS" | "Select OS"
export type StatusTypeForSelect = "All" | "Active" | "Completed"

export type WishListPropsType = {
  wishes: WishesDataPropsType[]
  osFilter: OsType
  setOsFilter: (text: OsType) => void
  addNewWish: (oS: OsTypeForSelect, newValue: string) => void
  removeWish: (id: string) => void
  activityFilter: StatusTypeForSelect
  setActivityFilter: (filterValue: StatusTypeForSelect) => void
  changeWishStatus: (wishId: string, statusValue: boolean) => void
}

export const WishList = (props: WishListPropsType) => {
  const [error, setError] = useState<string | null>(null)
  const [oS, setOS] = useState<OsTypeForSelect>("Select OS")

  /*const onNewItemChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setNewWishTitle(e.currentTarget.value)
    setError(null)
  }*/

  const activityOptions = [
    {value: 'All', label: "All"},
    {value: 'Active', label: "Active"},
    {value: 'Completed', label: "Completed"}
  ]

  const systemOptionsFilter = [
    {value: 'All', label: "All"},
    {value: 'Android', label: "Android"},
    {value: 'iOS', label: "iOS"}
  ]

  const systemOptions = [
    {value: 'Select OS', label: "Select OS"},
    {value: 'Android', label: "Android"},
    {value: 'iOS', label: "iOS"}
  ]

  const addWishHandler = (newValue: string) => {
    if (oS !== "Select OS") {
      if (newValue.trim()) {
        props.addNewWish(oS, newValue)
        setOS("Select OS")

      } else setError("Select item")
    } else setError("Select OS")
  }

  const removeWishHandler = (id: string) => {
    props.removeWish(id)
  }
  const onChangeOSHandler = (value: string) => {
    setOS(value as OsTypeForSelect)
    setError(null)
  }
  const onChangeFilterOSHandler = (value: string) => {
    props.setOsFilter(value as OsType)
  }
  const onChangeActivityFilterHandler = (value: string) => {
    props.setActivityFilter(value as StatusTypeForSelect)
  }

  const changeStatusHandler = (wishId: string, value: boolean) => {
    props.changeWishStatus(wishId, value)
  }

  return (
    <div>
      <h1>Phones</h1>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div>
          <SuperInput
            callBack={addWishHandler}
            setError={setError}
          />
          {/*<input placeholder={"Enter an item"}
                 value={props.newWishTitle}
                 onChange={onNewItemChangeHandler}
                 onKeyDown={onKeyDownHandler}

          />*/}
          {error === "Select item" ? <div>{error}</div> : ""}

        </div>
        <div>
          {/*<select value={oS} onChange={onChangeOSHandler}>
            <option value={"Select OS"}>Select OS</option>
            <option value={"Android"}>Android</option>
            <option value={"iOS"}>iOS</option>
          </select>*/}
          <SuperSelect
            callBack={(value)=>onChangeOSHandler(value)}
            options={systemOptions}
          />
          {error === "Select OS" ? <div>{error}</div> : ""}
        </div>
        <div>
          {/*<button onClick={addWishHandler}>Add</button>*/}
        </div>
      </div>
      <ul>
        {props.wishes.map(el => {
          return (
            <li key={el.id}>
              <SuperCheckBox
                checked={el.checked}
                callBack={(value)=>changeStatusHandler(el.id, value)}/>
              {/*<input type="checkbox" checked={el.checked} onChange={(event) => changeStatusHandler(el.id, event)}/>*/}
              <span> {el.title} </span>
              <span> / OS: </span>
              <span> {el.OS} </span>
              <button onClick={() => removeWishHandler(el.id)}>X</button>
            </li>
          )
        })}
      </ul>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{marginRight: "20px"}}>
          FILTER BY OS:
          <div>
            {/*<select value={props.osFilter} onChange={onChangeFilterOSHandler}>
              <option value={"All"}>All</option>
              <option value={"Android"}>Android</option>
              <option value={"iOS"}>iOS</option>
            </select>*/}
            <SuperSelect
              callBack={(value)=>onChangeFilterOSHandler(value)}
              options={systemOptionsFilter}
            />
          </div>
        </div>
        <div>
          FILTER BY ACTIVITY:
          <div>
            {/*<select value={props.activityFilter} onChange={onChangeActivityFilterHandler}>
              <option value={"All"}>All</option>
              <option value={"Active"}>Active</option>
              <option value={"Completed"}>Completed</option>
            </select>*/}
            <SuperSelect
              callBack={(value)=>onChangeActivityFilterHandler(value)}
              options={activityOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}