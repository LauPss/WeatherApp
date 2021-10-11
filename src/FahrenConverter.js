export default function FahrenConverter (temp) {
	const tempF = (Math.round(1.8*(temp - 273) + 32)) + "°F";
	return tempF;
}
