import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY





// festivals 페이지 - 페이지네이션
// 페이지별 데이터를 출력하는 함수

function getFestivalParam(pageNum ) {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const festivalApi = await axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${API_KEY}&numOfRows=10&pageNo=${pageNum}&resultType=json`)


        let festivalList = festivalApi.data.getFestivalKr;

        dispach({
            type : "GET_FESTIVAL_SUCCESS", 
            payload : {
                festivalList : festivalList,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}

// Festivals 페이지 - 필터된 데이터
// 월수 별로 데이터를 필터하는 함수

function getFesFilter(month) {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const fesFiltertApi = await axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=32&resultType=json`)



        let fesfilterList = await fesFiltertApi.data.getFestivalKr.item.
        filter((item)=>item.USAGE_DAY_WEEK_AND_TIME.includes(month)
        || item.USAGE_DAY.includes(month) 
        
        
        )
        dispach({
            type : "GET_FESTIVAL_FILTER", 
            payload : {
                fesfilterList : fesfilterList,

            }
            
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}

// MapCard 컴포넌트 - 주변 축제 필터 
// 디테일 페이지 내 주변 축제를 필터하는 함수

function getNearByFes(item) {
    return async(dispach) => {
        try {
            dispach({type : "GET_FESTIVAL_REQUEST" })

        const NearByFesApi = await axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${API_KEY}&resultType=json&pageNo=1&numOfRows=32`);
        // 맛집 주변 축제 필터 변수
        let nearbyfesList = await NearByFesApi.data.getFestivalKr.item.filter((festival) => festival.GUGUN_NM.includes(item.GUGUN_NM));

            
        dispach({
            type : "GET_NEARBYFES_SUCCESS", 
            payload : {
                nearbyfesList : nearbyfesList,
                
            }
        })
        }
        catch(error) {
            dispach({type : "GET_FESTIVAL_FAILURE" })
        }
    }
}




export const festivalAction = {
    getFestivalParam, getFesFilter, getNearByFes
}