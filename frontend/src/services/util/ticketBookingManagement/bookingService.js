import axios from "axios";

const BASE_PATH = "";

export let fetchAvailableTrains  = async () => {
	try {
        const response = await axios.get('https://your-api-url/api/Train/SearchAvailableTrains', {
            params: {
                bookingDate,
                arrivalStation,
                departureStation
            }
        });
        return response.data; // List of available trains
    } catch (error) {
        throw error; // Rethrow the error to be handled by the calling function/component
    }
};