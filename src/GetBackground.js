export default async function GetBackground (weather) {
	const img = document.getElementById("background")
	const str = "https://pixabay.com/api/?key=23709154-5035a89373a222cbb27d924d7&q=" + weather + "&image_type=photo&orientation=horizontal";
	try {
		const response = await fetch(str, {mode: "cors"});
		const JsonObj = await response.json();
		img.src = JsonObj.hits[0].largeImageURL;
	} catch(error) {
		console.error('There has been a problem with your fetch background image operation:', error);
	}
}
