import React, { useState } from "react";
import cn from 'classnames';

export default function WeatherTemp({ temperatureInCelcius }) {
  const [unit, setUnit] = useState("celcius");
  let temperature;
  if (unit === "celcius") {
    temperature = temperatureInCelcius;
  } else {
    temperature = (temperatureInCelcius * 9/5) + 32;
  }
  
  return (
		<span className="temperature">
			{Math.round(temperature)}{' '}
			<sup>
				<a
					href="/"
					className={cn('celciusLink', { nonActive: unit === 'celcius' })}
					onClick={event => {
						event.preventDefault();
						setUnit('celcius');
					}}
				>
					°C |{' '}
				</a>
				<a
					href="/"
					className={cn('fahrenheitLink', { nonActive: unit === 'fahrenheit' })}
					onClick={event => {
						event.preventDefault();
						setUnit('fahrenheit');
					}}
				>
					°F
				</a>
			</sup>
		</span>
	);
}
