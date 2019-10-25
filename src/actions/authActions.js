import {
LOGIN_USER,
LOGOUT_USER,
REGISTER_USER,
USER_LOADED,
AUTH_ERROR,
LOGIN_FAIL
} from './types';



export const loadUser = () => async (dispatch) => {
     let token = localStorage.getItem('token');
     if (token) token = JSON.parse(token);
    try {
        const res = await fetch('/api/auth', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authentication": token
            }
        })
        const data = await res.json();

        if(!res.ok) throw Error(data.msg);

        dispatch({
            type: USER_LOADED,
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.message
        })
    }
}

//attempt to load user
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
        console.log(data);
        if(!res.ok) throw Error(data.msg);
        dispatch ({
            type: REGISTER_USER,
            payload: data
        })
        dispatch(loadUser());
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error
        }) 
    }
}
export const logoutUser = () => async dispatch => {
    dispatch({
        type: LOGOUT_USER
    })
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
        if(!res.ok) throw Error(data.msg);
        dispatch ({
            type: LOGIN_USER,
            payload: data
        })

        dispatch(loadUser());

    } catch(err) {
        console.log(err);
        dispatch({
            type: LOGIN_FAIL,
            payload: err
        }) 
    }
}
