import axios from "axios";

const BASE_PATH = "http://localhost:7241/api/Train";

export let viewAllTrains = async () => {
	try {
		let value = await axios.get(BASE_PATH);
		return value;
	} catch (error) {
		return error;
	}
};

export const addTrain = async (newTrainData) => {
	try {
		const response = await axios.post(BASE_PATH, newTrainData);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const updateTrainDetails = async (trainId, updatedTrainData) => {
	try {
		const response = await axios.put(
			`${BASE_PATH}/${trainId}`,
			updatedTrainData,
		);
		return response.data;
	} catch (error) {
		return error;
	}
};

export const deleteTrain = async (trainId) => {
	try {
		const response = await axios.delete(`${BASE_PATH}/${trainId}`);
		return response.data;
	} catch (error) {
		return error;
	}
};
