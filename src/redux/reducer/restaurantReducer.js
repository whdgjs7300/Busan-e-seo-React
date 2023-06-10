
let initialState = {

    restaurantList : {},
    resfilterList : {},
    loading : true,
    

};

function festivalReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_RESTAURANT_SUCCESS" :
            return {...state, 
            loading: false,
            restaurantList : payload.restaurantList,
    
            } 
        case "GET_RESTAURANT_FILTER" :
            return {...state,
                resfilterList : payload.resfilterList
            }
        case "GET_RESTAURANT_REQUEST" :
            return {...state, loading : true}
        case "GET_RESTAURANT_FAILURE" : 
            return {...state, loading : false}   

        default :
            return {...state};    
    }
}


export default festivalReducer;