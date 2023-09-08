import React from "react";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[day];
    }
    return (
    <div>
        <div className="forecast-day">{day()}</div>
            <img src={props.data.weather[0].icon} alt={props.description} />
            <div className="weather-forecast-temp">
                <span className="forecast-min-temp">{Math.round(props.data.temp.max)}°</span>
                <span className="forecast-max-temp">{Math.round(props.data.temp.min)}°</span>
        </div>
    </div>
    );
}