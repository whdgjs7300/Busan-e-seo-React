import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAction } from "../redux/actions/restaurantAction";
import { festivalAction } from "../redux/actions/festivalAction";


const MapCard = ({item}) => {
    const dispatch = useDispatch();
    const {nearbyfesList} = useSelector((state)=>state.festival)
    const {nearbyresList } = useSelector((state)=>state.restaurant)


    useEffect(()=>{
        // 디테일 페이지가 fesDetailList로 구성되어 있다면
        if(item.USAGE_AMOUNT) {
            dispatch(restaurantAction.getNearByRes(item))
        }else {
            dispatch(festivalAction.getNearByFes(item))
        }
    },[])

    console.log(item)
    console.log(nearbyresList,nearbyfesList)
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