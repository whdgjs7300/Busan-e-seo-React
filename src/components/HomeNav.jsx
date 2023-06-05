import Nav from 'react-bootstrap/Nav';
import '../CSS/Nav.css';

const HomeNav = () => {

    return ( 
        <Nav>
            <Nav.Item>
                <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href='/login'>로그인</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/signup">회원가입</Nav.Link>
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