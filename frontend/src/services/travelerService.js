import axios from "axios";

const BASE_PATH = "https://localhost:7241/api/Traveler";


export let viewAllTravelerDetails = async () => {
	try {
		let value = await axios.get(BASE_PATH);
		return value;
	} catch (error) {
		return error;
	}
};