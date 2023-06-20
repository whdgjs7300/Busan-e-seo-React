import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { detailAction } from "../redux/actions/detailAction";
import DetailInfo from "../components/DetailInfo";
import DetailInfo2 from "../components/DetailInfo2";
import Weather from "../components/Weather";
import Guide from "../components/Guide";
import Map from "../components/Map";
import { restaurantAction } from "../redux/actions/restaurantAction";


const ResDetail = () => {
    const {resDetailList, loading, } = useSelector(state=>state.detail)
    const dispatch = useDispatch();
    const {id} = useParams();

    const [activeComponent, setActiveComponent] = useState("상세정보");
    const detailNav = ["상세정보", "지도/주변축제", "주변날씨", "이용안내" ]

    useEffect(()=>{
        if(activeComponent == "주변날씨") {
            dispatch(detailAction.getFesDetail(id, resDetailList.LAT, resDetailList.LNG))
        }else {
            dispatch(detailAction.getFesDetail(id))
        }
        
        
    },[])

    const handleItemClick = (item) => {
        setActiveComponent(item);
    };

    console.log(resDetailList)

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return (  
        <div>
            
        </div>
    );
}

export default ResDetail;