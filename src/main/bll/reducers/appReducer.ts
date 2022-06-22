

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
    isLoggedIn: true
}

export const appReducer = (state: InitialStateType = initialState, action: AppActions): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-IS-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}

export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppInitializedAC = (isInitialized: boolean) => ({
    type: 'APP/SET-IS-INITIALIZED',
    isInitialized
} as const)

// export const appActions = {
//     setAppErrorAC : (error: string | null) => ({type: 'APP/SET-ERROR', error} as const),
//     setAppStatusAC : (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const),
//     setAppInitializedAC : (isInitialized: boolean) => ({type: 'APP/SET-IS-INITIALIZED', isInitialized} as const)
// }

// export const initializeAppTC = (): AppThunk => (dispatch) => {
//     authAPI.me().then(res => {
//         if (res.data.resultCode === 0) {
//             dispatch(setIsLoggedInAC(true))
//             dispatch(setAppStatusAC('succeeded'));
//         } else {
//             handleServerAppError(res.data, dispatch);
//         }
//     })
//         .catch((error) => {
//             handleServerNetworkError(error, dispatch)
//         })
//         .finally(() => {
//             dispatch(setAppInitializedAC(true))
//         })
// }
// //



// export const someThunk = (): BaseThunkType<AppActionsTypes> => async (dispatch) => {
//     await dispatch(...)
//     dispatch(...)
// }

export type AppActions =
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppInitializedAC>

// export type AppActions = InferActionsTypes<typeof appActions>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = typeof initialState
export default appReducer