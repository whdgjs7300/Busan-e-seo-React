import axios from 'axios';

const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"

// Restaurant 페이지

function getRestaurant(pageNum) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESTAURANT_REQUEST" })

        const restaurantApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=${pageNum}&numOfRows=10&resultType=json`)


        let [restaurantList,] = await Promise.all([restaurantApi,])

        dispach({
            type : "GET_RESTAURANT_SUCCESS", 
            payload : {
                restaurantList : restaurantList.data.getFoodKr,

            }
        })
        
        }
        catch(error) {
            dispach({type : "GET_RESTAURANT_FAILURE" })
        }
    }
}

// Restaurant 페이지 - 필터 데이터

function getResFilter(gu,) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESTAURANT_REQUEST" })

        const resFiltertApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=1&numOfRows=271&resultType=json`)



        let [resFilterList] = await Promise.all([resFiltertApi]);

        const filteredList = resFilterList.data.getFoodKr.item.
        filter((item) => item.GUGUN_NM === gu);


        dispach({
            type : "GET_RESTAURANT_FILTER", 
            payload : {
                resfilterList : filteredList

            }
        })
        
        
        }
        catch(error) {
            dispach({type : "GET_RESTAURANT_FAILURE" })
        }
    }
}


export const restaurantAction = {
    getRestaurant, getResFilter,
}