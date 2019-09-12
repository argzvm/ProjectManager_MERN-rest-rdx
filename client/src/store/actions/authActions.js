import axios from 'axios';

export function authUser (token) {
    return (dispatch, getState) => {
        axios.post('/userauth/', {token})
        .then ( (res) => dispatch({ type: 'AUTH_USER', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'AUTH_USER_ERROR', payload: err.response }) );
    }
};

export function loginUser (user) {
    return (dispatch, getState) => {
        axios.post('/users/login/', user)
        .then( (res) => dispatch({ type: 'LOGIN_USER', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'LOGIN_USER_ERROR', payload: err.response }) );
    }
};

export function logoutUser (user) {
    return (dispatch, getState) => {
        axios.post('/users/logout/', user)
        .then ( (res) => dispatch({ type: 'LOGOUT_USER'}) )
        .catch( (err) => dispatch({ type: 'LOGOUT_USER_ERROR', payload: err.response }) );
    }
};



//(err) => console.log(err.response)