import ResDetail from "../pages/ResDetail";
import { Navigate } from "react-router-dom";

const ResPrivateRoute = () => {

    // 리덕스로 상태 관리를 하면 재렌더링 될 때마다 초기화됨

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    return isLoggedIn === 'true' ? <ResDetail/> : 
    <Navigate to='/login'/>
}

export default ResPrivateRoute;