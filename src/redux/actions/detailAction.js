import axios from 'axios';


const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"



function getFesDetail(id,) {
    return async(dispatch) => {
        try {
            dispatch({type : "GET_FESDETAIL_REQUEST" })

        const fesDetailApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`);


        let [fesDetailList, ] = await Promise.all([
            fesDetailApi, ])

        dispatch({
            type : "GET_FESDETAIL_SUCCESS", 
            payload : {
                fesDetailList : fesDetailList.data.getFestivalKr.item[0],

            }
        })
        }
        catch(error) {
            dispatch({type : "GET_FESDETAIL_FAILURE" })
        }
    }

}


function getResDetail(id,) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESDETAIL_REQUEST" })

            const resDetailApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`);
        
        let [resDetailList, ] = await Promise.all([
            resDetailApi, ])
            
        dispach({
            type : "GET_RESDETAIL_SUCCESS", 
            payload : {
                resDetailList : resDetailList.data.getFoodKr.item[0],
                
            }
        })
        }
        catch(error) {
            dispach({type : "GET_RESDETAIL_FAILURE" })
        }
    }

}

export const detailAction = {
    getFesDetail, getResDetail,
}