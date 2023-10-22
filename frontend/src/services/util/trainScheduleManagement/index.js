import axios from "axios";

const BASE_PATH = "http://localhost:7241/api/TrainSchedule";

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

export let cancelTrainSchedules = async (trainScheduleId) => {
	try {
		const response = await axios.put(
			`${BASE_PATH}/cancel/${trainScheduleId}`,
		);
		return response.data;
	} catch (error) {
		return error;
	}
};

// const cancelTrainSchedule = async (id) => {
//     try {
//         await axios.put(`/api/trainSchedule/cancel/${id}`);
//         // Handle success, e.g., refresh the list of train schedules
//     } catch (error) {
//         console.error('Error cancelling train schedule:', error);
//         // Handle error
//     }
// };
