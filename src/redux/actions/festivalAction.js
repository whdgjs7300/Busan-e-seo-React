import api from "../api";

const KEY = '9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D';


function getFestival() {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const festivalApi = api.get(`?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json`)


        let [festivalList,] = await Promise.all([festivalApi,])

        dispach({
            type : "GET_FESTIVAL_SUCCESS", 
            payload : {
                festivalList : festivalList.data,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}



export const festivalAction = {
    getFestival,
}