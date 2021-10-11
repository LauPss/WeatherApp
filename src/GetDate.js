import { format } from "date-fns";

export default function GetDate () {
	const date = document.getElementById("date");
	date.innerText = format(new Date(), "PPPPpppp");
}
