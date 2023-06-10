import axios from 'axios';

const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"


function getFestival() {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const festivalApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json`)


        let [festivalList,] = await Promise.all([festivalApi,])

        dispach({
            type : "GET_FESTIVAL_SUCCESS", 
            payload : {
                festivalList : festivalList.data.getFestivalKr.item,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}


function getFestivalParam(pageNum) {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const festivalApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=${pageNum}&numOfRows=10&resultType=json`)


        let [festivalList,] = await Promise.all([festivalApi,])

        dispach({
            type : "GET_FESTIVAL_SUCCESS", 
            payload : {
                festivalList : festivalList.data.getFestivalKr,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}



export const festivalAction = {
    getFestival,getFestivalParam,
}