import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import image from './images/sun.png';
import Forecast from './Forecast';

export default function App() {
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
							/>
							<button
								className="btn btn-outline-secondary"
								type="button"
								id="button-addon2"
							>
								GO
							</button>
							<button
								className="btn btn-outline-secondary"
								type="button"
								id="geo-button"
							>
								Use my location
							</button>
						</div>
					</form>
					<div className="row">
						<div className="col-4">
							<img id="icon" src={image} alt="icon" />
							<p id="description">Sunny</p>
						</div>
						<div className="col-4">
							<h1 id="current-city">Porto</h1>
							<p id="current-date">Monday, 1</p>
							<p id="current-month">January</p>
						</div>
						<div className="col-4">
							<h2>
								<span id="temperature">18°С</span>
							</h2>
							<p id="humidity">humidity: 60%</p>
							<p id="wind">wind: 7 km/hr</p>
						</div>
					</div>
					<div class="row">
						<Forecast day="Tue" temp={15} />
						<Forecast day="Wed" temp={16} />
						<Forecast day="Thur" temp={17} />
						<Forecast day="Fri" temp={18} />
						<Forecast day="Sat" temp={19} />
					</div>
				</div>
				<p class="source-link">
					<a href="https://github.com/Victoriia-Melnyk/weather__app">
						Open-source code
					</a>{' '}
					by Viktoriia Melnyk 🇺🇦 🤟
				</p>
			</div>
		</div>
	);
}
