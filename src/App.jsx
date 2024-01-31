import React, { useState } from 'react';
import axios from "axios";
import Loader from 'react-loader-spinner';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import WeatherInfo from './components/WeatherInfo';

const API_KEY = 'aao33d4100dc1f18c42d1b9teb580408';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  function addCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function searchByCity(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${API_KEY}&units=metric`;
    axios.get(url).then(response => {
      let weather = (
				<WeatherInfo response={response} />
			);

      setWeather(weather);
    })

  }

  function searchByGeo(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude;
			let longtitude = position.coords.longitude;
      let url = `https://api.shecodes.io/weather/v1/current?lon=${longtitude}&lat=${latitude}&key=${API_KEY}&units=metric`;
      axios.get(url).then(response => {
        let weather = <WeatherInfo response={response} />;

				setWeather(weather);
      })
    })
  }
  
  return (
		<div className="App">
			<div className="container">
				<div className="widget shadow-lg p-3 mb-5 bg-body-tertiary rounded">
					<form id="form">
						<div className="input-group">
							<input
								type="text"
								id="form-input"
								className="form-control"
								placeholder="Enter a city..."
								aria-label="City name with two button addons"
								onChange={addCity}
							/>
							<button
								className="btn btn-outline-secondary"
								type="button"
								id="button-addon2"
								onClick={searchByCity}
							>
								GO
							</button>
							<button
								className="btn btn-outline-secondary"
								type="button"
								id="geo-button"
								onClick={searchByGeo}
							>
								Use my location
							</button>
						</div>
					</form>
					{weather ? (
						weather
					) : (
						<>
							<p>Choose the city ...</p>
							<Loader
								className="spinner"
								type="Puff"
								color="aqua"
								height={100}
								width={100}
								timeout={0} //3 secs
							/>
						</>
					)}
				</div>
				<footer className="source-link">
					<a href="https://github.com/Victoriia-Melnyk/weather_app_react">
						Open-source code
					</a>{' '}
					by Viktoriia Melnyk 🇺🇦 🤟
				</footer>
			</div>
		</div>
	);
}
