
const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState
export const loginReducer = (state: InitialStateType = initialState, action: LoginActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

    //
    export const setIsLoggedInAC = (value: boolean) =>
        ({type: 'login/SET-IS-LOGGED-IN', value} as const)


// export const someThunk = (): BaseThunkType<LoginActionsTypes> => async (dispatch) => {
//     await dispatch(...)
//     dispatch(...)
// }

export type LoginActionsTypes = ReturnType<typeof setIsLoggedInAC>