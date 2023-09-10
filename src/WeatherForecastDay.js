import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
    console.log(props);
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return (
    <div>
        <div className="forecast-day">{day()}</div>
            <img class="forecast-icon" src={props.icon} alt={props.description} />
            <div className="weather-forecast-temp">
                <span className="forecast-min-temp">{Math.round(props.data.temp.max)}°</span>
                <span className="forecast-max-temp">{Math.round(props.data.temp.min)}°</span>
        </div>
    </div>
    );
}