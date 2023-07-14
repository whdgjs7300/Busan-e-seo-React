import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";


const ResSearchCard = ({item, keyWord, loading}) => {
    const navigate = useNavigate();

    const StyledCard = styled(Card)`
    /* 다른 컴포넌트에 영향을 주지 않고 카드 스타일을 지정할 수 있음 */
    &:hover {
        background-color: #0EB4FC;
        color : white;
        border : none;
    }

`;


if(loading){
    return <ClipLoader color="#ffff" loading={loading} size={150}/>
}
    return (
        <div style={{marginTop : "50px"}}>
            
            <h2 style={{textAlign : "center",fontWeight:"700"}}>"{keyWord}"로 검색한 결과입니다.</h2>
            
            
            <Row style={{margin: "20px"}} xs={1} md={2} className="g-4">
            {item?.map((src, idx) => (
                <Col  key={idx}>
                    <StyledCard style={{cursor:"pointer"}}
                        onClick={() => navigate(`/restaurant/${src.UC_SEQ}`)
                        }>
                        <Card.Img style={{height:"100%" , width:"100%",}}
                        variant="top" src={src.MAIN_IMG_NORMAL}  />   
                        <p className='card_title'>{src.PLACE || src.MAIN_TITLE}   </p>            
                    </StyledCard>
                </Col>
            ))}
            </Row>
        </div>
            
        );
}

export default ResSearchCard;