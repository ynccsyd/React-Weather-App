import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const WeatherContext=createContext();

export function WeatherAppProvider ({children}) {
    const [weather, setWeather] = useState();
    const [location, setLocation] = useState("Malatya");
    useEffect(() => {
        const getWeatherData=async () => {
          try{
            const data=await axios("https://api.weatherapi.com/v1/forecast.json?key=1e94b72b89104c40b57205905232104&q=07112&days=7")
        setWeather(data.data);
          }catch(err){
            console.log(err)
          }
        }
        getWeatherData();
    }, []);

    const values ={
        weather,
        setWeather,
        location,
        setLocation,
    }
    console.log(weather)
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;