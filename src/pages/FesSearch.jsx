import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FesCard from "../components/FesCard";
import { searchAction } from "../redux/actions/searchAction";
import HomeSearchCard from "../components/HomeSearchCard";

const FesSearch = () => {

    const [searchText, setSearchText] = useState('');
    const [keyWord, setKeyWord] = useState('');
    const [searchOn, setSearchOn] = useState(false);

    const {loading, fesSearchList} = useSelector((state)=> state.search)
    const dispatch = useDispatch();

    const handleSearch = () => {
        setSearchOn(true);
        setKeyWord(searchText)
        dispatch(searchAction.getFesSearch(keyWord))
        
        console.log('Search Text:', searchText);
    };
    useEffect(()=>{
        dispatch(searchAction.getFesSearch(keyWord))
    },[keyWord])
    console.log(fesSearchList)
    return ( 
        <div className="fesSearch_container">
            <h1>축제 검색</h1>
            <div>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="검색어를 입력하세요"
                />
                <button onClick={handleSearch}>검색</button>
            </div>
            {
                searchOn ? <HomeSearchCard item={fesSearchList}/> :<div>
                    
                </div>
            }
            
        </div>
    );
}

export default FesSearch;