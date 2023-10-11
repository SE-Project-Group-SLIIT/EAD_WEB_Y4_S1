import axios from "axios";

const BASE_PATH = "https://localhost:7241/api/Train";


export let viewAllTrainSchedules = async () => {
	try {
		let value = await axios.get(BASE_PATH);
		return value;
	} catch (error) {
		return error;
	}
};

export let addTrainSchedules = async () => {
	try {
		let value = await axios.post(BASE_PATH);
		return value;
	} catch (error) {
		return error;
	}
};

export let updateTrainSchedules = async (data) => {
	try {
		let value = await axios.put(
			BASE_PATH,
			data,
		);
		return value.data;
	} catch (error) {
		return error;
	}
};