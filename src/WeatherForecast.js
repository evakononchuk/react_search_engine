import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    console.log(props.coordinates);
    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    //console.log(props);

    

    if(loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="forecast-day">Thu</div>
                        <img src={props.icon} alt={props.description} />
                        <div className="weather-forecast-temp">
                            <span className="forecast-min-temp">{Math.round(forecast[0].temp.max)}°</span>
                            <span className="forecast-max-temp">{Math.round(forecast[0].temp.min)}°</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        let apiKey = 'c8a77112b2faf6684bb4b21a0aa778ae';
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

    return null;
    }
    
}