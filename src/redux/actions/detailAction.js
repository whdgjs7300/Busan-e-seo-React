import axios from 'axios';


const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"

function getDetail(id) {
    return async(dispach) => {
        try {
            dispach({type : "GET_DETAIL_REQUEST" })

        const fesDetailApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${id}`)


        let [fesDetailList,] = await Promise.all([fesDetailApi,])

        dispach({
            type : "GET_DETAIL_SUCCESS", 
            payload : {
                fesDetailList : fesDetailList.data.getFestivalKr.item,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_DETAIL_FAILURE" })
        }
    }
}

export const detailAction = {
    getDetail,
}