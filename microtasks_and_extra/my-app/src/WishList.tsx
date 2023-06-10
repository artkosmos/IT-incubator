import React, { useState } from 'react'
import { OsType, WishesDataType, WishType } from './App'
import { SuperForm } from './superComponents/SuperForm'
import SuperCheckbox from './superComponents/SuperCheckbox'
import { SuperSelect } from './superComponents/SuperSelect'

export type OsTypeForSelect = 'Android' | 'iOS' | 'Select OS'
export type StatusTypeForSelect = 'All' | 'Active' | 'Completed'

export type WishListPropsType = {
  wishes: WishesDataType
  osFilter: OsType
  setOsFilter: (text: OsType) => void
  addNewWish: (wishlistID: string, oS: OsTypeForSelect, newValue: string) => void
  removeWish: (wishlistID: string, id: string) => void
  activityFilter: StatusTypeForSelect
  setActivityFilter: (filterValue: StatusTypeForSelect) => void
  changeWishStatus: (wishlistId: string, wishId: string, statusValue: boolean) => void
  wishlistID: string
  category: string
}

export const WishList = (props: WishListPropsType) => {
  const [error, setError] = useState<string | null>(null)
  const [oS, setOS] = useState<OsTypeForSelect>('Select OS')
  // const onNewItemChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  // 	props.setNewWishTitle(e.currentTarget.value)
  // 	setError(null)
  // }

  const addWishHandler = (newValue: string) => {
    if (oS !== 'Select OS') {
      if (newValue.trim() !== '') {
        props.addNewWish(props.wishlistID, oS, newValue)

        setOS('Select OS')
      } else setError('Select item')
    } else setError('Select OS')
  }

  const removeWishHandler = (id: string) => {
    props.removeWish(props.wishlistID, id)
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
    props.changeWishStatus(props.wishlistID, wishId, value)
  }

  return (
    <div>
      <h1>{props.category}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <SuperForm callBack={addWishHandler} setError={setError} />
          {/*<input placeholder={"Enter an item"}*/}
          {/*	   value={props.newWishTitle}*/}
          {/*	   onChange={onNewItemChangeHandler}*/}

          {/*/>*/}
          {error === 'Select item' ? <div>{error}</div> : ''}
        </div>
        <div>
          {/*<select value={oS} onChange={onChangeOSHandler}>*/}
          {/*	<option value={"Select OS"}>Select OS</option>*/}
          {/*	<option value={"Android"}>Android</option>*/}
          {/*	<option value={"iOS"}>iOS</option>*/}
          {/*</select>*/}
          <SuperSelect
            options={[
              { value: 'Select OS', label: 'Select OS' },
              { value: 'Android', label: 'Android' },
              { value: 'iOS', label: 'iOS' },
            ]}
            callBack={onChangeOSHandler}
          />
          {error === 'Select OS' ? <div>{error}</div> : ''}
        </div>
        <div>{/*<button onClick={addWishHandler}>Add</button>*/}</div>
      </div>
      <ul>
        {props.wishes[props.wishlistID].map((el: WishType, index: number) => {
          return (
            <li key={index}>
              {/*<input type="checkbox" checked={el.checked} onChange={(event)=>changeStatusHandler(el.id, event)}/>*/}
              <SuperCheckbox
                checked={el.checked}
                callBack={value => {
                  changeStatusHandler(el.id, value)
                }}
              />
              <span> {el.title} </span>
              <span> / OS: </span>
              <span> {el.OS} </span>
              <button onClick={() => removeWishHandler(el.id)}>X</button>
            </li>
          )
        })}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginRight: '20px' }}>
          FILTER BY OS:
          {/*<div>*/}
          {/*	<select value={props.osFilter} onChange={onChangeFilterOSHandler}>*/}
          {/*		<option value={"All"}>All</option>*/}
          {/*		<option value={"Android"}>Android</option>*/}
          {/*		<option value={"iOS"}>iOS</option>*/}
          {/*	</select>*/}
          {/*</div>*/}
          <SuperSelect
            options={[
              { value: 'All', label: 'All' },
              { value: 'Android', label: 'Android' },
              { value: 'iOS', label: 'iOS' },
            ]}
            callBack={onChangeFilterOSHandler}
          />
        </div>
        <div>
          FILTER BY ACTIVITY:
          <div>
            <SuperSelect
              options={[
                { value: 'All', label: 'All' },
                { value: 'Active', label: 'Active' },
                { value: 'Completed', label: 'Completed' },
              ]}
              callBack={onChangeActivityFilterHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}