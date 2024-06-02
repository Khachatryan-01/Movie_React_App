import React, { useContext, useEffect, useState } from 'react'
import style from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context';

const Layout = () => {

    const authCtx = useContext(AuthContext);
    const activeUser = authCtx.activeUser

    useEffect(() => {

        if (!activeUser) {
            window.location.href = '/login';
        }

    }, [activeUser]);

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <div className={style.username}>
                    <img src='/images/person.png' alt='Profile_image' />
                    <span>{activeUser.userName}</span>
                </div>
                <nav className={style.nav}>
                    <NavLink to='/movies'>Movies</NavLink>
                    <NavLink to='/tvSeries'>TV Shows</NavLink>
                </nav>
            </header>
            <main className={style.main}>
                <Outlet />
            </main>
            <footer className={style.footer}></footer>
        </div>
    )
}

export default Layout