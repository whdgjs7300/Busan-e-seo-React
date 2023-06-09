import { useDispatch, useSelector } from "react-redux";
import {restaurantAction} from '../redux/actions/restaurantAction'
import { useEffect,useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ResCard from "../components/ResCard";
import Pagination from "react-js-pagination";



const Restaurant = () => {
    const gu = [
        '동래구', '금정구', '기장군', '연제구', '해운대구', '수영구', '남구', '부산진구',
        '북구', '사상구', '서구', '동구', '중구', '영도구', '사하구', '강서구'
                ]
    const dispatch = useDispatch();
    const {restaurantList, loading} = useSelector(state => state.restaurant);
    // 클릭 시 css 코드 수정 state
    const [clickedBtn, setClickedBtn] = useState("");

     // 페이지 네이션 state
    const [pageNum, setPageNum] = useState(1);
    const handlePageChange = (pageNum) => {

    setPageNum(pageNum)
};

    useEffect(()=>{
        dispatch(restaurantAction.getRestaurant())
    },[])
    console.log(restaurantList);

    const handleClick = (item) => {
            if (item === clickedBtn) {
            setClickedBtn("");
            } else {
            setClickedBtn(item);
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
                {
                    restaurantList.map((item,i)=>{
                        return  <div className="card_Box2">
                            <ResCard key={i} item={item} gu={gu}/>
                        </div>
                        
                        
                        
                    })
                }
                
            </div>

            <div className="Pagination_Box">
    <Pagination
    
    activePage={pageNum}
    itemsCountPerPage={20}
    totalItemsCount={10} 
    pageRangeDisplayed={5}
    onChange={handlePageChange}
    itemClass="page-item"
    linkClass="page-link"
/>
</div>
        </div>
        </div>
        

        
    );
}

export default Restaurant;