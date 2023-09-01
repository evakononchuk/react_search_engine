import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import './App.css';

export default function Weather (props) {
    //const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        })
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

                <WeatherInfo data={weatherData}/>
            
          </div>
        )
    } else {
        const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}