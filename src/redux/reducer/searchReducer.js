const initialState = {
    fesSearchList : [],
    loading : true,
};
    
    const searchReducer = (state = initialState, action) => {
        let {type, payload} = action
        switch (type) {
        case 'GET_FESSEARCH_SUCCESS' : 
            return {
                ...state,  
                fesSearchList : payload.fesSearchList,  
                loading : false,
            }
        case "GET_SEARCH_REQUEST" :
                return {...state, loading : true}
        case "GET_SEARCH_FAILURE" : 
                return {...state, loading : false}   
    
        default:
            return state;
        }
    };
    
export default searchReducer;