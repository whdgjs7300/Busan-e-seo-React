
let initialState = {
    festivalList : [],
    fesfilterList : [],
    nearbyfesList : [],
    fesloading : true,
    

};

function festivalReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_FESTIVAL_SUCCESS" :
            return {...state,
                    fesloading: false,
                    festivalList : payload.festivalList,
                }
        case "GET_NEARBYFES_SUCCESS" : 
                return {...state,
                    nearbyfesList : payload.nearbyfesList,
                }
        case "GET_FESTIVAL_FILTER" :
            return {...state,
                fesloading: false,
                fesfilterList : payload.fesfilterList,
                
            }
        case "GET_FESTIVAL_REQUEST" :
            return {...state, fesloading : true}
        case "GET_FESTIVAL_FAILURE" : 
            return {...state, fesloading : false}
        default :
            return {...state};    
    }
}


export default festivalReducer;