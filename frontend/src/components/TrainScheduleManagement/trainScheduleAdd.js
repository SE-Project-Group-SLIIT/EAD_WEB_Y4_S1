/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "../shared/Header";
import Swal from "sweetalert2";
import { addTrainSchedules } from "../../services/util/trainScheduleManagement";
import { viewAllTrains } from "../../services/util/trainManagement";

export default function AddTrainSchedule() {
	const [trainName, settrainName] = useState("");
	const [arrivalStation, setarrivalStation] = useState("");
	const [departureStation, setdepartureStation] = useState("");
	const [trainType, setTrainType] = useState("");
	const [trainStations, setTrainStations] = useState([]);
	const [arrivalTime, setarrivalTime] = useState(
		moment().format("mm:hh"),
	);
	const [departureTime, setdepartureTime] = useState(
		moment().format("mm:hh"),
	);
	const [scheduleDate, setscheduleDate] = useState(Date);
	const [isActive, setIsActive] = useState(true);
	const [isPublished, setIsPublish] = useState(true);
	const [selectedTrainData, setSelectedTrainData] = useState(null);
	const [trainNames, setTrainNames] = useState([]);

	useEffect(() => {
		async function fetchTrainNames() {
			try {
				const response = await viewAllTrains(); // Make sure to update this to fetch only train names.
				const trainNames = response.data.map(
					(train) => train.trainName,
				);
				setTrainNames(trainNames);
			} catch (error) {
				console.error("Error fetching train names", error);
			}
		}

		fetchTrainNames();
	}, []);

	async function sendData(e) {
		e.preventDefault();

		const formattedDepartureTime = moment(
			departureTime,
			"HH:mm",
		).format("YYYY-MM-DDTHH:mm:ss");
		const formattedArrivalTime = moment(arrivalTime, "HH:mm").format(
			"YYYY-MM-DDTHH:mm:ss",
		);

		const newTrainSchedule = {
			trainName,
			arrivalStation: selectedTrainData
				? selectedTrainData.arrivalStation
				: arrivalStation,
			departureStation: selectedTrainData
				? selectedTrainData.departureStation
				: departureStation,
			trainType: selectedTrainData
				? selectedTrainData.trainType
				: trainType,
			trainStations: selectedTrainData
				? selectedTrainData.trainStations
				: trainStations,
			arrivalTime: formattedArrivalTime,
			departureTime: formattedDepartureTime,
			scheduleDate,
			isActive,
			isPublished: isPublished === "isPublished",
		};

		try {
			const response = await addTrainSchedules(newTrainSchedule);
			Swal.fire({
				title: "Success!",
				text: "Train Schedule Details Added Successfully",
				icon: "success",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				window.location.replace("/train-schedule/list");
			});
		} catch (error) {
			const msgerr = error.response.data.msg || "An error occurred";
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: `${msgerr}`,
				confirmButtonColor: "#1fc191",
			});
		}
	}

	const handleTrainSelection = async (e) => {
		const selectedTrainName = e.target.value;
		try {
			const response = await viewAllTrains();
			const selectedTrain = response.data.find(
				(train) => train.trainName === selectedTrainName,
			);

			if (selectedTrain) {
				setSelectedTrainData(selectedTrain);
				settrainName(selectedTrain.trainName);
				setarrivalStation(selectedTrain.arrivalStation);
				setdepartureStation(selectedTrain.departureStation);
				setTrainType(selectedTrain.trainType);
				setTrainStations(selectedTrain.trainStations);
			} else {
				setSelectedTrainData(null);
			}
		} catch (error) {
			console.error("Error fetching train data", error);
		}
	};

	return (
		<div class="page-component-body">
			<Header></Header>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: 100,
				}}>
				<div class="container input-main-form-emp pt-3">
					<div class="container border-top">
						<div class="row">
							<div
								class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"
								style={{ marginTop: 15, marginBottom: 8 }}>
								<h3 style={{ marginBottom: 50 }}>
									Create Train Schedules
								</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<form
									id="contact-form"
									class="form"
									role="form"
									onSubmit={sendData}>
									<div class="row">
										<div class="form-group col-md-8">
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Name">
												Train Name
											</label>
											<select
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												tabindex="1"
												onChange={
													handleTrainSelection
												}>
												<option value="">
													Select a train name
												</option>
												{trainNames.map(
													(name, index) => (
														<option
															key={index}
															value={name}>
															{name}
														</option>
													),
												)}
											</select>
										</div>
									</div>
									<div className="row">
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
												Arrival Station
											</label>
											<input
												type="text"
												class="form-control formInput"
												id="Arrival"
												placeholder="Arrival Station"
												tabindex="5"
												value={arrivalStation}
											/>
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
											<input
												type="text"
												class="form-control formInput"
												id="departure"
												placeholder="Departure Station"
												tabindex="5"
												value={departureStation}
											/>
										</div>
									</div>
									<div className="row">
										<div
											style={{ marginTop: 18 }}
											class="form-group col-md-2">
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Name">
												Train Type
											</label>
										</div>
										<div className="row">
											<div
												style={{ marginTop: 18 }}
												class="form-group col-md-12">
												<input
													type="text"
													class="form-control formInput"
													id="type"
													placeholder="Train Type"
													tabindex="5"
													value={trainType}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div
											style={{ marginTop: 18 }}
											class="form-group col-md-12">
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Name">
												Destinations
											</label>

											<input
												type="text"
												class="form-control formInput col-md-18"
												id="Email"
												placeholder="Arrival Time"
												tabindex="6"
												value={trainStations}
											/>
										</div>
									</div>
									<div className="row">
										<div
											class="form-group col-md-7"
											style={{ marginTop: 15 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Schedule Date">
												Schedule Date
											</label>
											<input
												type="date"
												id="scheduleDatePicker"
												name="datePicker"
												style={{ width: 230 }}
												value={scheduleDate} // Set the value of the time picker to departureTime
												onChange={(e) =>
													setscheduleDate(
														e.target.value,
													)
												}
											/>
										</div>
									</div>
									<div className="row">
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
													fontWeight: 800,
												}}
												for="Arrival">
												Arrival Time
											</label>
											<input
												type="time"
												id="timeArrivalPicker"
												name="timePicker"
												style={{ width: 130 }}
												value={arrivalTime} // Set the value of the time picker to departureTime
												onChange={(e) =>
													setarrivalTime(
														e.target.value,
													)
												}
											/>
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
												for="Departure">
												Departure Time
											</label>
											<input
												type="time"
												id="timeDeparturePicker"
												name="timePicker"
												style={{ width: 130 }}
												value={departureTime} // Set the value of the time picker to departureTime
												onChange={(e) =>
													setdepartureTime(
														e.target.value,
													)
												}
											/>
										</div>
									</div>

									<div
										className="row"
										style={{ marginTop: 15 }}>
										<div class="form-group col-md-6">
											<label for="Gender">
												Is this an Active Schedule
												?{" "}
											</label>
											<br />
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value={true}
												onChange={(e) => {
													setIsActive(
														e.target.value ===
															"true",
													);
												}}
											/>
											&nbsp;&nbsp;
											Active&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value={false}
												onChange={(e) => {
													setIsActive(
														e.target.value ===
															"false",
													);
												}}
											/>
											&nbsp;&nbsp; Inactive
										</div>
										<div class="form-group col-md-6">
											<label for="Gender">
												Do you want to publish this
												Schedule ?
											</label>
											<br />
											<input
												type="radio"
												id="isPublished"
												name="isPublished"
												value={true}
												onChange={(e) => {
													setIsPublish(
														e.target.value ===
															"true",
													);
												}}
											/>
											&nbsp;&nbsp; Approve
											publishing&nbsp;&nbsp;&nbsp;&nbsp;
											<input
												type="radio"
												id="isPublished"
												name="isPublished"
												value={false}
												onChange={(e) => {
													setIsPublish(
														e.target.value ===
															"false",
													);
												}}
											/>
											&nbsp;&nbsp; Decline publishing
										</div>
									</div>

									<div className="row mt-2 mb-3">
										<div className="col py-3 text-center">
											<button
												type="submit"
												className="btn btn-ok">
												Add
											</button>
										</div>
										<div className="col py-3 text-center">
											<button
												type="reset"
												className="btn btn-reset">
												Cancel
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
