import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

const AppBody = function ({ city }) {
  const [cityWeather, setCityWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCityWeather = async () => {
    const key = "4b16c95e11d22feaaaaa45d129396fb5";
    const [cityName, country] = city.split(",");

    console.log(`Fetching weather for ${cityName}, ${country}`);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&appid=${key}&units=metric&lang=IT`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.weather && data.weather[0]) {
          const weatherInfo = {
            description: data.weather[0].description,
            temperature: data.main.temp,
            feels_like: data.main.feels_like,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            timezone: data.timezone,
          };
          console.log("Weather data:", weatherInfo);
          setCityWeather(weatherInfo);
          setLoading(false);
        } else {
          throw new Error("Dati meteo non disponibili");
        }
      } else {
        throw new Error("Errore di fetch");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      setError("Non riesco a recuperare i dati");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city && city.trim() !== "") {
      setLoading(true);
      setCityWeather({});
      getCityWeather();
    }
  }, [city]);

  if (loading) {
    return <h4>Caricamento...</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="my-2 mx-auto">
          <Card className="text-start border-0" style={{ width: "46rem", backgroundImage: "url('https://cdn.pixabay.com/photo/2018/06/21/13/57/clouds-3488632_1280.jpg')", position:"relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.2, 
                zIndex: -1, 
              }}
            ></div>
            <Card.Body className="mx-5">
              <Card.Title className="text-center fs-4">
               <h4 className="fw-bold text-uppercase"> Meteo {city}{" "}</h4> 
              </Card.Title>
              <Card.Text>
                <h6 className="fw-bold text-uppercase">{cityWeather.description}</h6>
              </Card.Text>
              <Card.Text className="pComponents">
                <p> Temperatura: {cityWeather.temperature}°C</p>
                <p> Temperatura percepita: {cityWeather.feels_like}°C</p>
                <p> Temperatura minima: {cityWeather.temp_min}°C</p>
                <p> Temperatura massima: {cityWeather.temp_max}°C</p>
                <p> Umidità: {cityWeather.humidity}%</p>
                <p> Vento: {cityWeather.windSpeed} m/s</p>
              </Card.Text>
              <hr />
              <Card.Text className="pComponents text-center">
                <p>Timezone: {cityWeather.timezone}{" "} </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AppBody;
