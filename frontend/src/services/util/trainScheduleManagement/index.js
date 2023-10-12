import axios from "axios";

const BASE_PATH = "https://localhost:7241/api/TrainSchedule";

export let viewAllTrainSchedules = async () => {
	try {
		let value = await axios.get(BASE_PATH);
		return value;
	} catch (error) {
		return error;
	}
};

export let addTrainSchedules = async (newTrainScheduleData) => {
	try {
		const response = await axios.post(BASE_PATH, newTrainScheduleData);
		return response.data;
	} catch (error) {
		return error;
	}
};

export let updateTrainSchedules = async (trainScheduleId, updatedTrainScheduleData) => {
	try {
		const response = await axios.put(
			`${BASE_PATH}/${trainScheduleId}`,
			updatedTrainScheduleData,
		);
		return response.data;
	} catch (error) {
		return error;
	}
};

export let cancelTrainSchedules = async (trainScheduleId, canceledTrainScheduleData) => {
	try {
		const response = await axios.put(
			`${BASE_PATH}/${trainScheduleId}`,
			canceledTrainScheduleData,
		);
		return response.data;
	} catch (error) {
		return error;
	}
};