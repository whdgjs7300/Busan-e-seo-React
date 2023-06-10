import { useParams } from "react-router-dom";


const Detail = () => {
    const {id} = useParams();
    console.log(id)
    return (  
        <div>
            <h1>축제개요</h1>
        </div>
    );
}

export default Detail;