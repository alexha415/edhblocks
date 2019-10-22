import {
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    AUTH_ERROR,
    LOGOUT_USER
} from '../actions/types';

const initialState = {
    token: '',
    loggedIn: false,
    error: null,
    loading: true
};

export default (state = initialState, action) => {
    switch(action.type){
        case REGISTER_USER :
            {
                return {
                    ...state,
                    loggedIn: true,
                    token: action.payload,
                    error: null,
                    loading: false
                }
            }
        case LOGIN_USER :
            localStorage.setItem('token', JSON.stringify(action.payload));
            return {
                ...state,
                loggedIn: true,
                token: action.payload,
                error: false
            }
        case AUTH_ERROR :
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}