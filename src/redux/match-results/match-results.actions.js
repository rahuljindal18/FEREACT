import {
    MATCH_RESULT_LOADING,
    MATCH_RESULT_SUCCESS,
    MATCH_RESULT_ERROR
} from './match-results.actiontypes';

const matchResutLoading = () => {
    return {
        type: MATCH_RESULT_LOADING,
        payload: {
            loading: true
        }
    }
}

const matchResultSuccess = (data) => {
    return {
        type: MATCH_RESULT_SUCCESS,
        payload: {
            data
        }
    }
} 

const matchResultError = (error) => {
    return {
        type: MATCH_RESULT_ERROR,
        payload: {
            error
        }
    }
}

export const getMatchResults = (url, fifa_code) => {
    return async dispatch => {
        dispatch(matchResutLoading());

        try{
            const response = await fetch(url+fifa_code);
            const data = await response.json();
            dispatch(matchResultSuccess(data))
        }
        catch(error){
            dispatch(matchResultError(error))
        }
    }
}