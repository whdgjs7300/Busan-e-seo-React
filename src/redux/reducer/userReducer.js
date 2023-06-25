const initialState = {
    isLoggedin: false,
};
    
    const userReducer = (state = initialState, action) => {
        let {type, payload} = action
        switch (type) {
        case 'LOGIN':
            return {
            ...state,
            isLoggedin: true,
            };
        case 'LOGOUT':
            return {
            ...state,
            isLoggedin: false,
            };
        default:
            return state;
        }
    };
    
export default userReducer;