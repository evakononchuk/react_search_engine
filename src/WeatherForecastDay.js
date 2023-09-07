import React from "react";

export default function WeatherForecastDay(props) {
    return (
    <div>
        <div className="forecast-day">{props.data.dt}</div>
            <img src={props.data.weather[0].icon} alt={props.description} />
            <div className="weather-forecast-temp">
                <span className="forecast-min-temp">{Math.round(props.data.temp.max)}°</span>
                <span className="forecast-max-temp">{Math.round(props.data.temp.min)}°</span>
        </div>
    </div>
    );
}