import { useDispatch, useSelector } from "react-redux";
import {festivalAction} from "../redux/actions/festivalAction"
import { useEffect,useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "react-js-pagination";
import FesCard from "../components/FesCard";



const Festivals = () => {
    const month = [
        "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
                ]
    const dispatch = useDispatch();
    const {festivalList, loading} = useSelector(state => state.festival);
    // 클릭 시 css 코드 수정 state
    const [clickedBtn, setClickedBtn] = useState("");

     // 페이지 네이션 state
    const [pageNum, setPageNum] = useState(1);
    const handlePageChange = (pageNum) => {

    setPageNum(pageNum)
};

    useEffect(()=>{
        dispatch(festivalAction.getFestival())
    },[])
    console.log(festivalList);

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
            'url('+`https://www.travelmap.co.kr/contents/files/board/news/2019/10/title_3194_1571035026.jpg`+')',   
            }}>
            <div className="gu_btn_box">
            
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
                    festivalList.map((item,i)=>{
                        return  <div className="card_Box2">
                            <FesCard key={i} item={item} month={month}/>
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

export default Festivals;