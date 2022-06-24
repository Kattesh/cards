import React from 'react'
import {useNavigate} from "react-router-dom";
import SuperButton from "../../main/ui/common/SuperButton/SuperButton";
import s from './Profile.module.css'

const Profile = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    // const goForward=()=>navigate(1)
    // const goHome = () => navigate('/', {replace: true})
    return (
        <div className={s.container}>
            <SuperButton onClick={goBack}>Go back</SuperButton>
           <h2>Profile</h2>
        </div>
    )
}

export default Profile