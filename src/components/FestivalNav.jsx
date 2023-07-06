import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/Nav.css';

const FestivalNav = () => {

    // 햄버거 토글 버튼
    const [showMenu, setShowMenu] = useState(false);
    // 사이드 nav 토글 버튼
    const [showSublist, setShowSublist] = useState(false);
    const navigate = useNavigate();

    const handleShowClick = () => {
        setShowMenu(!showMenu);
    }

    const handleSearchClick = () => {
        setShowSublist(!showSublist);
    };

    return ( 
        <Navbar  bg="light" variant='light' expand="lg">
            
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{marginLeft:"auto", marginRight: "50px"}}
            >
            
            <Nav.Item style={{padding:"5px 30px", marginLeft:"70px"}} >
            <Nav.Link style={{
                fontSize:"20px",
                fontWeight : "700",
                textAlign:"center",
        }} href='/festivals'>축제정보</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{padding:"5px 30px", marginLeft:"70px"}}>
            <Nav.Link style={{
                fontSize:"20px",
                fontWeight : "700",
                textAlign:"center",
                }} href="/restaurant">부산맛집</Nav.Link>
            </Nav.Item>
            <Nav.Item style={{padding:"5px 30px", marginLeft:"70px"}}>
            <Nav.Link
            onClick={handleSearchClick}
            style={{
                fontSize:"20px",
                fontWeight : "700",
                textAlign:"center",
                }} >
                검색하기
            </Nav.Link >
                    {showSublist && (
                    <ul style={{marginTop : "10px", textAlign:"center", listStyleType:"none"}}>
                        <li style={{cursor : "pointer", fontWeight : "500", fontSize:"15px",margin: "10px"}}
                        onClick={()=>navigate('/fessearch')}>축제 검색</li>
                        <li style={{cursor : "pointer", fontWeight : "500", fontSize:"15px",margin: "10px"}}
                        onClick={()=>navigate('/ressearch')}>맛집 검색</li>
                    </ul>
                )}
            </Nav.Item>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        

    );
}

export default FestivalNav;