import axios from 'axios';

const KEY ="9V%2BSdKNbzQD7oIQPHdDdlKZz0%2BPj1gnzDGKeS%2B8GWk2LHpSkDx5Ig%2F7u6wKopPZEf9brLck%2Bz3z81NapmasU%2Fg%3D%3D"




function getFesSearch(keyWord) {
    return async(dispach) => {
        try {
            dispach({type : "GET_SEARCH_REQUEST" })

        const fesSearchApi = axios.get(`http://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${KEY}&pageNo=1&numOfRows=32&resultType=json`);

        let [fesSearchList] = await Promise.all([fesSearchApi,])
        console.log(fesSearchList)
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

export const searchAction = {
    getFesSearch,
}