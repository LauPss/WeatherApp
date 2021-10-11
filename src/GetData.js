import GetDate from "./GetDate.js";
import WeathObjFactory from "./WeathObjFactory.js";

export default async function GetData (location) {
	const str = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=1c44231a701b8a2ef1a98582516a5a74";
	GetDate();
	try {
		const response = await fetch(str, {mode: "cors"});
		const JsonObj = await response.json();
		return JsonObj;
	} catch(error) {
		console.error('There has been a problem with your fetch weather data operation:', error);
	}
}
