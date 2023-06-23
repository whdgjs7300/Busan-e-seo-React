import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const HomeResInfo = ({item}) => {
    console.log(item)

    return (
        <div>
            <h2>최고의 휴양지인 부산에서 즐기는 맛집 !</h2>
            <Row xs={1} md={2} className="g-4">
            {item.map((_, idx) => (
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160"  />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
            
        );
}

export default HomeResInfo;