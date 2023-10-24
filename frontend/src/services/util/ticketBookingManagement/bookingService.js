import axios from "axios";

const BASE_PATH = "http://localhost:7241/api/TicketBooking";

export let viewAllBookings = async () => {
	try {
		let value = await axios.get(BASE_PATH);
		return value;
	} catch (error) {
		return error;
	}
};

export let cancelReservation = async (bookingId) => {
	try {
		const response = await axios.put(
			`${BASE_PATH}/cancel/${bookingId}`,
		);
		return response.data;
	} catch (error) {
		return error;
	}
};
