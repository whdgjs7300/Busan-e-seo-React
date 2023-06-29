import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { festivalAction } from "../redux/actions/festivalAction";
import BannerSlide from "../components/BannerSlide";
import ClipLoader from "react-spinners/ClipLoader";
import Busaninfo from "../components/BusanInfo";

import { homeAction } from "../redux/actions/homeAction";
import HomeSearchCard from "../components/HomeSearchCard";


const Home = () => {

    const dispatch = useDispatch();
    const {festivalBannerList, loading, retaurantCardList} = useSelector(state => state.home )


    useEffect(()=>{
        dispatch(homeAction.getHomeData());
    },[])



    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            
            <BannerSlide item={festivalBannerList}/>
            <HomeSearchCard item={retaurantCardList}/>
            <Busaninfo/>
        </div>
    );
}

export default Home;