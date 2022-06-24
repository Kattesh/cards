import React from 'react'
import {useNavigate} from "react-router-dom";
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";
import s from './Cards.module.css'

const Cards = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    // const goForward=()=>navigate(1)
    // const goHome = () => navigate('/', {replace: true})
    return (
        <div className={s.container}>
            <SuperButton onClick={goBack}>Go back</SuperButton>
            <h2>Cards</h2>
        </div>
    )
}

export default Cards