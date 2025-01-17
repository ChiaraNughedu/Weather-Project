import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherNav from "./components/WeatherNav";
import CitySelect from "./components/CitySelect";
import AppBody from "./components/AppBody";
import WeatherFooter from "./components/WeatherFooter";

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <>
       <WeatherNav />
      <CitySelect onCityChange={handleCityChange} />
      <>
      {selectedCity && <AppBody city={selectedCity} />}
      </>
      <WeatherFooter />
    </>
  );
}

export default App;
