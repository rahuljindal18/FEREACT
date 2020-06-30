import {
    SWITCH_TO_LIGHT_THEME,
    SWITCH_TO_DARK_THEME,
    SWITCH_TO_USER_THEME
} from './ui-theme.actiontypes';

const initialState = {
    currentTheme: 'light'
}

export const uiThemeReducer = (state=initialState, action) => {
    switch(action.type){
        case SWITCH_TO_LIGHT_THEME:
            return {
                ...state,
                currentTheme: action.payload
            }
        
        case SWITCH_TO_DARK_THEME:
        return {
            ...state,
            currentTheme: action.payload
        } 
            
        case SWITCH_TO_USER_THEME:
        return {
            ...state,
            currentTheme: action.payload
        }
        
        default:
            return state;
    }
}