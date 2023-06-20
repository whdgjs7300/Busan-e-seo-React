let initialState = {
    resDetailList : [],
    loading : true,
    

}

function resdetailReducer(state=initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_RESDETAIL_SUCCESS" :
            return {...state, 
            loading: false,
            resDetailList : payload.resDetailList,     
            } 
        case "GET_RESDETAIL_REQUEST" :
            return {...state, loading : true}
        case "GET_RESDETAIL_FAILURE" : 
            return {...state, loading : false}
        default :
            return {...state};    
    }
}


export default resdetailReducer;