import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { detailAction } from "../redux/actions/detailAction";


const FesDetail = () => {
    const {fesDetailList, loading} = useSelector(state=>state.detail)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(detailAction.getDetail(id))
    },[])

    console.log(fesDetailList)

    if(loading){
        return <ClipLoader color="#ffff" loading={loading} size={150}/>
    }
    return (  
        <div>
            <h1>축제개요</h1>
            <div>
                
            </div>
        </div>
    );
}

export default FesDetail;