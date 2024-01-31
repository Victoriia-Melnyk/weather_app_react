import React from 'react';
import image from '../images/sun.png';

export default function Forecast({ day, temp }) {
	return (
		<>
			<div className="col-2">
				<img className="forecastImage" src={image} alt="sun" />
				<p className="forecastDay">{day}</p>
				<p className="forecast-temperatures">
					<span className="forecastTemperatureMax">{temp}°</span>{' '}
					<span className="forecastTemperatureMin">{temp}°</span>
				</p>
			</div>
		</>
	);
}
