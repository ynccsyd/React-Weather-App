import React from "react";
import Forecast from "./Forecast";
import Locations from "./Locations";

function Card() {
  return (
    <div className='border-2 border-solid border-slate-600 rounded-xl w-auto bg-slate-700 m-10 mb-0 mt-3 opacity-80 panel'>
      <Locations />
      <Forecast />
    </div>
  );
}

export default Card;