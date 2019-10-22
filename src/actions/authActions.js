import {
LOAD_USER,
LOGIN_USER,
LOGOUT_USER,
REGISTER_USER,
AUTH_ERROR
} from './types';

export const loadUser = () => async dispatch => {
    // Load user with token
    let token;
    if(localStorage.getItem('token')){
        token = localStorage.getItem('token');
    }
    try {
        const res = await fetch('/api/auth', {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json"
            },
            token
        })
        const data = await res.json();
        dispatch({
            type: LOAD_USER,
            payload: data
        })    
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error
        })  
    }
}

export const registerUser = (user) => async dispatch => {
    try {
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const data = await res.json();
        dispatch ({
            type: REGISTER_USER,
            payload: data
        })
        loginUser();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error
        }) 
    }
}
export const loginUser = (user) => async dispatch => {
    try {
        const res = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const data = await res.json();
        dispatch ({
            type: LOGIN_USER,
            payload: data
        })
        loadUser();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error
        }) 
    }
}