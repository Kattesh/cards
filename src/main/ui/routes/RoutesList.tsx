import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Login from '../../../features/auth/Login/Login'
import NewPassword from '../../../features/auth/NewPassword/NewPassword'
import PasswordRecovery from '../../../features/auth/PasswordRecovery/PasswordRecovery'
import Registration from '../../../features/auth/Registration/Registration'
import Profile from '../../../features/profile/Profile'
import {Error404} from "./Error/Error404";
import {RequireAuth} from "../../../features/hoc/RequireAuth";
import {About} from "../../../features/about/About";


export const PATH = {
    login: '/login',
    registration: '/registration',
    profile: '/profile',
    newPassword: '/new-password/:token',
    passwordRecovery: '/password-recovery',
    componentsDemo: '/components-demo',
    error404: '/error404',
    about: '/about',
}

export const RoutesList = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={PATH.login} replace/>}/>
                <Route path={PATH.login} element={<Login/>}/>
                <Route path={PATH.registration} element={<Registration/>}/>
                <Route path={PATH.profile} element={<Profile/>}/>
                <Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
                <Route path={PATH.newPassword} element={<NewPassword/>}/>
                <Route path={PATH.about} element={<About/>}>
                    <Route path='contacts' element={<p>Our contact</p>}/>
                    <Route path='team' element={<p>Our team</p>}/>
                </Route>
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </div>
    );
};