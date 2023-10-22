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

export let addTravelerDetails = async (newTraveler) => {
	try {
		let value = await axios.post(BASE_PATH, newTraveler);
		return value.data;
	} catch (error) {
		return error;
	}
};

export let updateTraveler = async (travelerNIC, updateTraveler) => {
	try {
		console.log("awa1", travelerNIC, updateTraveler);
		let value = await axios.put(`${BASE_PATH}/${travelerNIC}`, updateTraveler);
		console.log("awa2"+value);
		return value.data;
	} catch (error) {
		return error;
	}
};

export const deleteTraveler = async (travelerNIC) => {
	try {
		const response = await axios.delete(`${BASE_PATH}/${travelerNIC}`);
		return response.data;
	} catch (error) {
		return error;
	}
};