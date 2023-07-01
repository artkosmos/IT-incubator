import React, {MouseEvent} from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useNavigate, useParams, useSearchParams} from "react-router-dom";

const Settings = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  const id = useParams<string>()   // на 24 строке переходим на URL, нв 32 он попадает в параметры с ключом id
  console.log(id)

  const onClickHandler = () => {   // возвращает на необходимый url, кнопка покажется только в settings
    navigate('/profile')    // если поставить число -1 или +1, то будет прыгать по ссылкам на заданное число
  }

  // const onClickHandler2 = (event: MouseEvent<HTMLButtonElement>) => {
  //   setSearchParams({query: event.currentTarget.value})
  // }

  return (
    <>
      <div>Choose parameters you want to change</div>
      <button onClick={onClickHandler}>Return in profile</button>
    </>
  )
}

function App() {
  return (
    <div>
      <NavLink
        className={(params) => params.isActive ? 'activeLink' : ''}
        to={'/'}
        end
      >Start</NavLink>---
      <NavLink
        className={(params) => params.isActive ? 'activeLink' : ''}
        to={'/login'}
        end
      >Login</NavLink>---
      <NavLink
        className={(params) => params.isActive ? 'activeLink' : ''}
        to={'/profile'}
        end
      >Profile</NavLink>---
      <NavLink
        className={(params) => params.isActive ? 'activeLink' : ''}
        to={'/profile/settings'}
        end
      >Profile-Settings</NavLink>---
      <NavLink
        className={(params) => params.isActive ? 'activeLink' : ''}
        to={'/profile/settings/1'}
        end
      >Edit name</NavLink>-
      <NavLink
        className={(params) => params.isActive ? 'activeLink' : ''}
        to={'/profile/settings/2'}
        end
      >Edit surname</NavLink>-
      <NavLink
        className={(params) => params.isActive ? 'activeLink' : ''}
        to={'/profile/settings/3'}
        end
      >Edit address</NavLink>

      <Routes>
        <Route path={'/'} element={<div>Main page<Outlet/></div>}>
          <Route path={'*'} element={<div>Error 404</div>}/>
          <Route index element={<div>Choose category</div>}/>
          <Route path={'login'} element={<div>Write your login</div>}/>
          <Route path={'profile'} element={<div>Here is your profile<Outlet/></div>}>
            <Route path={'settings'} element={<Settings/>}/>
            <Route path={'settings/:id'} element={<Settings/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
