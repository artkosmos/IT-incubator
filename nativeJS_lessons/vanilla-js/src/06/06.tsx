import React, {MouseEvent} from "react";

export const User = () => {

  const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
    alert('user has been deleted')
  }

  const saveUser = () => {
    alert('user has been saved')
  }

  const onNameChanged = () => {
    console.log('name has been changed')
  }

  const focusLostHandler = () => {
    console.log('focus has been lost')
  }

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Artem</textarea>
      <button onClick={deleteUser}>delete</button>
      <button onClick={saveUser}>save</button>
    </div>
  )
}