import FesDetail from "../pages/FesDetail";
import { Navigate } from "react-router-dom";

const FesPrivateRoute = () => {


    const isLoggedIn = localStorage.getItem('isLoggedIn');

    
    
    return isLoggedIn === 'true' ? <FesDetail/> : 
    <Navigate to='/login'/>



}

export default FesPrivateRoute;