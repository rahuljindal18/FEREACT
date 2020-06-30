import {
    SWITCH_TO_LIGHT_THEME,
    SWITCH_TO_DARK_THEME,
    SWITCH_TO_USER_THEME
} from './ui-theme.actiontypes';

import { THEMES } from '../../utils/themes';

export const switchLight = () => {
    return {
        type: SWITCH_TO_LIGHT_THEME,
        payload: 'light'
    }
}

export const switchDark = () => {
    return {
        type: SWITCH_TO_DARK_THEME,
        payload: 'dark'
    }
}

export const switchUserTheme = () => {
    return {
        type: SWITCH_TO_USER_THEME,
        payload: 'user-theme'
    }
}

export const toggleTheme = (currentTheme) => {
    return dispatch => {
        if(THEMES['user-theme']){
            if(currentTheme === 'user-theme'){
                dispatch(switchDark())
            }
            else if(currentTheme === 'dark'){
                dispatch(switchUserTheme())
            }
        }
        else{
            if(currentTheme === 'light'){
                dispatch(switchDark())
            }
            else {
                dispatch(switchLight())
            }
        }
    }
}