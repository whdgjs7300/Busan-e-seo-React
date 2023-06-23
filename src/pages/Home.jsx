import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { festivalAction } from "../redux/actions/festivalAction";
import BannerSlide from "../components/BannerSlide";
import ClipLoader from "react-spinners/ClipLoader";
import Busaninfo from "../components/BusanInfo";
import HomeResInfo from "../components/HomeResInfo";
import { restaurantAction } from "../redux/actions/restaurantAction";


const Home = () => {

    const dispatch = useDispatch();
    const {festivalBannerList, loading, retaurantCardList} = useSelector(state => state.festival )
    

    useEffect(()=>{
        dispatch(festivalAction.getFestival());
    },[])




    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            
            <BannerSlide item={festivalBannerList}/>
            <HomeResInfo item={retaurantCardList}/>
            <Busaninfo/>
        </div>
    );
}

export default Home;