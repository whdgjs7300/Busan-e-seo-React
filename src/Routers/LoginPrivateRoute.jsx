
import { Navigate,Link } from "react-router-dom";
import Login from "../pages/Login";

const LoginPrivateRoute = () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const handleWarning = () => {

        return <Navigate to="/" />;
    };

    return isLoggedIn === 'true' ? handleWarning()    : 
    <Login/>
}

export default LoginPrivateRoute;