
let initialState = {
    restaurantList : {},
    resfilterList : {},
    nearbyresList : [],
    resloading : true,
    

};

function festivalReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_RESTAURANT_SUCCESS" :
            return {...state, 
            resloading: false,
            restaurantList : payload.restaurantList,
            } 
        case "GET_RESTAURANT_FILTER" :
            return {...state,
                resloading: false,
                resfilterList : payload.resfilterList
            }
        case "GET_NEARBYRES_SUCCESS" :
            return {...state, 
            resloading: false,
            nearbyresList : payload.nearbyresList,
    
            } 
        case "GET_RESTAURANT_REQUEST" :
            return {...state, resloading : true}
        case "GET_RESTAURANT_FAILURE" : 
            return {...state, resloading : false}   

        default :
            return {...state};    
    }
}


export default festivalReducer;