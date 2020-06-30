import {
    MATCH_RESULT_LOADING,
    MATCH_RESULT_SUCCESS,
    MATCH_RESULT_ERROR
} from './match-results.actiontypes';

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const matchResultsReducer = (state=initialState, action) => {
    switch(action.type){
        case MATCH_RESULT_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        case MATCH_RESULT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }
        case MATCH_RESULT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }   
        default:
            return state;         
    }
}