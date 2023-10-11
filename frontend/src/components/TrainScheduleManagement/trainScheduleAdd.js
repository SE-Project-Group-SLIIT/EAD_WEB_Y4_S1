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
	const [arrivalTime, setarrivalTime] = useState();
	const [departureTime, setdepartureTime] = useState(
		moment().format("mm:hh"),
	);
	const [isActive, setIsActive] = useState(true);
	const [isPublish, setIsPublish] = useState(true);
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
	}, []); // The empty dependency array ensures this effect runs only once on component mount.

	async function sendData(e) {
		e.preventDefault();

		const newTrainSchedule = {
			trainName,
			arrivalStation,
			departureStation,
			arrivalTime,
			departureTime,
			isActive,
			isPublish,
		};

		// Send data to the backend
		try {
			const response = await addTrainSchedules(newTrainSchedule); // Call your backend function
			// Handle success response here
			Swal.fire({
				title: "Success!",
				text: "Train Schedule Details Added Successfully",
				icon: "success",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				//   window.location.replace("/train-schedule/list");
			});
		} catch (error) {
			// Handle error response here
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
				(train) => train.name === selectedTrainName,
			);

			if (selectedTrain) {
				setSelectedTrainData(selectedTrain);
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
												required
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
												required
												onChange={(e) => {
													setarrivalStation(
														e.target.value,
													);
												}}
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
												required
												onChange={(e) => {
													setdepartureStation(
														e.target.value,
													);
												}}
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
													required
													// onChange={(e) => {
													// 	setdepartureStation(
													// 		e.target.value,
													// 	);
													// }}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											<input
												type="text"
												class="form-control formInput"
												id="Email"
												placeholder="Arrival Time"
												tabindex="6"
												required
												onChange={(e) => {
													setarrivalTime(
														e.target.value,
													);
												}}
											/>
										</div>
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											<input
												type="text"
												class="form-control formInput"
												id="Phone"
												placeholder="Departure Time"
												tabindex="5"
												required
												onChange={(e) => {
													setdepartureTime(
														e.target.value,
													);
												}}
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
												value="Active"
												required
												onChange={(e) => {
													setIsActive(
														e.target.value,
													);
												}}
											/>
											&nbsp;&nbsp;
											Active&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value="Inactive"
												required
												onChange={(e) => {
													setIsActive(
														e.target.value,
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
												id="isPublish"
												name="isPublish"
												value="isPublish"
												required
												onChange={(e) => {
													setIsPublish(
														e.target.value,
													);
												}}
											/>
											&nbsp;&nbsp; Approve
											publishing&nbsp;&nbsp;&nbsp;&nbsp;
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value="Inactive"
												required
												onChange={(e) => {
													setIsPublish(
														e.target.value,
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
