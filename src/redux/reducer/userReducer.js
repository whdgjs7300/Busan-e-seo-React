const initialState = {
    
    loginLoading : false,
};
    
    const userReducer = (state = initialState, action) => {
        let {type, payload} = action
        switch (type) {
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