import Nav from 'react-bootstrap/Nav';
import '../CSS/Nav.css';
import { useSelector } from 'react-redux';


const LoginNav = () => {

    const {isLoggedin} = useSelector(state=>state.user)

    console.log(isLoggedin)

    const userName = localStorage.getItem('userName');



    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        
    };
    


    return ( 
        <div className='login_nav_container'>
            <Nav style={{
                display:"flex",
                justifyContent : "flex-end",
                width : "90%",
                borderBottom : "1px solid #D3D3D3",
                margin : "auto",
                paddingBottom : "8px",
                paddingTop: "4px",
                alignItems: "center",
            }} >
            <Nav.Item>
                <Nav.Link href='/'>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={handleLogout}>
                    <Nav.Link 
                    href='/'>로그아웃</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link  disabled>
                {userName}님 환영합니다.
            </Nav.Link>
            </Nav.Item>
            
        </Nav>
        </div>
            
        
        
        
    );
}

export default LoginNav;