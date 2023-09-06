import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Thu</div>
                    <img src={props.data.icon} alt=""/>
                    <div className="weather-forecast-temp">
                        <span className="forecast-min-temp">19</span>
                        <span className="forecast-max-temp">25</span>
                    </div>
                </div>
            </div>
        </div>
    )
}