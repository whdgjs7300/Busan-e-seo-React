import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { festivalAction } from "../redux/actions/festivalAction";
import BannerSlide from "../components/BannerSlide";
import ClipLoader from "react-spinners/ClipLoader";
import Busaninfo from "../components/BusanInfo";

const Home = () => {

    const dispatch = useDispatch();
    const {festivalList, loading} = useSelector(state => state.festival )

    useEffect(()=>{
        dispatch(festivalAction.getFestival())
    },[])


    console.log(festivalList)

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div>
            
            <BannerSlide item={festivalList}/>
            
            <Busaninfo/>
        </div>
    );
}

export default Home;