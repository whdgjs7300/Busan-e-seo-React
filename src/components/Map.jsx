import { useEffect } from "react";
import MapCard from "./MapCard";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAction } from "../redux/actions/restaurantAction";
import { festivalAction } from "../redux/actions/festivalAction";




const { kakao } = window;

const Map = ({item}) => {

    const dispatch = useDispatch();
    const {nearbyfesList} = useSelector((state)=>state.festival)
    const {nearbyresList} = useSelector((state)=>state.restaurant)

    // 비동기 데이터 호출
    useEffect(()=>{
        // 디테일 페이지가 restaurantList로 구성되어 있다면 주변 축제 데이터
        if(item.RPRSNTV_MENU) {
            dispatch(festivalAction.getNearByFes(item))
        }else {
            dispatch(restaurantAction.getNearByRes(item))
        }
    },[])

    // 카카오 Map
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(item.LAT, item.LNG),
			level: 6,
            isPanto : true,
            
		};
        const map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(item.LAT, item.LNG); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);

        var iwContent = `<div style="padding:5px; text-align:center; font-size : 10px; height:60px; " >${item.MAIN_TITLE} <br><a href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(item.LAT, item.LNG); 
    
    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    infowindow.open(map, marker); 
    }, []);
    

    
    return ( 
        <div className="map_container">
            <div id='myMap'  style={{
                width: '50%', 
                height: '500px',
                margin: "auto"
                }}>
            </div>
                
                    <MapCard  item={item.RPRSNTV_MENU ? nearbyfesList : nearbyresList} /> 
                    
                
                    
            

            

        </div>
        
    );
}

export default Map;