import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAction } from "../redux/actions/restaurantAction";
import { festivalAction } from "../redux/actions/festivalAction";


const MapCard = ({item}) => {
    const dispatch = useDispatch();
    const {festivalList, } = useSelector((state)=>state.festival)
    const {restaurantList } = useSelector((state)=>state.restaurant)


    useEffect(()=>{
        // 디테일 페이지가 fesDetailList로 구성되어 있다면
        if(item.USAGE_AMOUNT) {
            dispatch(restaurantAction.getRestaurantParam(1, 271, item))
        }else {
            dispatch(festivalAction.getFestivalParam(1, 32, item))
        }
    },[])
    console.log(festivalList.item);
    console.log(restaurantList.item)
    console.log(item)
    return ( 
        <div>
            {  
                        item.USAGE_AMOUNT ? ( // item : fesDetailList
                        <>
                        </>
                        )
                        :( // item : resDetailList
                        <>

                        </>
                        )
                        
            }
        </div>
    );
}

export default MapCard;