import store from "../../hw10/bll/store";

const initState = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ChangeThemeType): typeof initState => { // fix any
    switch (action.type) {

        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id: id}) // fix any

export type ChangeThemeType = {
    type: 'SET_THEME_ID',
    id: number
}

export type RootState = ReturnType<typeof store.getState>;