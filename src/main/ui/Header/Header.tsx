import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "../routes/RoutesList";

// const setActive=({isActive}) => (isActive ? s.activeLink : '')

export function Header() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.profile} className={({isActive}) => (isActive ? s.activeLink : '')}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.login} className={({isActive}) => (isActive ? s.activeLink : '')}>Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.registration}
                         className={({isActive}) => (isActive ? s.activeLink : '')}>Registration</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.newPassword}
                         className={({isActive}) => (isActive ? s.activeLink : '')}>NewPassword</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.passwordRecovery}
                         className={({isActive}) => (isActive ? s.activeLink : '')}>PasswordRecovery</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.about}
                         className={({isActive}) => (isActive ? s.activeLink : '')}>About</NavLink>
            </div>
        </nav>
    )
}

