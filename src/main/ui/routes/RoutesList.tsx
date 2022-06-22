import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../../features/auth/Login/Login'
import NewPassword from '../../../features/auth/NewPassword/NewPassword'
import PasswordRecovery from '../../../features/auth/PasswordRecovery/PasswordRecovery'
import Registration from '../../../features/auth/Registration/Registration'
import Profile from '../../../features/profile/Profile'
import {Error404} from "./Error/Error404";


export const PATH = {
	login: '/login',
	registration: '/registration',
	profile: '/profile',
	newPassword: '/new-password/:token',
	passwordRecovery: '/password-recovery',
	componentsDemo: '/components-demo',
	error404: '//error404',
}

export const RoutesList = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Navigate to={PATH.login}/>}/>
				<Route path={PATH.login} element={<Login/>}/>
				<Route path={PATH.registration} element={<Registration/>}/>
				<Route path={PATH.profile} element={<Profile/>}/>
				<Route path={PATH.passwordRecovery} element={<PasswordRecovery/>}/>
				<Route path={PATH.newPassword} element={<NewPassword/>}/>
				<Route path={PATH.error404} element={<Error404/>}/>
				<Route path='*' element={<Navigate to={PATH.error404}/>}/>
			</Routes>
		</div>
	);
};