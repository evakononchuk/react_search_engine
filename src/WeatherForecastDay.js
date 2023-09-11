import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return (
    <div>
            <div className="weather-forecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={29} />
            <div className="weather-forecast-temp">
                <span className="forecast-min-temp">{Math.round(props.data.temp.max)}°</span>
                <span className="forecast-max-temp">{Math.round(props.data.temp.min)}°</span>
            </div>
    
    </div>
    );
}