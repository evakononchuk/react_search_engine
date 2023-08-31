import React, { useState } from "react";
import axios from 'axios';
import './App.css';

export default function Weather (props) {
    //const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })
        setTemperature(Math.round(response.data.main.temp));
    }

    if (weatherData.ready) {
        return (
            <div className='weather'>
              <form>
              <div className='row'>
                <div className='col-9 search'><input type="search" placeholder='Enter the city...' className='form-control'/></div>
                <div className='col-3'><input type="submit" value="Search" className='btn btn-primary'/></div>
                </div>
                </form>
            
              <div className='description'>
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>Wednesday 07:00</li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
    
              <div className='row'>
                <div className='col'>
                    <div className="clearfix">
                        <img src={weatherData.icon} alt={weatherData.description}/>
                        <div>
                            <span className='temperature'>{temperature}</span>
                            <span className='unit'>°C</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                  <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                  </ul>
                </div>
              </div>
            
          </div>
        )
    } else {
        const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}