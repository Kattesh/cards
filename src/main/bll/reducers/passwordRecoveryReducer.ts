import { InferActionsTypes } from "../store"

const initialState = {

}
export type InitialStateType = typeof initialState
const passwordRecoveryReducer = (state: InitialStateType = initialState, action: PasswordRecoveryActionsTypes): InitialStateType => {
    switch(action.type) {
        // case 'some_action_type':
        //     return {
        //         ...state,
                
        //     }

        default: return state
    }
}

export const passwordRecoveryActions = {
    someAction: () => (
        {type: 'someType'} as const
    ),
}

// export const someThunk = (): BaseThunkType<PasswordRecoveryActionsTypes> => async (dispatch) => {
//     await dispatch(...)
//     dispatch(...)
// }

export default passwordRecoveryReducer
export type PasswordRecoveryActionsTypes = InferActionsTypes<typeof passwordRecoveryActions>