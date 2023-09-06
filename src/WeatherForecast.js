import React from "react";

export default function WeatherForecast(props) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div>
                    <div className="forecast-day">Thu</div>
                </div>
                <div>
                    <img src={props.data.icon} alt=""/>
                </div>
                <div>
                    <span>19</span>
                    <span>25</span>
                </div>
            </div>
        </div>
    )
}