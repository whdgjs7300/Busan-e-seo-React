import { useSelector } from "react-redux";
import FesDetail from "../pages/FesDetail";
import ResDetail from "../pages/ResDetail";
import { Navigate } from "react-router-dom";

const FesPrivateRoute = () => {


    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const handleWarning = () => {
        // 경고 창을 팝업하는 로직을 구현합니다.
        // 예를 들어, window.confirm을 사용하여 경고 메시지를 보여줄 수 있습니다.
        const confirmed = window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?");

        if (confirmed) {
            return <Navigate to='/login' />;
        }
    };

    return isLoggedIn === 'true' ? <FesDetail/> :
    handleWarning()

}

export default FesPrivateRoute;