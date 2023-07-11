import axios from 'axios';


const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"

// ID별 축제 디테일 페이지 출력하는 함수

function getFesDetail(id,) {
    return async(dispatch) => {
        try {
            dispatch({type : "GET_FESDETAIL_REQUEST" })

        const fesDetailApi = await axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`);


        const fesDetailList = fesDetailApi.data.getFestivalKr.item[0];

        dispatch({
            type : "GET_FESDETAIL_SUCCESS", 
            payload : {
                fesDetailList : fesDetailList,

            }
        })
        }
        catch(error) {
            dispatch({type : "GET_FESDETAIL_FAILURE" })
        }
    }

}

// ID별 레스토랑 디테일 페이지를 출력하는 함수

function getResDetail(id,) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESDETAIL_REQUEST" })

            const resDetailApi = await axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`);
        
        let resDetailList = resDetailApi.data.getFoodKr.item[0]
            
        dispach({
            type : "GET_RESDETAIL_SUCCESS", 
            payload : {
                resDetailList : resDetailList,
                
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