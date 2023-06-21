import { useDispatch, useSelector } from "react-redux";
import {restaurantAction} from '../redux/actions/restaurantAction'
import { useEffect,useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ResCard from "../components/ResCard";
import Pagination from "react-js-pagination";
import styled from "styled-components";




const Restaurant = () => {
    const gu = [
        '동래구', '금정구', '기장군', '연제구', '해운대구', '수영구', '남구', '부산진구',
        '북구', '사상구', '서구', '동구', '중구', '영도구', '사하구', '강서구'
                ]
    const dispatch = useDispatch();
    const {restaurantList, loading, resfilterList} = useSelector(state => state.restaurant);
    // 클릭 시 css 코드 수정 state
    const [clickedBtn, setClickedBtn] = useState("");

     // 페이지 네이션 state
    const [pageNum, setPageNum] = useState(1);

    const handlePageChange = (pageNum) => {

    setPageNum(pageNum)
};

    useEffect(()=>{
        if(clickedBtn) {
        dispatch(restaurantAction.getResFilter(clickedBtn))
        }else {
        dispatch(restaurantAction.getRestaurant(pageNum))
    }
    },[ pageNum])
    console.log(resfilterList);

    const handleClick = (item) => {
            if (item === clickedBtn) {
            setClickedBtn("");
            } else {
            setClickedBtn(item);
            // 페이지 수가 1이 이상 일때 필터된 데이터 출력하게 하는 코드
            setPageNum(1);
            dispatch(restaurantAction.getResFilter(item, 1));
            }
        };
        
    


    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return ( 
        <div className="banner_container">
            <div className="res_banner"
        style={{backgroundImage:
            'url('+`https://res.klook.com/image/upload/Mobile/City/g9ynzkjz1nsrvhrjml4j.jpg`+')',   
            }}>
            <div className="gu_btn_box">
            
            {
                gu.map((item)=>{
                    return <div onClick={()=>
                        handleClick(item)
                    } key={item} 
                    className={clickedBtn === item ? "clicked" : ""}
                    >{item}</div>
                    
                    
                })
            }
            </div>

            <div className="card_Box">
                {(clickedBtn && resfilterList.length > 0) ? (
                    resfilterList.map((item, i) => (
                    <div className="card_Box2" key={i}>
                        <ResCard item={item}  />
                    </div>
                    ))
                ) : (
                    restaurantList.item.map((item, i) => (
                    <div className="card_Box2" key={i}>
                        <ResCard item={item}  />
                    </div>
                    ))
                )}
                </div>

        
<PaginationBox>

{ // 필터된 데이터는 페이지 네이션 적용 시키지 않음 : 데이터의 수가 대부분 작음}
clickedBtn && resfilterList.length > 0 ? null : (
    <Pagination
        activePage={pageNum}
        itemsCountPerPage={10}
        totalItemsCount={restaurantList.totalCount}
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

export default Restaurant;

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
    background-color: #0EB4FC;
    border: none;
}
ul.pagination li.active { background-color: #0EB4FC; }
ul.pagination li a:hover,
ul.pagination li a.active { color: #0EB4FC;,
    
    }
`