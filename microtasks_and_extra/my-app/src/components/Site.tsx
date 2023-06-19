import React from 'react';
import styles from './Site.module.css'
import {Error404} from "./pages/Error404";
import {Route, Routes, Navigate, NavLink} from "react-router-dom";
import {Page} from "./pages/Page";
import {dataState} from "./dataState/dataState";
export const Site = () => {

    const activeClass = (isActive:boolean) => isActive ? styles.active : styles.navLink

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink
                        to={'/page/0'}
                        className={({isActive}) => activeClass(isActive)}
                    >Page One
                    </NavLink></div>
                    <div><NavLink
                        to={'/page/1'}
                        className={({isActive}) => activeClass(isActive)}
                    >Page Two
                    </NavLink></div>
                    <div><NavLink
                        to={'/page/2'}
                        className={({isActive}) => activeClass(isActive)}
                    >Page Three
                    </NavLink></div>
                </div>
                <div className={styles.content}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                    <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                    <Route path={'/*'} element={<Error404/>}/>
                </Routes>
                </div>
            </div>
        </div>
    );
};