import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ResCard = ({gu, item}) => {


    console.log(item.MAIN_TITLE)
    return (
    <Card style={{ width: '13rem' }}>
        <Card.Img 
        style={{
            height : "150px"
        }}
        variant="top" src={item.MAIN_IMG_THUMB} />
        <Card.Body>
            <Card.Title>{item.MAIN_TITLE}</Card.Title>
            <Card.Text>
                <div>
                    <p>주소</p> 
                    {item.ADDR1}
                    <p>전화번호 </p> 
                    {item.CNTCT_TEL}
                    <p>영업시간</p>
                    {item.USAGE_DAY_WEEK_AND_TIME}
                </div>
            </Card.Text>
            
        </Card.Body>
    </Card>
    );
}

export default ResCard;