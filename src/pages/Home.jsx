import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { festivalAction } from "../redux/actions/festivalAction";
import BannerSlide from "../components/BannerSlide";
import ClipLoader from "react-spinners/ClipLoader";
import Busaninfo from "../components/BusanInfo";

import { homeAction } from "../redux/actions/homeAction";
import HomeCard from "../components/HomeCard";


const Home = () => {

    const dispatch = useDispatch();
    const {festivalBannerList, loading, retaurantCardList} = useSelector(state => state.home )
    const {name} = useSelector(state=>state.user)

    useEffect(()=>{
        dispatch(homeAction.getHomeData());
    },[])

    console.log(name)

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            
            <BannerSlide item={festivalBannerList}/>
            <HomeCard item={retaurantCardList}/>
            <Busaninfo/>
        </div>
    );
}

export default Home;