import { InferActionsTypes } from "../store"

const initialState = {

}
export type InitialStateType = typeof initialState
const newPasswordReducer = (state: InitialStateType = initialState, action: NewPasswordActionsTypes): InitialStateType => {
    switch(action.type) {
        // case 'some_action_type':
        //     return {
        //         ...state,

        //     }

        default: return state
    }
}

export const newPasswordActions = {
    someAction: () => (
        {type: 'someType'} as const
    ),
}

// export const someThunk = (): BaseThunkType<NewPasswordActionsTypes> => async (dispatch) => {
//     await dispatch(...)
//     dispatch(...)
// }

export default newPasswordReducer
export type NewPasswordActionsTypes = InferActionsTypes<typeof newPasswordActions>