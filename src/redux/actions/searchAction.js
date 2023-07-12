import axios from 'axios';

const API_KEY=process.env.REACT_APP_API_KEY

// 키워드별 축제를 필터해주는 함수

function getFesSearch(keyWord) {
    return async(dispach) => {
        try {
            dispach({type : "GET_SEARCH_REQUEST" })

        const fesSearchApi = axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=32&resultType=json`);

        let [fesSearchList] = await Promise.all([fesSearchApi,])

        let fesKeyWord = fesSearchList.data.getFestivalKr.item.filter((item) => item.TITLE.includes(keyWord));
            
        dispach({
            type : "GET_FESSEARCH_SUCCESS", 
            payload : {
                fesSearchList : fesKeyWord,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_SEARCH_FAILURE" })
        }
    }
}

// 키워드 별 레스토랑을 필터 해주는 함수

function getResSearch(keyWord) {
    return async(dispach) => {
        try {
            dispach({type : "GET_SEARCH_REQUEST" })

        const resSearchApi = await axios.get(`https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${API_KEY}&pageNo=1&numOfRows=271&resultType=json`)

        let resSearchList = await resSearchApi.data.getFoodKr.item.filter((item) => item.TITLE.includes(keyWord));

            
        dispach({
            type : "GET_RESSEARCH_SUCCESS", 
            payload : {
                resSearchList : resSearchList,
            }
        })
        }
        catch(error) {
            dispach({type : "GET_SEARCH_FAILURE" })
        }
    }
}

export const searchAction = {
    getFesSearch, getResSearch
}