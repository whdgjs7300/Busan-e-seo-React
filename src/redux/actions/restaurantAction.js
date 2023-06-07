import axios from 'axios';

const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"

function getRestaurant() {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESTAURANT_REQUEST" })

        const restaurantApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json`)


        let [restaurantList,] = await Promise.all([restaurantApi,])

        dispach({
            type : "GET_RESTAURANT_SUCCESS", 
            payload : {
                restaurantList : restaurantList.data.getFoodKr.item,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_RESTAURANT_FAILURE" })
        }
    }
}


export const restaurantAction = {
    getRestaurant,
}