import ClipLoader from "react-spinners/ClipLoader";
import {useEffect, useState} from 'react';

const WEATHER_KEY ="5e0b6fefbcb22aa7d9f241571b406f98";

const Weather = ({lat, lon}) => {

    const [weather, setWeather] = useState(null);
    const [loading,setLoading] = useState(false);

    
    const getWeather = async(lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        // 날씨 데이터를 넣어줌 state에
        setWeather(data);
        setLoading(false);
    }
    useEffect(()=>{
        getWeather(lat, lon);
    },[])
    console.log(weather)
    return ( 
        
        <div>
            {
                loading ? (
                    <ClipLoader
                        color="#f88c6b"
                        loading={loading}
                        size={150}
                    /> 
                ) : (
                    <div>
                        
                    </div>
                )
            }
        </div>
    );
}

export default Weather;