import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY



// Home 페이지 - Banner and Restaurant Card

function getHomeData() {
    return async(dispach) => {
        try {
            dispach({type : "GET_HOMEPAGEDATA_REQUEST" })
        
        const festivalBannerListApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&resultType=json`)
        const retaurantCardListApi = axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&resultType=json`)

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