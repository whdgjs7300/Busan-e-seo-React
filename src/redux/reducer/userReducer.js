const initialState = {
    name : "",

    
};
    
    const userReducer = (state = initialState, action) => {
        let {type, payload} = action
        switch (type) {
        case 'GET_USER_NAME' : 
            return {
                ...state,     
                name : payload,
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