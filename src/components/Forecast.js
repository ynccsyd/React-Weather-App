import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function Forecast() {
  const { weather, location } = useContext(WeatherContext);

  return (
    <>
      <div className='flex justify-center'>
        <div className='text-center text-white font-extrabold text-xl border-x-2 border-t-2 border-slate-200 w-44 bg-blue-800 rounded-t-lg uppercase'>
          {location}
        </div>
      </div>
      <div className='bg-slate-200 p-4 m-4 mt-0 flex flex-wrap justify-evenly items-center rounded-xl gap-3 xl:w-[64rem] xl:h-56'>
        {weather &&
          weather.data.slice(0, 7).map((el, i) => (
            <div
              key={i}
              className='w-36 md:w-36 lg:w-[7.7rem]  2xl:w-32 h-44 border-2 border-slate-500 my-3 p-3 show bg-slate-400 rounded-md'
            >
              <div className='h-9 flex justify-center items-center font-bold uppercase text-md pb-3'>
                {new Date(el.datetime).toDateString().split(" ")[0]}
              </div>
              <div className='bg-blue-800 rounded-full h-20 flex justify-center items-center'>
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`}
                  alt=''
                  className='w-[4.5rem] sm:w-20 tranfrm p-1'
                />
              </div>
              <div className='flex justify-between items-center font-bold pt-3'>
                <div className='text-blue-700'>
                  {weather.data[i].min_temp}
                  <sup>°C</sup>
                </div>
                <div className='text-blue-900'>
                  {weather.data[i].max_temp}
                  <sup>°C</sup>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Forecast;