import WeatherRenderer from "./WeatherRenderer.js";

export default function SearchLocation () {
	const searchBar = document.getElementById("searchBar");
	const searchBtn = document.getElementById("searchBtn");

	searchBtn.addEventListener("click", (e) => {
		if (searchBar.value.length > 0) {
			const location = searchBar.value;
			WeatherRenderer(location);
		}
	});
}
