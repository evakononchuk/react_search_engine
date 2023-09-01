import React from "react";
import FormattedDate from "./FormattedDate";

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
                        <img src={props.data.icon} alt={props.data.description}/>
                        <div>
                            <span className='temperature'>{Math.round(props.data.temperature)}</span>
                            <span className='unit'>°C</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                  <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                  </ul>
                </div>
              </div>

        </div>
    )
}