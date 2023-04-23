import './App.css';
import Weather from './context/Weather';
// import { useEffect, useState } from 'react'
// import useTurkeyCities from 'use-turkey-cities'
// // import axios from 'axios';

function App() {
  // const [weather, setWeather] = useState();

  // const { cities, city, setCity } = useTurkeyCities();
  // const [location, setLocation] = useState("");


  // const handleClick = () => {
  //   setLocation(city)
  // };
  // // const [isLoading, setisLoading] = useState(true); //extention usf
  // useEffect(() => {
  //   fetch(`https://api.weatherapi.com/v1/forecast.json/daily?city=${`${location}`}&key=1e94b72b89104c40b57205905232104&days=7`)
  //     .then((res) => res.json())
  //     .then((data) => setCity(data))
  //     .catch((e) => console.log(e))
  //   //  .finally(() => {
  //   //   //  setisLoading(false)
  //   //  } )
  //   // const getWeatherData = async () => {
  //   //   try {
  //   //     const {data} = await axios(
  //   //       `https://api.weatherapi.com/v1/forecast.json/daily?key=1e94b72b89104c40b57205905232104&city=${`${location.name},tr`}&days=7`
  //   //     );
  //   //     setWeather(data);
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // };
  //   // getWeatherData();

  // }, [weather, setCity, location]);
  // console.log(weather);
  return (
    <div className="App">
      {/* <form
        className='flex justify-center md:justify-start items-center mb-10 lg:mb-0'
        onSubmit={(e) => {
          e.preventDefault();
          setCity(city);
        }}
      >
        <select
          className='w-40 h-7 rounded-lg mx-4 outline-none font-bold px-2 show'
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
        >
          {cities.map((city) => (
            <option key={`city-${city}`} value={city}>
              {city}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button
          type='submit'
          className='bg-blue-700 text-white border-none  px-4 mr-4 rounded-lg hover:bg-blue-600 h-7 show'
          onClick={handleClick}
        >
          Submit
        </button>
      </form> */}
      <Weather />
    </div>
  );
}

export default App;
