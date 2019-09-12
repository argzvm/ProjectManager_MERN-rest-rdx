
import axios from 'axios';

// fetch public projects
export function fetchSOutStoreData() {
    return function (dispatch) {
        axios.get('/soutstoredata/')
        .then( (res) => dispatch({ type: 'FETCH_PUBLIC_DATA', payload: res.data }))
        .catch( (err) => dispatch({ type: 'FETCH_PUBLIC_DATA_ERROR', payload: err.response }) );
    }
}

// fetch users private projects
export function fetchSInStoreData() {
    return function (dispatch, getState) {
        let data = getState().auth.user;
        axios.post('/sinstoredata/', data)
        .then( (res) => dispatch({ type: 'FETCH_PRIVATE_DATA', payload: res.data }))
        .catch( (err) => dispatch({ type: 'FETCH_PRIVATE_DATA_ERROR', payload: err }) );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// export function fetchSOutStoreData() {
//     return function (dispatch) {
//         fetch('/soutstoredata/')
//         .then( (res) => res.json() )
//         .then( (data) => dispatch({ type: 'FETCH_DATA', payload: data }))
//         .catch( (err) => console.error(err) );
//     }
// }

// export function fetchSInStoreData() {
//     return function (dispatch) {
//         fetch('/sinstoredata/')
//         .then( (res) => res.json() )
//         .then( (data) => dispatch({ type: 'FETCH_DATA', payload: data }))
//         .catch( (err) => console.error(err) );
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// export function fetchSOutStoreData() {
//     return function (dispatch) {
//         fetch('/soutstoredata/')
//         .then( (res) => res.json() )
//         .then( (data) => dispatch(
//             (dispatch) => {
//                 dispatch({ type: 'FETCH_USERS', payload: {users: data.users} });
//                 dispatch({ type: 'FETCH_PROJECTS', payload: {projects: data.projects} });
//                 dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: data.notifications} });
//             }
//         )).catch( (err) => console.error(err) );
//     }
// }

// export function fetchSInStoreData() {
//     return function (dispatch) {
//         fetch('/sinstoredata/')
//         .then( (res) => res.json() )
//         .then( (data) => dispatch(
//             (dispatch) => {
//                 dispatch({ type: 'FETCH_USERS', payload: {users: data.users} });
//                 dispatch({ type: 'FETCH_PROJECTS', payload: {projects: data.projects} });
//                 dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: data.notifications} });
//             }
//         )).catch( (err) => console.error(err) );
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// export function fetchSOutStoreData() {
//     return async function (dispatch) {
//         let res = await fetch('/soutstoredata/')
//         let data = await res.json();
//         dispatch(
//             (dispatch) => {
//                 dispatch({ type: 'FETCH_USERS', payload: {users: data.users} });
//                 dispatch({ type: 'FETCH_PROJECTS', payload: {projects: data.projects} });
//                 dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: data.notifications} });
//             }
//         )
//     }
// }

// export function fetchSInStoreData() {
//     return async function (dispatch) {
//         let res = await fetch('/sinstoredata/')
//         let data = await res.json();
//         dispatch(
//             (dispatch) => {
//                 dispatch({ type: 'FETCH_USERS', payload: {users: data.users} });
//                 dispatch({ type: 'FETCH_PROJECTS', payload: {projects: data.projects} });
//                 dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: data.notifications} });
//             }
//         )
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// import axios from 'axios';

// export const fetchSOutStoreData = () => {
//     return (dispatch) => {
//         axios.get('/soutstoredata/')
//         .then(
//             (res) => dispatch(
//                 (dispatch) => {
//                     dispatch({ type: 'FETCH_USERS', payload: {users: res.data.users} });
//                     dispatch({ type: 'FETCH_PROJECTS', payload: {projects: res.data.projects} });
//                     dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: res.data.notifications} });
//                 }
//             )
//         ).catch( (err) => console.error(err) );
//     }
// };

// export const fetchSInStoreData = () => {
//     return (dispatch) => {
//         axios.get('/sinstoredata/')
//         .then(
//             (res) => dispatch(
//                 (dispatch) => {
//                     dispatch({ type: 'FETCH_USERS', payload: {users: res.data.users} });
//                     dispatch({ type: 'FETCH_PROJECTS', payload: {projects: res.data.projects} });
//                     dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: res.data.notifications} });
//                 }
//             )
//         ).catch( (err) => console.error(err) );
//     }
// };

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// export const fetchSOutStoreData = () => {
//     return (dispatch) => {
//         axios.get('/soutstoredata/')
//         .then( (res) => dispatch( actionCreator(res.data) ) )
//         .catch( (err) => console.error(err) );
//     }
// };

// function actionCreator(payload) {
//     return dispatch => {
//         dispatch( dispatch({ type: 'FETCH_USERS', payload: {users: payload.users} }) );
//         dispatch( dispatch({ type: 'FETCH_PROJECTS', payload: {projects: payload.projects} }) );
//         dispatch( dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: payload.notifications} }) );
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// function actionCreator(payload) {
//     return dispatch => {
//         dispatch(action1(payload));
//         dispatch(action2(payload));
//         dispatch(action3(payload));
//     }
// }

// function action1(payload) {
//     //console.log('chack action1', payload.users);
//     return dispatch => dispatch({ type: 'FETCH_USERS', payload: {users: payload.users} });
// }
// function action2(payload) {
//     //console.log('chack action2', payload.projects);
//     return dispatch => dispatch({ type: 'FETCH_PROJECTS', payload: {projects: payload.projects} });
// }
// function action3(payload) {
//     //console.log('chack action3', payload.notifications);
//     return dispatch => dispatch({ type: 'FETCH_NOTIFICATIONS', payload: {notifications: payload.notifications} });
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
