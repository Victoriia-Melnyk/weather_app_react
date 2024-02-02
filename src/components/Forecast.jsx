import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ForecastDay from './ForecastDay';

const API_KEY = 'aao33d4100dc1f18c42d1b9teb580408';

export default function Forecast({ button, city, days }) {
	const [forecastData, setForecastData] = useState([]);

	useEffect(() => {
		if (button === 'cityButton') {
			let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${API_KEY}&units=metric`;
			axios.get(url).then(response => {
				let forecastArray = response.data.daily.slice(0, 5);
				setForecastData(forecastArray);
			});
		}

		if (button === 'geoButton') {
		  navigator.geolocation.getCurrentPosition(position => {
				let latitude = position.coords.latitude;
				let longtitude = position.coords.longitude;
				let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longtitude}&lat=${latitude}&key=${API_KEY}&units=metric`;
				axios.get(url).then(response => {
					let forecastArray = response.data.daily.slice(0, 5);
					setForecastData(forecastArray);
				});
			});
		}
	}, [button, city]);

	return (
		<div className="row">
			{forecastData.map(forecastDay => (
				<ForecastDay key={forecastDay.date} forecastDay={forecastDay} days={days}/>
			))}
		</div>
	);
}
