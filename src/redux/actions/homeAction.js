import axios from 'axios';

const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"



// Home 페이지 - Banner and Restaurant Card

function getHomeData() {
    return async(dispach) => {
        try {
            dispach({type : "GET_HOMEPAGEDATA_REQUEST" })
        
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
            dispach({type : "GET_HOMEPAGEDATA_FAILURE" })
        }
    }
}


export const homeAction = {
    getHomeData,
}