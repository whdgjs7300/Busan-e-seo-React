import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { detailAction } from "../redux/actions/detailAction";
import DetailInfo from "../components/DetailInfo";
import MoreInfo from "../components/MoreInfo";
import Weather from "../components/Weather";
import Guide from "../components/Guide";
import Map from "../components/Map";


    // 기본 버튼 스타일
    const buttonStyles = {

        padding: "10px 20px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderBottom: "1px solid black",
        fontWeight: "600",
        fontSize : "20px"
    };
    // 클릭 버튼 스타일
    const activeButtonStyles = {
        ...buttonStyles,
        color : "#FFA500",
        borderBottom: "3px solid #FFA500",
        
    };

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



    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return (  
        <div className="detail_container">
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
                <div className="detail_nav_box">
                {
                    detailNav.map((item)=>{
                        return <button key={item} style={activeComponent === item ? activeButtonStyles : buttonStyles}
                        onClick={()=>handleItemClick(item)}>{item}</button>


                    })
                }
                </div>


                <div style={{marginBottom : "50px"}}>
                {/* 컴포넌트 조건부 렌더링 */}
                {activeComponent === "상세정보" && <MoreInfo item={resDetailList} />}
                {activeComponent === "지도/주변축제" && <Map  item={resDetailList}/>}
                {activeComponent === "주변날씨" && <Weather lat={resDetailList.LAT} lon={resDetailList.LNG} item={resDetailList}/>}
                {activeComponent === "이용안내" && <Guide item={resDetailList}/>}
                </div>

        </div>
    );
}

export default ResDetail;