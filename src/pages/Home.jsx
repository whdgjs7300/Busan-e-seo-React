import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { festivalAction } from "../redux/actions/festivalAction";
import BannerSlide from "../components/BannerSlide";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

    const dispatch = useDispatch();
    const {festivalList, loading} = useSelector(state => state.festival )

    useEffect(()=>{
        dispatch(festivalAction.getFestival())
    },[])


    console.log(festivalList)

    
    return ( 
        <div>
            
            <BannerSlide item={festivalList}/>
        </div>
    );
}

export default Home;