import Card from 'react-bootstrap/Card';




const MapCard = ({item}) => {
    
    console.log(item)
    

    
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
            </Card.Body>
            </Card>
        ))}
        </div>
    );
}

export default MapCard;