import Card from 'react-bootstrap/Card';


const MapCard = ({item}) => {
    

    console.log(item)
    
    return ( 
        <div className="map_cards_container">
            <div>
            {  
                !item[0]?.RPRSNTV_MENU ?  // item : resDetailList
                <h4>주변 축제</h4> : <h4>주변 맛집</h4>
                        
            }
            </div>
            
        <Card style={{ width: '95%', margin: "auto" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default MapCard;