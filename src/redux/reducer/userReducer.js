const initialState = {
    isLoggedin: localStorage.getItem('isLoggedIn') === 'true',
    loginLoading : false,
};
    
    const userReducer = (state = initialState, action) => {
        let {type, payload} = action
        switch (type) {
        case 'LOGIN':
            return {
            ...state,
            isLoggedin: payload,
            };
        case 'LOGIN_SUCCESS' : 
            return {
                ...state,     
                loginLoading : false,
            }
        case 'LOGOUT':
            return {
            ...state,
            isLoggedin: false,   
            };
        case "LOGIN_ERROR" : 
            return {
            ...state,
            loginLoading : false,
            }
        default:
            return state;
        }
    };
    
export default userReducer;