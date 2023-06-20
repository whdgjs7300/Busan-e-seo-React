import axios from 'axios';


const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"



function getFesDetail(id, lat, lon) {
    return async(dispach) => {
        try {
            dispach({type : "GET_DETAIL_REQUEST" })

        const fesDetailApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`)
        const resDetailApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`)

        let [fesDetailList, resDetailList] = await Promise.all([
            fesDetailApi, resDetailApi])
            console.log(resDetailList)
        dispach({
            type : "GET_DETAIL_SUCCESS", 
            payload : {
                fesDetailList : fesDetailList.data.getFestivalKr.item[0],
                resDetailList : resDetailList.data.getFoodKr
            }
        })
        }
        catch(error) {
            dispach({type : "GET_DETAIL_FAILURE" })
        }
    }

}


function getResDetail(id,) {
    return async(dispach) => {
        try {
            dispach({type : "GET_DETAIL_REQUEST" })

        const fesDetailApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`)
        
        let [fesDetailList, ] = await Promise.all([
            fesDetailApi, ])
            
        dispach({
            type : "GET_DETAIL_SUCCESS", 
            payload : {
                fesDetailList : fesDetailList.data.getFestivalKr.item[0],
                
            }
        })
        }
        catch(error) {
            dispach({type : "GET_DETAIL_FAILURE" })
        }
    }

}

export const detailAction = {
    getFesDetail,
}