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



const FesDetail = () => {
    const {fesDetailList, loading,} = useSelector(state=>state.fesDetail)
    const dispatch = useDispatch();
    const {id} = useParams();

    const [activeComponent, setActiveComponent] = useState("상세정보");
    const detailNav = ["상세정보", "지도/주변맛집", "주변날씨", "이용안내" ]

    useEffect(()=>{        
            dispatch(detailAction.getFesDetail(id))        
    },[])

    const handleItemClick = (item) => {
        setActiveComponent(item);
    };

    console.log(fesDetailList)

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return (  
        <div>
            <div className="detail_title_box">
                <h1>{fesDetailList.TITLE}</h1>
                <p>{// split('\n') 함수를 사용하여 줄바꿈 문자('\n')를 기준으로 분할한 후에 인덱스 0을 사용하여 첫 번째 줄만 표시
                !fesDetailList.ITEMCNTNTS.split('\n')[0] 
                ? fesDetailList.ITEMCNTNTS.split('\n')[1] :
                fesDetailList.ITEMCNTNTS.split('\n')[0] 
                }</p>
            </div>
            
            <div className="detail_img_box"
                style={{backgroundImage:
                    'url('+`${fesDetailList.MAIN_IMG_NORMAL
                    }`+')',   
                    }}>               
            </div>

                <DetailInfo item={fesDetailList}/>
                {
                    detailNav.map((item)=>{
                        return <button style={{margin :"40px 30px"}}
                        onClick={()=>handleItemClick(item)}>{item}</button>
                    })
                }
                <div style={{marginBottom : "50px"}}>
                {/* 컴포넌트 조건부 렌더링 */}
                {activeComponent === "상세정보" && <DetailInfo2 item={fesDetailList} />}
                {activeComponent === "지도/주변맛집" && <Map  item={fesDetailList}/>}
                {activeComponent === "주변날씨" && <Weather lat={fesDetailList.LAT} lon={fesDetailList.LNG} item={fesDetailList}/>}
                {activeComponent === "이용안내" && <Guide item={fesDetailList}/>}
                </div>

        </div>
    );
}

export default FesDetail;