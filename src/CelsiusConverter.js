export default function CelsiusConverter (temp) {
	const tempC = (Math.round(temp - 273)) + "°C";
	return tempC;
}
