import {loadingReducer} from './reducers/loadingReducer'
import {Action, AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import cardsReducer, {CardsActionsTypes} from "./reducers/cardsReducer";
import profileReducer, {ProfileActionsTypes} from "./reducers/profileReducer";
import passwordRecoveryReducer, {PasswordRecoveryActionsTypes} from "./reducers/passwordRecoveryReducer";
import newPasswordReducer, {NewPasswordActionsTypes} from "./reducers/newPasswordReducer";
import registrationReducer, {RegistrationActionsTypes} from "./reducers/registrationReducer";
import {AppActions, appReducer} from "./reducers/appReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {LoginActionsTypes, loginReducer} from "./reducers/loginReducer";

const rootReducer = combineReducers({
    registrationManage:combineReducers({
        registration: registrationReducer,
        login: loginReducer,
        newPassword: newPasswordReducer,
        passwordRecovery: passwordRecoveryReducer,
    }),
    loading: loadingReducer,
    app: appReducer,
    profile: profileReducer,
    cards: cardsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppDispatch = ThunkDispatch<RootState, unknown, StoreActions>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
type StoreActions = AppActions | LoginActionsTypes | NewPasswordActionsTypes
    | PasswordRecoveryActionsTypes | RegistrationActionsTypes | ProfileActionsTypes | CardsActionsTypes

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

export default store


// @ts-ignore
window.store = store // for dev