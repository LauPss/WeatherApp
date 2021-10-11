import CelsiusConverter from "./CelsiusConverter.js";
import FahrenConverter from "./FahrenConverter.js";

export default function RenderTemp (WeatherObj) {
	const main = document.querySelector("main");
	const max = document.getElementById("max");
	const min = document.getElementById("min");
	const temp = document.querySelector("h1");
	
	if (main.classList.contains("celsius")) {
			max.innerText = CelsiusConverter(WeatherObj.max);
			min.innerText = CelsiusConverter(WeatherObj.min);
			temp.innerText = CelsiusConverter(WeatherObj.temp);
	} else {
		max.innerText = FahrenConverter(WeatherObj.max);
		min.innerText = FahrenConverter(WeatherObj.min);
		temp.innerText = FahrenConverter(WeatherObj.temp);
	}
}
