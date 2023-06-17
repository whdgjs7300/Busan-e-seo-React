import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays,faTruckPlane,faCloudSun,faVanShuttle,faCarBurst } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Busaninfo = () => {

    const busanInfos = [
        {name : "축제안내",  iconName : faCalendarDays, url : '/festivals'}, {name : "부산관광정보", iconName : faTruckPlane, url : 'https://www.tripadvisor.co.kr/Attractions-g297884-Activities-Busan.html'}, 
        {name : "부산날씨정보", iconName : faCloudSun, url : 'https://www.kma.go.kr/busan/html/main/index.jsp'}, {name : "부산시티투어", iconName : faVanShuttle, url : 'http://www.citytourbusan.com/ko/00main/main.php'}, 
        {name : "부산교통정보", iconName : faCarBurst, url : 'https://its.busan.go.kr'}     
    ]
    const navigate = useNavigate();

    // 아이콘의 이름을 동적으로 불러오기 위한 함수
    const getIconComponent = (icon) => {
        if (icon) {
            return <FontAwesomeIcon 
            icon={icon}
            style={{fontSize : "70px"}}
            />;
        }
        // 다른 아이콘에 대한 처리 로직 추가

        return null; // 아이콘 이름이 매핑되지 않으면 null 반환
    }

    return ( 
        <div className='busan_info_container'>
            {
                busanInfos.map((item)=> {
                    return <div 
                    key={item.name}
                    className='busan_info_card'>
                        <a target='blank' href={item.url}>
                            {getIconComponent(item.iconName)}
                            <p style={{marginTop : "10px"}}>{item.name}</p>
                        </a>
                        
                    </div>
                })
            }
        </div>
    );
}

export default Busaninfo;