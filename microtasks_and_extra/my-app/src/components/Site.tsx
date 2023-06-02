import React, {useState} from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes, useParams} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../dataState/dataState";
import {S} from './pages/Page_styles'


export const Site = () => {

  const [windowSize, setWindowSize] = useState()

  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <S.NavWrapper><NavLink to={'/page/0'}>PAGE
            ONE</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={'/page/1'}>PAGE
            TWO</NavLink></S.NavWrapper>
          <S.NavWrapper><NavLink to={'/page/2'}>PAGE
            THREE</NavLink></S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>
            <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
            {/*<Route path={'/page1'} element={<PageOne/>}/>*/}
            {/*<Route path={'/page2'} element={<PageTwo/>}/>*/}
            {/*<Route path={'/page3'} element={<PageThree/>}/>*/}
            <Route path={'/*'} element={<Error404/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}
