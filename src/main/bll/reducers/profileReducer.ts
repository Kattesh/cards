import { InferActionsTypes } from "../store"

const initialState = {

}
export type InitialStateType = typeof initialState
const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch(action.type) {
        // case 'some_action_type':
        //     return {
        //         ...state,
        //     }
        default: return state
    }
}
export const profileActions = {
    someAction: () => (
        {type: 'someType'} as const
    ),
}
// export const someThunk = (): BaseThunkType<ProfileActionsTypes> => async (dispatch) => {
//     await dispatch(...)
//     dispatch(...)
// }

export default profileReducer
export type ProfileActionsTypes = InferActionsTypes<typeof profileActions>