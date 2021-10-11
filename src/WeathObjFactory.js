export default function WeathObjFactory (DataObj) {
	const city = DataObj.name + ", " + DataObj.sys.country;
	const iconCode = DataObj.weather[0].icon;
	const max = Math.round(DataObj.main.temp_max);
	const min = Math.round(DataObj.main.temp_min);
	const temp = Math.round(DataObj.main.temp);
	const keyword = DataObj.weather[0].main;
	const weather = DataObj.weather[0].description;
	return {city, iconCode, max, min, keyword, temp, weather};
}
