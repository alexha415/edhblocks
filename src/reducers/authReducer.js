import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_ERROR,
    USER_LOADED,
    LOGOUT_USER,
    LOGIN_FAIL
} from '../actions/types';

const initialState = {
    token: null,
    isAuthenticated: false,
    error: null,
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type){
        case REGISTER_USER :
            {
                return {
                    ...state,
                    isAuthenticated: true,
                    token: action.payload,
                    error: null,
                    loading: false
                }
            }
        case LOGIN_USER :
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
                error: false
            }
        case LOGOUT_USER :
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                error: false
            }
        case USER_LOADED :
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: false
            }
        case AUTH_ERROR :
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOGIN_FAIL :
            return{
                ...state,
                isAuthenticated: false,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}