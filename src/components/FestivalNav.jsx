import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FestivalNav = () => {

    const [showSublist, setShowSublist] = useState(false);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        setShowSublist(!showSublist);
    };

    return ( 
        <Nav style={{
            display:"flex",
            justifyContent : "space-between",
            padding : "20px",
            paddingLeft : "50px"
            
        }}>
            <div style={{ marginRight : "200px"
                }}>
                
            </div>
            <Nav.Item >
            <Nav.Link style={{
                fontSize:"20px",
                fontWeight : "700"
        }} href='/festivals'>축제정보</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link style={{
                fontSize:"20px",
                fontWeight : "700",
                }} href="/restaurant">부산맛집</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link
            onClick={handleSearchClick}
            style={{
                fontSize:"20px",
                fontWeight : "700"
                }} >
                검색하기
            </Nav.Link >
                    {showSublist && (
                    <ul style={{marginTop : "10px"}}>
                        <li style={{cursor : "pointer", fontWeight : "500", fontSize:"15px",margin: "10px"}}
                        onClick={()=>navigate('/fessearch')}>축제 검색</li>
                        <li style={{cursor : "pointer", fontWeight : "500", fontSize:"15px",margin: "10px"}}
                        onClick={()=>navigate('/ressearch')}>맛집 검색</li>
                    </ul>
                )}
            </Nav.Item>
        </Nav>
    );
}

export default FestivalNav;