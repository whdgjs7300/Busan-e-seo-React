let initialState = {
    fesDetailList : [],
    loading : true,
    

}

function fesdetailReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_FESDETAIL_SUCCESS" :
            return {...state, 
            loading: false,
            fesDetailList : payload.fesDetailList,     
            } 
        case "GET_FESDETAIL_REQUEST" :
            return {...state, loading : true}
        case "GET_FESDETAIL_FAILURE" : 
            return {...state, loading : false}
        default :
            return {...state};    
    }
}


export default fesdetailReducer;