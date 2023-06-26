
import { Navigate,Link } from "react-router-dom";
import Login from "../pages/Login";

const LoginPrivateRoute = () => {

    // 리덕스로 상태 관리를 하면 재렌더링 될 때마다 초기화됨

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const handleWarning = () => {

        return <Navigate to="/" />;
    };

    return isLoggedIn === 'true' ? handleWarning()    : 
    <Login/>
}

export default LoginPrivateRoute;