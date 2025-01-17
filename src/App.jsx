import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import WeatherNav from './components/WeatherNav'
import CitySelect from './components/CitySelect'
import AppBody from './components/AppBody'


function App() {
  const [selectedCity, setSelectedCity] = useState("Parigi");

  return (
    <>
     <WeatherNav/>
     <CitySelect onCityChange={(city) => setSelectedCity(`${city}`)} />
     <AppBody city={selectedCity}/>
    </>
  )
}

export default App
