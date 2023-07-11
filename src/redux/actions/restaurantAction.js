import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY

// Restaurant 페이지 - 페이지 네이션
// 페이지별 데이터 출력 함수

function getRestaurantParam(pageNum) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESTAURANT_REQUEST" })

        const restaurantApi = await axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${API_KEY}&resultType=json&pageNo=${pageNum}&numOfRows=10`)


        let restaurantList = restaurantApi.data.getFoodKr

        dispach({
            type : "GET_RESTAURANT_SUCCESS", 
            payload : {
                restaurantList : restaurantList,

            }
        })
        
        }
        catch(error) {
            dispach({type : "GET_RESTAURANT_FAILURE" })
        }
    }
}

// Restaurant 페이지 - 필터 데이터
// 구별 필터된 데이터 출력 함수

function getResFilter(gu) {
    return async(dispach) => {
        try {
            dispach({type : "GET_RESTAURANT_REQUEST" })

        const resFiltertApi = await axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=271&resultType=json`)

        let resFilterList = await resFiltertApi.data.getFoodKr.item.
        filter((item) => item.GUGUN_NM === gu);
        
        dispach({
            type : "GET_RESTAURANT_FILTER", 
            payload : {
                resfilterList : resFilterList,

            }
        })
        
        
        }
        catch(error) {
            dispach({type : "GET_RESTAURANT_FAILURE" })
        }
    }
}

// MapCard 컴포넌트 - 주변 맛집 필터 
// 디테일 페이지 축제 주변 맛집 데이터 출력 함수

function getNearByRes(item) {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const NearByResApi = await axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=271&resultType=json`);

        let nearbyresList = await NearByResApi.data.getFoodKr.item.filter((restaurant) => restaurant.GUGUN_NM.includes(item.GUGUN_NM));
        
            
        dispach({
            type : "GET_NEARBYRES_SUCCESS", 
            payload : {
                nearbyresList : nearbyresList,
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