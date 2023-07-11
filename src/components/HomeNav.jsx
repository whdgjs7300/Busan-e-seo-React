import Nav from 'react-bootstrap/Nav';
import '../CSS/Nav.css';



const HomeNav = () => {



    

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
                    <Nav.Link href='/login'>로그인</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/signup">회원가입</Nav.Link> 
            </Nav.Item>
            <Nav.Item>

            </Nav.Item>
            
        </Nav>
        
        
        
    );
}

export default HomeNav;