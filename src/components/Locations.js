import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext';
import useTurkeyCities from 'use-turkey-cities'

const Locations = () => {
    const { cities, city, setCity } = useTurkeyCities();
    const { setLocation } = useContext(WeatherContext)

    const handleClick = () => {
        setLocation(city)
    };

    return (
        <div>
            <form
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
            </form>
        </div>
    );
}

export default Locations