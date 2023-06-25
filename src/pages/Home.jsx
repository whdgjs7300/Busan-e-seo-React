import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { festivalAction } from "../redux/actions/festivalAction";
import BannerSlide from "../components/BannerSlide";
import ClipLoader from "react-spinners/ClipLoader";
import Busaninfo from "../components/BusanInfo";
import HomeResInfo from "../components/HomeResInfo";

const Home = () => {

    const dispatch = useDispatch();
    const {festivalBannerList, loading, retaurantCardList} = useSelector(state => state.festival )
    const {isLoggedin} = useSelector(state=>state.user)

    useEffect(()=>{
        dispatch(festivalAction.getFestival());
    },[])

    console.log(isLoggedin)


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