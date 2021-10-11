import GetBackground from "./GetBackground.js";
import GetData from "./GetData.js";
import RenderTemp from "./RenderTemp.js";
import WeathObjFactory from "./WeathObjFactory.js";

export default async function WeatherRenderer (location) {
	const city = document.querySelector("h3");
	const converter = document.getElementById("converter");
	const date = document.getElementById("date");
	const icon = document.getElementById("icon");
	const main = document.querySelector("main");
	const nav = document.querySelector("nav");
	const weather = document.querySelector("h2");
	
	const JsonObj = await GetData(location);
	const WeatherObj = await WeathObjFactory(JsonObj);
	
	function RenderWeather () {
		city.innerText = WeatherObj.city;
		icon.src = "http://openweathermap.org/img/wn/" + WeatherObj.iconCode + "@2x.png";
		weather.innerText = WeatherObj.weather;
		RenderTemp(WeatherObj);
	}
	
	await RenderWeather();
	await GetBackground(WeatherObj.keyword);
	
	converter.addEventListener("click", (e) => {
		main.classList.toggle("celsius");
		RenderTemp(WeatherObj);
	});
}
