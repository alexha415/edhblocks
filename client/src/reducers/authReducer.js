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
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                error: null,
                loading: false
            }
        case LOGIN_USER :
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                error: null
            }
        case LOGOUT_USER :
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                error: null
            }
        case USER_LOADED :
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null
            }
        case AUTH_ERROR :
                console.log(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case LOGIN_FAIL :
                console.log(action.payload);
            return{
                ...state,
                isAuthenticated: false,
                loading: false,
                token: null,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}