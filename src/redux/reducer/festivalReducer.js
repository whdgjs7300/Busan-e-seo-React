
let initialState = {

    festivalBannerList : {},
    festivalList : {},
    fesfilterList : {},
    loading : true,
    

};

function festivalReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_FESTIVAL_SUCCESS" :
            return {...state, 
            loading: false,
            festivalList : payload.festivalList,
            festivalBannerList : payload.festivalBannerList,
            } 
        case "GET_FESTIVAL_FILTER" :
            return {...state,
                loading: false,
                fesfilterList : payload.fesfilterList
            }
        case "GET_FESTIVAL_REQUEST" :
            return {...state, loading : true}
        case "GET_FESTIVAL_FAILURE" : 
            return {...state, loading : false}
        default :
            return {...state};    
    }
}


export default festivalReducer;