import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const WeatherContext=createContext();

export function WeatherAppProvider ({children}) {
    const [weather, setWeather] = useState();
    const [location, setLocation] = useState("Malatya");

    useEffect(() => {
        const getWeatherData=async () => {
          try{
            //https://api.weatherapi.com/v1/forecast.json/daily?city=${`${location}, tr`}&key=1e94b72b89104c40b57205905232104&days=7
            const data=await axios(` http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=083d255906cd9962e1a6c0de6bcbaab1`)
        setWeather(data.data);
          }catch(err){
            console.log(err);
          }
        };
        getWeatherData();
    }, [setWeather]);
    console.log(location)
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