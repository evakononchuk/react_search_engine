import React, { useState } from "react";
import axios from 'axios';
import './App.css';

export default function Weather () {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
        })
        setTemperature(Math.round(response.data.main.temp));
        setReady(true);
    }

    if (ready) {
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
                  <li>{weatherData.description}</li>
                </ul>
              </div>
    
              <div className='row'>
                <div className='col'>
                  <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' alt="moustly sunny"/>
                  <span className='temperature'>{temperature}</span>°C
                </div>
                <div className='col'>
                  <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 72%</li>
                    <li>Wind: 2 km/h</li>
                  </ul>
                </div>
              </div>
            
          </div>
        )
    } else {
        const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
        let city = "Barcelona";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    
    
}