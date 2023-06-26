import { useDispatch, useSelector } from "react-redux";
import {festivalAction} from "../redux/actions/festivalAction"
import { useEffect,useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "react-js-pagination";
import FesCard from "../components/FesCard";
import styled from "styled-components";




const Festivals = () => {
    const month = [
        "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
                ]
    const dispatch = useDispatch();
    const {festivalList,fesfilterList, loading} = useSelector(state => state.festival);
    // 클릭 시 css 코드 수정 state
    const [clickedBtn, setClickedBtn] = useState("");


     // 페이지 네이션 state
    const [pageNum, setPageNum] = useState(1);
    const handlePageChange = (pageNum) => {

    setPageNum(pageNum)
};
    

    useEffect(()=>{
        if(clickedBtn){
            dispatch(festivalAction.getFesFilter(clickedBtn))
        } else {// 클릭을 하던 안하던 항상 똑같은 데이터를 출력함 
            dispatch(festivalAction.getFestivalParam(pageNum));
        }
        
    },[pageNum, clickedBtn])
    
    // console.log(festivalList?.item[2].USAGE_DAY_WEEK_AND_TIME.split("")[6])
   
    const handleClick = (item) => {
            if (item === clickedBtn) {
            setClickedBtn("");
            } else {
            setClickedBtn(item);
            // 클릭 이벤트 후 dispatch로 필터데이터 호출
            dispatch(festivalAction.getFesFilter(item))
            }
        };
        console.log(fesfilterList)

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div className="banner_container">
            <div 
            className="res_banner"
        style={{backgroundImage:
            'url('+`https://cdn.topstarnews.net/news/photo/first/201710/img_319449_1.jpg`+')',   
            
            }}>
            <div className="month_btn_box">
            
            {
                month.map((item)=>{
                    return <div onClick={()=>
                        handleClick(item)
                    } key={item} 
                    className={clickedBtn === item ? "clicked" : ""}
                    >{item}</div>
                    
                    
                })
            }
            </div>
            
            <div className="card_Box">
                {
                    clickedBtn && fesfilterList.length >= 0 ? (
                    fesfilterList.map((item, i) => (
                        <div className="card_Box2" key={i}>
                            <FesCard item={item} />
                        </div>
                    
                    )) 
                ) : festivalList.item && festivalList.item.length > 0 ? (
                    festivalList.item.map((item, i) => (
                        <div className="card_Box2" key={i}>
                            <FesCard item={item} />
                        </div>
                    ))
                )  : null }
            </div>
                
    <PaginationBox>
    { // 필터된 데이터는 페이지 네이션 적용 시키지 않음 : 데이터의 수가 대부분 작음}
    clickedBtn && fesfilterList.length >= 0 ? null : (
    <Pagination
        activePage={pageNum}
        itemsCountPerPage={10}
        totalItemsCount={festivalList.totalCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
    />
)}
    </PaginationBox>
    
</div>
        </div>
        
        
        

        
    );
}

export default Festivals;

const PaginationBox = styled.div`
.pagination { display: flex; justify-content: center; margin-top: 40px;}
ul { list-style: none; 
    padding : 10px 15px;
    magin-bottom : 15px;
    
}
ul.pagination li {
    display: inline-block;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px; 
    font-weight : 700;
}
ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
ul.pagination li a { text-decoration: none; color: black; font-size: 1rem; }
ul.pagination li.active a { color: white; 
    background-color: #FFA500;
    border: none;
}
ul.pagination li.active { background-color: #FFA500; }
ul.pagination li a:hover,
ul.pagination li a.active { color: #FFA500;,
    
    }
`