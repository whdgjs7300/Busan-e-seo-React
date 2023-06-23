import axios from 'axios';

const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"

// Home 페이지 - Banner and Restaurant Card

function getFestival() {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })
        
        const festivalBannerListApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json`)
        const retaurantCardListApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${KEY}&pageNo=1&numOfRows=10&resultType=json`)

        let [festivalBannerList, retaurantCardList] = await Promise.all([festivalBannerListApi, retaurantCardListApi])

        dispach({
            type : "GET_HOMEPAGEDATA_SUCCESS", 
            payload : {
                festivalBannerList : festivalBannerList.data.getFestivalKr.item,
                retaurantCardList : retaurantCardList.data.getFoodKr.item,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}

// festivals 페이지 - 페이지네이션

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

// Festivals 페이지 - 필터된 데이터

function getFesFilter(month) {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const fesFiltertApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=32&resultType=json`)

        let [fesfilterList] = await Promise.all([fesFiltertApi]);

        const filteredList = fesfilterList.data.getFestivalKr.item.
        filter((item)=>item.USAGE_DAY_WEEK_AND_TIME.includes(month) 
        || item.USAGE_DAY.includes(month)
        
        )
            


        dispach({
            type : "GET_FESTIVAL_FILTER", 
            payload : {
                fesfilterList : filteredList

            }
        })
        
        
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}



export const festivalAction = {
    getFestival, getFestivalParam, getFesFilter,
}