import './App.css';
import { useEffect, useState } from 'react'
// import Weather from './context/Weather';

function App() {
  const[users, setUsers]=useState([])
  // const [isLoading, setisLoading] = useState(true); //extention usf
   useEffect(() => {
       fetch(' https://api.weatherbit.io/v2.0/forecast/daily?lat=35.7721&lon=-78.63861&key=ea3ea3afac094be2b166f7356e941e5a&units=I&days=5')
           .then((res) => res.json())
           .then((data) => setUsers(data))
           .catch((e)=> console.log(e))
           .finally(() => {
            //  setisLoading(false)
           } )
           
   }, []);
   console.log(users);
  return (
    <div className="App">
      {/* <Weather/> */}
    </div>
  );
}

export default App;
