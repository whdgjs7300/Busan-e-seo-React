import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { festivalAction } from "../redux/actions/festivalAction";

const Home = () => {
    const dispatch = useDispatch();
    const {festivalList,} = useSelector(state => state.festival )

    useEffect(()=>{
        dispatch(festivalAction.getFestival())
    },[])
    console.log(festivalList)
    return ( 
        <div>
            홈페이지
        </div>
    );
}

export default Home;