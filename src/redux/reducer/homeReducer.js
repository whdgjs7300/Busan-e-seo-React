
let initialState = {
    retaurantCardList : {}, // 홈페이지 resCard state
    festivalBannerList : {},// 홈페이지 fesBanner state
    loading : true,
    

};

function homeReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_HOMEPAGEDATA_SUCCESS" :
            return {...state, 
            loading: false,
            festivalBannerList : payload.festivalBannerList,
            retaurantCardList : payload.retaurantCardList,
            } 
        case "GET_HOMEPAGEDATA_REQUEST" :
            return {...state, loading : true}
        case "GET_HOMEPAGEDATA_FAILURE" : 
            return {...state, loading : false}
        default :
            return {...state};    
    }
}


export default homeReducer;