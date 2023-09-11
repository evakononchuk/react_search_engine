import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if(loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col forecast-day" key={index}>
                                   <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        } else {
                            return null;
                        }  
                    })}   
                </div>
            </div>
        )
    } else {
        if(props.coordinates) {
        let apiKey = "ad793a6d772939c31783de5822791acf";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        //console.log(props.coordinates.lat);
        //console.log(props.coordinates.lon);
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }
        return null;
    }
   
}