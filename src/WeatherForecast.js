import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    if(loaded) {
        //console.log(forecast);
        console.log(props.coordinates.lat);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        )
    } else {
        let apiKey = "ad793a6d772939c31783de5822791acf";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
    
    function handleResponse(response) {
        //console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    
    
}