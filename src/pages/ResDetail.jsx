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



const ResDetail = () => {
    const {resDetailList, loading, } = useSelector(state=>state.resDetail)
    const dispatch = useDispatch();
    const {id} = useParams();

    const [activeComponent, setActiveComponent] = useState("상세정보");
    const detailNav = ["상세정보", "지도/주변축제", "주변날씨", "이용안내" ]

    useEffect(()=>{        
            dispatch(detailAction.getResDetail(id))
    },[])

    const handleItemClick = (item) => {
        setActiveComponent(item);
    };

    console.log(resDetailList)

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return (  
        <div >
            <div className="detail_title_box">
                <h1>{resDetailList.TITLE}</h1>
                <p>{// split('\n') 함수를 사용하여 줄바꿈 문자('\n')를 기준으로 분할한 후에 인덱스 0을 사용하여 첫 번째 줄만 표시
                !resDetailList.ITEMCNTNTS.split('\n')[0] 
                ? resDetailList.ITEMCNTNTS.split('\n')[1] :
                resDetailList.ITEMCNTNTS.split('\n')[0] 
                }</p>
            </div>
            
            <div className="detail_img_box"
                style={{backgroundImage:
                    'url('+`${resDetailList.MAIN_IMG_NORMAL
                    }`+')', 
                    }}>               
            </div>

                <DetailInfo item={resDetailList}/>
                {
                    detailNav.map((item)=>{
                        return <button style={{margin :"40px 30px"}}
                        onClick={()=>handleItemClick(item)}>{item}</button>
                    })
                }
                {/* 컴포넌트 조건부 렌더링 */}
                {activeComponent === "상세정보" && <DetailInfo2 item={resDetailList} />}
                {activeComponent === "지도/주변축제" && <Map  item={resDetailList}/>}
                {activeComponent === "주변날씨" && <Weather lat={resDetailList.LAT} lon={resDetailList.LNG} item={resDetailList}/>}
                {activeComponent === "이용안내" && <Guide item={resDetailList}/>}
        </div>
    );
}

export default ResDetail;