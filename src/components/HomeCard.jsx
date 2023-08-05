import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const HomeCard = ({item}) => {

    const navigete = useNavigate();

    
    // 이미지 URL을 HTTP에서 HTTPS로 변환하는 함수
    const convertToHttps = (url) => {
        return url.replace(/^http:/, 'https:');
    }

    const StyledCard = styled(Card)`
    /* 다른 컴포넌트에 영향을 주지 않고 카드 스타일을 지정할 수 있음 */
    &:hover {
        background-color: #FFA500;
        color : white;
        border : none;
    }

`;

    return (
        <div style={{marginTop : "50px"}}>
            <h2 style={{textAlign : "center",fontWeight:"700"}}>최고의 휴양지인 부산에서 즐기는 맛집 !</h2>
            
            <Row style={{margin: "20px"}} xs={1} md={2} className="g-4">
            {item?.map((src, idx) => (
                <Col  key={idx}>
                    <StyledCard style={{margin : "auto" ,cursor:"pointer", width: "300px", height : "200px"}}
                        onClick={()=>navigete(`/restaurant/${src.UC_SEQ}`)} >
                        <Card.Img 
                        style={{height:"100%" , width:"100%", objectFit: "cover" }}
                        variant="top" src={convertToHttps(src.MAIN_IMG_NORMAL)} 
                        alt={src.PLACE || src.MAIN_TITLE} 
                        decoding="async" // 이미지 디코딩을 비동기로 처리 (페이지 로딩 속도 향상)
                        loading="lazy" // 이미지 지연로딩 적용
                        />   
                        <p className='card_title'>{src.PLACE || src.MAIN_TITLE}   </p>            
                    </StyledCard>
                </Col>
            ))}
            </Row>
        </div>
            
        );
}

export default HomeCard;