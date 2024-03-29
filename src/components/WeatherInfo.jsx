import React from "react";
import Forecast from "./Forecast";
import WeatherTemp from "./WeatherTemp";

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export default function WeatherInfo({ response, button, city }) {
  let date = new Date(response.data.time * 1000);

  return (
		<>
			<div className="row">
				<div className="col-4">
					<img
						className="currentIcon"
						src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`}
						alt="currentIcon"
					/>
					<p className="currentDescription">{response.data.condition.description}</p>
				</div>
				<div className="col-4">
					<h1 className="current-city">{response.data.city}</h1>
					<p id="current-date">
						{days[date.getDay()]}, {date.getUTCDate()}
					</p>
					<p id="current-month">{months[date.getUTCMonth()]}</p>
				</div>
				<div className="col-4">
					<WeatherTemp
						temperatureInCelcius={response.data.temperature.current}
					/>
					<p id="humidity">humidity: {response.data.temperature.humidity}%</p>
					<p id="wind">wind: {Math.round(response.data.wind.speed)} km/hr</p>
				</div>
			</div>
			<Forecast button={button} city={city} days={days} />
		</>
	);
}
