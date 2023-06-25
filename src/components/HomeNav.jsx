import Nav from 'react-bootstrap/Nav';
import '../CSS/Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomeNav = () => {

    const {isLoggedin} = useSelector(state=>state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(isLoggedin)

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    const handleLogout = () => {
        dispatch({type : "LOGOUT"});
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/')
    };



    return ( 
        
            <Nav style={{
                display:"flex",
                justifyContent : "flex-end",
                width : "90%",
                borderBottom : "1px solid #D3D3D3",
                margin : "auto",
                paddingBottom : "8px",
                paddingTop: "4px"
            }}>
            <Nav.Item>
                <Nav.Link href='/'>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                {
                    isLoggedin ? <Nav.Link onClick={handleLogout}
                    >로그아웃</Nav.Link> : 
                    <Nav.Link href='/login'>로그인</Nav.Link>
                }
            </Nav.Item>
            <Nav.Item>
                {
                    !isLoggedin ? <Nav.Link href="/signup">회원가입</Nav.Link> : 
                    null
                }
            
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
            </Nav.Item>
            
        </Nav>
        
        
        
    );
}

export default HomeNav;