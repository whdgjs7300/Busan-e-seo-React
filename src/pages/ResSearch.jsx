import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FesCard from "../components/FesCard";
import { searchAction } from "../redux/actions/searchAction";
import ClipLoader from "react-spinners/ClipLoader";
import SearchCard from "../components/FesSearchCard";
import ResSearchCard from "../components/ResSearchCard";

const ResSearch = () => {

    const [searchText, setSearchText] = useState('');
    const [keyWord, setKeyWord] = useState('');
    const [searchOn, setSearchOn] = useState(false);

    const {loading, resSearchList} = useSelector((state)=> state.search)
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchOn(true);
        setKeyWord(searchText)
        dispatch(searchAction.getResSearch(keyWord))
        
        console.log('Search Text:', searchText);
    };

    

    useEffect(()=>{
        dispatch(searchAction.getResSearch(keyWord))
    },[keyWord])
    console.log(resSearchList)
    return ( 
        <div className="search_container">
            <div className="search_Box">
                <h1>맛집 검색</h1>
                <form className="search_form"
                onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="검색어를 입력하세요"

                    />
                    <button >검색</button>
                </form>
                
                {
                    searchOn ? <ResSearchCard loading={loading} keyWord={keyWord} item={resSearchList}/> :<div >
                        
                    </div>
                }
                </div>
            
            
        </div>
    );
}

export default ResSearch;