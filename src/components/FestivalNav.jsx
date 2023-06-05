import Nav from 'react-bootstrap/Nav';


const FestivalNav = () => {

    return ( 
        <Nav style={{
            display:"flex",
            justifyContent : "space-between",
            padding : "20px",
            paddingLeft : "50px"
            
        }}>
            <div>
                아이콘들어갈 자리
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
            <Nav.Link style={{
                fontSize:"20px",
                fontWeight : "700"
                }} >
                커뮤니티
            </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default FestivalNav;