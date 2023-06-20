import ClipLoader from "react-spinners/ClipLoader";
import {useEffect, useState} from 'react';

const WEATHER_KEY ="5e0b6fefbcb22aa7d9f241571b406f98";

const Weather = ({lat, lon , item}) => {

    const [weather, setWeather] = useState(null);
    const [loading,setLoading] = useState(false);
    let cloudsValue = weather?.clouds.all; // 구름의 양 값 가져오기
    let weatherStatus; // 날씨 상태 변수 선언
    
    const getWeather = async(lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&lang=kr&units=metric`
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        // 날씨 데이터를 넣어줌 state에
        setWeather(data);
        setLoading(false);
    }
    if (cloudsValue === 0) {
        weatherStatus = "맑음"; // 구름이 거의 없는 경우
        } else if (cloudsValue === 100) {
            weatherStatus = "매우 흐림"; // 많은 구름이 있는 경우
        } else if (cloudsValue > 70) {
            weatherStatus = "흐림"; // 구름이 있는 경우
        } else if (cloudsValue > 30) {
            weatherStatus = "구름 조금"; // 구름이 약간 있는 경우
        } else {
            weatherStatus = "알 수 없음"; // 그 외의 경우
        }

    useEffect(()=>{
        getWeather(lat, lon);
    },[])
    console.log(weather)
    return ( 
        
        <div className="weather_container">
            {
                loading ? (
                    <ClipLoader
                        color="#f88c6b"
                        loading={loading}
                        size={150}
                    /> 
                ) : (
                    <div className="weather_box">
                        <h2 style={{textAlign: "center", marginTop: "20px", fontWeight:"900"}}>{item.PLACE} 근처의 기상 정보 입니다.</h2>
                        <div style={{textAlign : "center"}} >
                            <div className="weather_first_box">
                                <img
                                    src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                                    alt="Weather Icon"
                                />
                                {/* 구름의 양에 따라 다른 내용을 표시 */}
                                {weather?.clouds.all !== undefined && (
                                        <p style={{fontSize : "30px"}}> {weatherStatus}</p>
                                    )}
                            </div>
                            
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <h3 style={{fontWeight : "700", fontSize : "70px"}}>{weather?.main.temp.toFixed(1)}°C</h3>
                                <span style={{marginLeft: "10px", fontWeight : "500", fontSize : "20px"}}>체감({weather?.main.feels_like.toFixed(1)}°C)</span>
                            </div>
                                <p style={{fontSize: "15px"}}>{weather?.weather[0].description}</p>
                            
                        </div>

                        <div className="weather_second_box">
                            <div className="weather_second_box_1">
                                {/*  sys.sunrise 값을 밀리초 단위로 변환한 후, toLocaleTimeString 함수를 사용하여 해당 시간을 변환하고 시간과 분만을 추출하여 표시 2-digit' : 2자리 수 */}
                            <p>일출 : {new Date(weather?.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            <p>일몰 : {new Date(weather?.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>

                            <div>
                                <p>최저 기온은 <h3>{weather?.main.temp_min.toFixed(1)}°C</h3>입니다.</p>
                                <p>최고 기온은 <h3>{weather?.main.temp_max.toFixed(1)}°C</h3> 입니다.</p>
                                <p>습도는 <h3>{weather?.main.humidity}</h3>입니다.</p>
                                <p>풍향은 <h3>{weather?.wind.deg}</h3> 입니다.</p>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    );
}

export default Weather;