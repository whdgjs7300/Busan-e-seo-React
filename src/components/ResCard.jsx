import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ResCard = ({gu, item}) => {


    console.log(item.MAIN_TITLE)
    return (
    <Card style={{ 
        width: '14rem',
        padding : "10px 15px" ,
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
        backgroundColor : "rgba(255, 255, 255, 0.8)",
        
        }}>
        <Card.Img 
        style={{
            width : "100%",
            height : "auto",

        }}
        variant="top" src={item.MAIN_IMG_THUMB} />
        <Card.Body style={{
            padding : "10px 0",
            
        }}>
            <Card.Title style={{
                fontSize : "18px",
                fontWeight : "bold",
            }}>{item.MAIN_TITLE}</Card.Title>
            <Card.Text style={{
                marginTop : "10px",
                fontSize : "14px",
                overflow : "hidden",
                textOverflow : "ellipsis",
                whiteSpace : "nowrap",
            }}>
                
                    <p style={{
                        
                    }}>주소</p> 
                    {item.ADDR1}
                    <p>전화번호 </p> 
                    {item.CNTCT_TEL}
                    <p>영업시간</p>
                    {item.USAGE_DAY_WEEK_AND_TIME}
                
            </Card.Text>
            
        </Card.Body>
    </Card>
    );
}

export default ResCard;