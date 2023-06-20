
let initialState = {
    fesDetailList : [],
    resDetailList : {},
    weatherList : {},
    loading : true,
    

};

function detailReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_DETAIL_SUCCESS" :
            return {...state, 
            loading: false,
            fesDetailList : payload.fesDetailList,
            resDetailList : payload.resDetailList,
            weatherList : payload.weatherList,
            } 
        case "GET_DETAIL_REQUEST" :
            return {...state, loading : true}
        case "GET_DETAIL_FAILURE" : 
            return {...state, loading : false}
        default :
            return {...state};    
    }
}


export default detailReducer;