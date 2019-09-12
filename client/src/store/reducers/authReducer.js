const initState = {
    user: null,
    token: null
};

function authReducer (state = initState, action) {
    switch (action.type) {
        
        case 'AUTH_USER':
            //console.log('AUTH_USER', action.payload);        
            return { ...state, user: action.payload.user, token: action.payload.token };

        case 'LOGIN_USER':
            //console.log('LOGIN_USER');
            localStorage.setItem('token', action.payload.token);
            window.location.reload();
            return state;

        case 'LOGOUT_USER':
            //console.log('LOGOUT_USER');
            localStorage.removeItem('token');
            window.location.reload();
            return state;

        default:
            return state;
    }
}

export default authReducer;
