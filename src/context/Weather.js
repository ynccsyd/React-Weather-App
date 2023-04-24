import React from 'react'
import { WeatherAppProvider } from "./WeatherContext"
import Location from '../components/Locations';
// import Card from '../components/Card'

const Weather = () => {
    return (
        <WeatherAppProvider>
            <Location/>
        </WeatherAppProvider>
    );
}

export default Weather