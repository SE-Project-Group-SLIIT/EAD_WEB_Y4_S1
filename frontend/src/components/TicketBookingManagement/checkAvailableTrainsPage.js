/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "../shared/Header";
import { viewAllTrainSchedules } from "../../services/util/trainScheduleManagement";
import { useNavigate } from "react-router-dom";

export default function CheckAvailableTrainsPage() {
	const railwayStations = [
		{ name: "Colombo Fort", value: "colombo_fort" },
		{ name: "Kandy", value: "kandy" },
		{ name: "Gampaha", value: "gampaha" },
		{ name: "Galle", value: "Galle" },
		{ name: "Jaffna", value: "jaffna" },
		{ name: "Matara", value: "matara" },
		{ name: "Badulla", value: "badulla" },
		{ name: "Anuradhapura", value: "anuradhapura" },
		{ name: "Polonnaruwa", value: "polonnaruwa" },
		{ name: "Trincomalee", value: "trincomalee" },
		{ name: "Ella", value: "ella" },
		{ name: "Nuwara Eliya", value: "nuwara Eliya" },
		{ name: "Hikkaduwa", value: "hikkaduwa" },
		{ name: "Negombo", value: "negombo" },
		{ name: "Kurunegala", value: "kurunegala" },
		{ name: "Ragama", value: "ragama" },
		{ name: "Veyangoda", value: "veyangoda" },
		{ name: "Mirigama", value: "mirigama" },
		{ name: "Polgahawela", value: "polgahawela" },
		{ name: "Maradana", value: "maradana" },
		{ name: "Kollupitiya", value: "kollupitiya" },
		{ name: "Peradeniya", value: "peradeniya" },
		{ name: "Matale", value: "matale" },
		{ name: "Gampola", value: "gampola" },
	];

	const [bookingDate, setBookingDate] = useState(Date);
	const [arrivalStation, setArrivalStation] = useState("");
	const [departureStation, setDepartureStation] = useState("");
	const [trains, setTrains] = useState([]);
	const [error, setError] = useState(null);
	const [trainSchedules, setTrainSchedules] = useState([]);
	const [filteredTrainSchedules, setFilteredTrainSchedules] = useState(
		[],
	);
	const navigate = useNavigate();

	console.log(trains);

	useEffect(() => {
		async function getAllTrainSchedules() {
			try {
				let respond = await viewAllTrainSchedules();
				if (respond.data) {
					setTrainSchedules(respond.data);
				} else {
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		}

		getAllTrainSchedules();
	}, []);

	const checkAvailability = () => {
		navigate("/train-details/available");
	}

	return (
		<div>
			<Header></Header>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: 100,
				}}>
				<div class="container input-main-form-emp pt-3">
					<div class="container border-top">
						<div
							class="row"
							style={{ backgroundColor: "#191970", height: 80 }}>
							<div
								class=" col-sm-12   text-center"
								style={{ marginTop: 15 }}>
								<h3
									style={{
										marginBottom: 50,
										color: "white",
									}}>
									Book Your Seat
								</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<form
									id="contact-form"
									class="form"
									role="form">
									<div className="row">
										<div
											class="form-group col-md-7"
											style={{ marginTop: 70 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Schedule Date">
												Reservation Date
											</label>
											<input
												type="date"
												id="scheduleDatePicker"
												name="datePicker"
												style={{
													width: 230,
													height: 30,
												}}
												value={bookingDate}
												onChange={(e) =>
													setBookingDate(
														e.target.value,
													)
												}
											/>
										</div>
									</div>

									<div className="row">
										<div
											class="form-group col-md-6"
											style={{ marginTop: 18 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Name">
												Arrival Station
											</label>
											<select
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												placeholder="Arrival Station"
												tabindex="1"
												required
												value={arrivalStation}
												onChange={(e) => {
													setArrivalStation(
														e.target.value,
													);
												}}>
												{railwayStations.map(
													(station) => (
														<option
															key={
																station.value
															}
															value={
																station.value
															}>
															{station.name}
														</option>
													),
												)}
											</select>
										</div>
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Name">
												Departure Station
											</label>
											<select
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												placeholder="Departure Station"
												tabindex="1"
												required
												value={departureStation}
												onChange={(e) => {
													setDepartureStation(
														e.target.value,
													);
												}}>
												{railwayStations.map(
													(station) => (
														<option
															key={
																station.value
															}
															value={
																station.value
															}>
															{station.name}
														</option>
													),
												)}
											</select>
										</div>
									</div>
									<div className="row">
										<div
											class="form-group col-md-7"
											style={{ marginTop: 25 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Schedule Date">
												No. of Passangers
											</label>
											<input
												type="number"
												id="schedulePassengerSelection"
												name="selection"
												style={{
													width: 230,
													height: 30,
												}}
												value={bookingDate}
												onChange={(e) =>
													setBookingDate(
														e.target.value,
													)
												}
											/>
										</div>
									</div>
									<div className="row mt-2 mb-3">
										<div className="col py-3 text-center">
											<button
												onClick={checkAvailability}
												type="submit"
												className="btn btn-ok">
												Search
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
