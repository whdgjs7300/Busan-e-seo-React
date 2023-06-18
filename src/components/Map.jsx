import { useEffect } from "react";


const { kakao } = window;

const Map = ({item}) => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(item.LAT, item.LNG),
			level: 6,
            isPanto : true,
            
		};
        const map = new kakao.maps.Map(container, options);
    }, []);

    return ( 
        <div className="map_container">
            <div id='myMap'  style={{
            width: '500px', 
            height: '500px'
            }}></div>
        </div>
        
    );
}

export default Map;