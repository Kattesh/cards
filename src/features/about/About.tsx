import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import s from './Aboute.module.css'
import React from "react";
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";

export const About = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <div style={{margin: '20px', color: ' rgb(20, 74, 103)'}}>
            <h1>About us</h1>
            <SuperButton onClick={goBack}>Go back</SuperButton>
            <ul>
                <li className={s.item}><NavLink to='contacts' className={({isActive}) => (isActive ? s.activeLink : '')}>Our Contacts</NavLink></li>
                <li className={s.item}><NavLink to='team' className={({isActive}) => (isActive ? s.activeLink : '')}>Our Team</NavLink></li>
            </ul>
            <Outlet/>

        </div>
    )

}