import React, { useState } from "react";
import moment from "moment";
import Header from "../shared/Header";
import Swal from "sweetalert2";
import { addTrainSchedules } from "../../services/util/trainScheduleManagement";

export default function AddTrainSchedule() {

	const railwayStations = [
		{ name: "Colombo Fort", value: "colombo_fort" },
		{ name: "Kandy", value: "kandy" },
		{ name: "Gampaha", value: "gampaha" },
		{ name: "Galle", value: "galle" },
		{ name: "Jaffna", value: "jaffna" },
		{ name: "Matara", value: "matara" },
		{ name: "Badulla", value: "badulla" },
		{ name: "Anuradhapura", value: "anuradhapura" },
		{ name: "Polonnaruwa", value: "polonnaruwa" },
		{ name: "Trincomalee", value: "trincomalee" },
		{ name: "Ella", value: "ella" },
		{ name: "Nuwara Eliya", value: "nuwara_eliya" },
		{ name: "Hikkaduwa", value: "hikkaduwa" },
		{ name: "Negombo", value: "negombo" },
		{ name: "Kurunegala", value: "kurunegala" },
	];

	const [trainName, settrainName] = useState("");
	const [arrivalStation, setarrivalStation] = useState("");
	const [departureStation, setdepartureStation] = useState("");
	const [arrivalTime, setarrivalTime] = useState(moment().format('mm:hh'));
	const [departureTime, setdepartureTime] = useState(moment().format('mm:hh'));
    const [isActive, setIsActive] = useState(true);
    const [isPublish, setIsPublish] = useState(true);

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
								<h3 style={{marginBottom: 50}}>
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
									onSubmit={sendData}
								>
	
										<div class="form-group col-md-6">
											<input
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												placeholder="Train Name"
												tabindex="1"
												required
												onChange={(e) => {
													settrainName(
														e.target.value,
													); 
												}}
											/>
										</div>
									<div className="row">
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
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
												onChange={(e) => {
													setarrivalStation(
														e.target.value,
													);
												}}
											>
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
												onChange={(e) => {
													setdepartureStation(
														e.target.value,
													);
												}}
											>
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
