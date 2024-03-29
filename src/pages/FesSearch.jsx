import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/actions/searchAction";
import FesSearchCard from "../components/FesSearchCard";

const FesSearch = () => {

    const [searchText, setSearchText] = useState('');
    const [keyWord, setKeyWord] = useState('');
    const [searchOn, setSearchOn] = useState(false);

    const {loading, fesSearchList} = useSelector((state)=> state.search)
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchOn(true);
        setKeyWord(searchText)
        dispatch(searchAction.getFesSearch(keyWord))

    };
    useEffect(()=>{
        dispatch(searchAction.getFesSearch(keyWord))
    },[keyWord])

    return ( 
        <div className="search_container">
            <div className="search_Box">
                <h1>축제 검색</h1>
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
                    searchOn ? <FesSearchCard loading={loading} keyWord={keyWord} item={fesSearchList}/> : null
                }
                
                </div>
            
        </div>
    );
}

export default FesSearch;