import { useDispatch, useSelector } from "react-redux";
import {restaurantAction} from '../redux/actions/restaurantAction'
import { useEffect } from "react";

const Restaurant = () => {
    const gu = [
        '동래구', '금정구', '기장군', '연제구', '해운대구', '수영구', '남구', '부산진구',
        '북구', '사상구', '서구', '동구', '중구', '영도구', '사하구', '강서구'
                ]
    const dispatch = useDispatch();
    const {restaurantList, loading} = useSelector(state => state.restaurant);

    useEffect(()=>{
        dispatch(restaurantAction.getRestaurant())
    },[])
    console.log(restaurantList);
    return ( 
        

        <div>
            구별, 날짜별, 부산 맛집 서비스 개발
            {
                gu.map((item)=>{
                    return <div>
                        <button>{item}</button>
                    </div>
                    
                })
            }
        </div>
    );
}

export default Restaurant;