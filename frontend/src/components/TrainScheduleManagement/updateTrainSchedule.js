/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { updateTrainSchedules } from "../../services/util/trainScheduleManagement";

export default function UpdateTrainSchedule({ data, cl }) {
	const [trainName, settrainName] = useState("");
	const [arrivalStation, setarrivalStation] = useState("");
	const [departureStation, setdepartureStation] = useState("");
	const [arrivalTime, setarrivalTime] = useState("");
	const [departureTime, setdepartureTime] = useState("");
	const [isActive, setIsActive] = useState(true);
	const [isPublished, setIsPublish] = useState(true);

	// // const today = new Date().toISOString();

	useEffect(() => {
		settrainName(data.trainName);
		setarrivalStation(data.arrivalStation);
		setdepartureStation(data.departureStation);
		setarrivalTime(data.arrivalTime);
		setdepartureTime(data.departureTime);
		setIsActive(data.isActive);
		setIsPublish(data.isPublished);
	}, [data]); //[] <- pass only one array at a time

	async function sendData(e) {
		e.preventDefault();

		const updateTrainSchedule = {
			trainName,
			arrivalStation,
			departureStation,
			arrivalTime,
			departureTime,
			isActive,
			isPublished,
		};

		try {
			const response = await updateTrainSchedules(
				updateTrainSchedule,
			); // Call your backend function
			// Handle success response here
			Swal.fire({
				title: "Success!",
				text: "Train Schedule Details Updated Successfully",
				icon: "success",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				//   window.location.replace("/all-employee-list");
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
		<div>
			<Modal.Header>
				<Modal.Title>Update Train Schedules</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* <div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: 50,
							}}>
							<div class="container input-main-form-emp pt-3">
								<div class="container border-top"> */}
									<div class="row">
										<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
											{/* <form
												id="contact-form"
												class="form"
												role="form"
												onSubmit={sendData}>
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
																e.target
																	.value,
															);
														}}
													/>
												</div>
												<div className="row">
													<div
														class="form-group col-md-6"
														style={{
															marginTop: 15,
														}}>
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
															onChange={(
																e,
															) => {
																setarrivalStation(
																	e
																		.target
																		.value,
																);
															}}>
														</select>
													</div>
													<div
														class="form-group col-md-6"
														style={{
															marginTop: 15,
														}}>
														<label
															style={{
																float: "left",
																marginLeft: 10,
															}}
															for="Name">
															Departure
															Station
														</label>
														<select
															type="text"
															class="form-control formInput"
															id="Name"
															name="Name"
															placeholder="Departure Station"
															tabindex="1"
															required
															onChange={(
																e,
															) => {
																setdepartureStation(
																	e
																		.target
																		.value,
																); 
															}}>
															
														</select>
													</div>
												</div>

												<div className="row">
													<div
														class="form-group col-md-6"
														style={{
															marginTop: 15,
														}}>
													
														<input
															type="email"
															class="form-control formInput"
															id="Email"
															placeholder="Arrival Time"
															tabindex="6"
															required
															onChange={(
																e,
															) => {
																setarrivalTime(
																	e
																		.target
																		.value,
																); 
														
															}}
														/>
													</div>
													<div
														class="form-group col-md-6"
														style={{
															marginTop: 15,
														}}>
														
														<input
															type="text"
															class="form-control formInput"
															id="Phone"
															placeholder="Departure Time"
															tabindex="5"
															required
															onChange={(
																e,
															) => {
																setdepartureTime(
																	e
																		.target
																		.value,
																);
																
															}}
														/>
													</div>
												</div>

												<div
													className="row"
													style={{
														marginTop: 15,
													}}>
													<div class="form-group col-md-6">
														<label for="Gender">
															Is this an
															Active Schedule
															?{" "}
														</label>
														<br />
														<input
															type="radio"
															id="isActive"
															name="isActive"
															value="Active"
															required
															onChange={(
																e,
															) => {
																setIsActive(
																	e
																		.target
																		.value,
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
															onChange={(
																e,
															) => {
																setIsActive(
																	e
																		.target
																		.value,
																);
															
															}}
														/>
														&nbsp;&nbsp;
														Inactive
													</div>
													<div class="form-group col-md-6">
														<label for="Gender">
															Do you want to
															publish this
															Schedule ?
														</label>
														<br />
														<input
															type="radio"
															id="isActive"
															name="isActive"
															value="Active"
															required
															onChange={(
																e,
															) => {
																setIsPublished(
																	e
																		.target
																		.value,
																);
															}}
														/>
														&nbsp;&nbsp;
														Approve
														publishing&nbsp;&nbsp;&nbsp;&nbsp;
														<input
															type="radio"
															id="isActive"
															name="isActive"
															value="Inactive"
															required
															onChange={(
																e,
															) => {
																setIsPublished(
																	e
																		.target
																		.value,
																);
																
															}}
														/>
														&nbsp;&nbsp;
														Decline publishing
													</div>
												</div>
											</form> */}
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
											}}
											for="Name">
											Select a train name
										</label>
										<select
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												tabindex="1"
												required
												onChange={(e) => {
													settrainName(
														e.target.value,
													);
												}}>

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
												Update
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
								{/* </div>
							</div>
						</div> */}

						{/* <div className="row mt-2 mb-3">
							<div className="col py-3 text-center">
								<button
									type="submit"
									className="btn btn-ok">
									Update
								</button>
							</div>
							<div className="col py-3 text-center">
								<button
									type="reset"
									className="btn btn-reset">
									Cancel
								</button>
							</div>
						</div> */}
				{/* // 	</div>
				// </div> */}
			</Modal.Body>
		</div>
	);
}
