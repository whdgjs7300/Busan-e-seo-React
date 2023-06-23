import axios from 'axios';

const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"



// Restaurant 페이지 - 페이지 네이션

function getRestaurantParam(pageNum, numOfRows) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESTAURANT_REQUEST" })

        const restaurantApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&resultType=json&
        ${pageNum ? `&pageNo=${pageNum}&` : "&pageNo=1&"}
        ${numOfRows ? `&numOfRows=${numOfRows}` : "&numOfRows=10"}`)


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

// MapCard 컴포넌트 - 주변 맛집 필터 

function getNearByRes(item) {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const NearByResApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=1&numOfRows=271&resultType=json`);

        let [nearbyresList] = await Promise.all([NearByResApi,])
        // 맛집 주변 맛집 필터 변수

        let nearByRes = nearbyresList.data.getFoodKr.item.filter((restaurant) => restaurant.GUGUN_NM.includes(item.GUGUN_NM));
            
        dispach({
            type : "GET_NEARBYRES_SUCCESS", 
            payload : {
                nearbyresList : nearByRes,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}


export const restaurantAction = {
    getRestaurantParam, getResFilter, getNearByRes,
}