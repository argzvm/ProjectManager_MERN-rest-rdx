
import axios from 'axios';

export function signupUser (user) {
    return (dispatch, getState) => {
        axios.post('/users/signup/', user)
        .then ( (res) => dispatch({ type: 'SIGNUP_USER', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'SIGNUP_USER_ERROR', payload: err.response }) );
    }
};

export function updateUser (user) {
    return (dispatch, getState) => {
        axios.post('/users/update/', user)
        .then ( (res) => dispatch({ type: 'UPDATE_USER', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'UPDATE_USER_ERROR', payload: err.response }) );
    }
};

export function deleteUser (user) {
    return (dispatch, getState) => {
        axios.post('/users/delete/', user)
        .then ( (res) => dispatch({ type: 'DELETE_USER', payload: res.data }) )
        .catch( (err) => dispatch({ type: 'DELETE_USER_ERROR', payload: err.response }) );
    }
};
