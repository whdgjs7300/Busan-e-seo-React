import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Nodata from './Nodata';




const MapCard = ({item}) => {
    
    console.log(item)
    const navigate = useNavigate();

    
    return ( 
        <div className="map_cards_container">
            <div className='map_cards_title'>
            {  
                !item[0]?.RPRSNTV_MENU ?  // item : resDetailList
                <h4>주변 축제</h4> : <h4>주변 맛집</h4>      
            }
            </div>

            {item.map((cardItem, index) => (
        <Card
            key={index}
            style={{ width: '95%', margin: 'auto', marginBottom: '20px' }}
            >
            <Card.Img variant="top" src={cardItem.MAIN_IMG_NORMAL} />
            <Card.Body>
                <Card.Title>{cardItem.MAIN_TITLE}</Card.Title>
                <Card.Text>    
                {cardItem.RPRSNTV_MENU || cardItem.USAGE_DAY || cardItem.USAGE_DAY_WEEK_AND_TIME}
                </Card.Text>
                <button 
                onClick={()=> cardItem.RPRSNTV_MENU ? navigate(`/restaurant/${cardItem.UC_SEQ}`) : navigate(`/festivals/${cardItem.UC_SEQ}`)}
                className='map_cardItem_btn'>상세 보기</button>
            </Card.Body>
            </Card>
        ))}

        {
            item.length === 0 ? <Nodata/> : null
        }

        </div>
    );
}

export default MapCard;