import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className='description'>
                <h1>{props.data.city}</h1>
                <ul>
                  <li>
                    <FormattedDate date = {props.data.date} />
                    </li>
                  <li className="text-capitalize">{props.data.description}</li>
                </ul>
              </div>
    
              <div className='row'>
                <div className='col'>
                    <div className="clearfix">
                      <div className="weather-icon-temp">
                        <WeatherIcon code={props.data.icon} />
                        <WeatherTemperature celsius={props.data.temperature}/>
                      </div>
                        <WeatherForecast data={props.data.icon}/>              
                    </div>
                </div>
                <div className='col humidity-wind'>
                  <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                  </ul>
                </div>
              </div>

        </div>
    )
}