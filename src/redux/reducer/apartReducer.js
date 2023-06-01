
let initialState = {
    
    loading : true,
    

};

function apartReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_MOVIES_SUCCESS" :
            return {...state, 
            loading: false,
            
            } 
        default :
            return {...state};    
    }
}


export default apartReducer;