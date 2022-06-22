import { BaseThunkType, InferActionsTypes } from "../store"

const initialState = {

}
export type InitialStateType = typeof initialState
const registrationReducer = (state: InitialStateType = initialState, action: RegistrationActionsTypes): InitialStateType => {
    switch(action.type) {
        // case 'some_action_type':
        //     return {
        //         ...state,

        //     }
        default: return state
    }
}
export const registrationActions = {
    someAction: () => (
        {type: 'someType'} as const
    ),
}

// export const someThunk = (): BaseThunkType<RegistrationActionsTypes> => async (dispatch) => {
//     await dispatch(...)
//     dispatch(...)
// }
export default registrationReducer
export type RegistrationActionsTypes = InferActionsTypes<typeof registrationActions>