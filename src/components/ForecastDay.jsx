import React from "react";

export default function ForecastDay({forecastDay, days}) {
    let date = new Date(forecastDay.time * 1000);
    return (
			<>
				<div className="col-2">
					<img
						className="forecastImage"
						src={forecastDay.condition.icon_url}
						alt="tempImage"
					/>
					<p className="forecastDay">{days[date.getDay()]}</p>
					<p className="forecast-temperatures">
						<span className="forecastTemperatureMax">
							{Math.round(forecastDay.temperature.maximum)}°
						</span>{' '}
						<span className="forecastTemperatureMin">
							{Math.round(forecastDay.temperature.minimum)}°
						</span>
					</p>
				</div>
			</>
		);
}
