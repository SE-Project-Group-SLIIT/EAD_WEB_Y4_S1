/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { updateTrainSchedules } from "../../services/util/trainScheduleManagement";
import moment from "moment";

export default function UpdateTrainSchedule({ data, cl }) {
	console.log(data);
	const [trainName, settrainName] = useState("");
	const [arrivalStation, setarrivalStation] = useState("");
	const [departureStation, setdepartureStation] = useState("");
	const [arrivalTime, setarrivalTime] = useState(
		moment().format("mm:hh"),
	);
	const [departureTime, setdepartureTime] = useState(
		moment().format("mm:hh"),
	);
	const [trainType, setTrainType] = useState("");
	const [trainStations, setTrainStations] = useState([]);
	const [isActive, setIsActive] = useState(true);
	const [isPublished, setIsPublish] = useState(true);
	const [scheduleDate, setscheduleDate] = useState(Date);

	console.log(data);

	useEffect(() => {
		if (data) {
			settrainName(data.trainName);
			setarrivalStation(data.arrivalStation);
			setdepartureStation(data.departureStation);
			setarrivalTime(data.arrivalTime);
			setdepartureTime(data.departureTime);
			setTrainType(data.trainType);
			setTrainStations(data.trainStations);
			setIsActive(data.isActive);
			setIsPublish(data.isPublished);
			setscheduleDate(data.scheduleDate);
		}
	}, [data]);

	async function sendData(e) {
		e.preventDefault();

		const formattedDepartureTime = moment(
			departureTime,
			"HH:mm",
		).format("YYYY-MM-DDTHH:mm:ss");
		const formattedArrivalTime = moment(arrivalTime, "HH:mm").format(
			"YYYY-MM-DDTHH:mm:ss",
		);

		const updateTrainSchedule = {
			trainName,
			arrivalStation,
			departureStation,
			arrivalTime: formattedArrivalTime,
			departureTime: formattedDepartureTime,
			trainType,
			trainStations,
			isActive: isActive,
			isPublished: isPublished,
			scheduleDate,
		};

		try {
			const response = await updateTrainSchedules(
				data.trainScheduleId,
				updateTrainSchedule,
			);
			Swal.fire({
				title: "Success!",
				text: "Train Schedule Details Updated Successfully",
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

	const handleActiveChange = (e) => {
		setIsActive(e.target.value === "true");
	};

	const handlePublishChange = (e) => {
		setIsPublish(e.target.value === "true");
	};

	const handleClose = () => {
		window.location.replace("/train-schedule/list");
	}


	return (
		<div>
			<Modal.Header>
				<Modal.Title>Update Train Schedules</Modal.Title>
			</Modal.Header>
			<Modal.Body>
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
									<input
										type="text"
										class="form-control formInput"
										id="Arrival"
										placeholder="Train Name"
										tabindex="5"
										value={trainName}
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
										value={scheduleDate}
										onChange={(e) =>
											setscheduleDate(e.target.value)
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
										value={arrivalTime}
										onChange={(e) =>
											setarrivalTime(e.target.value)
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
										value={departureTime}
										onChange={(e) =>
											setdepartureTime(
												e.target.value,
											)
										}
									/>
								</div>
							</div>

							<div className="row" style={{ marginTop: 15 }}>
								<div class="form-group col-md-6">
									<label for="Gender">
										Is this an Active Schedule ?{" "}
									</label>
									<br />
									<input
										type="radio"
										id="isActive"
										name="isActive"
										value={true}
										onChange={handleActiveChange}
										checked={isActive}
									/>
									&nbsp;&nbsp;
									Active&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<input
										type="radio"
										id="isActive"
										name="isActive"
										value={false}
										onChange={handleActiveChange}
										checked={!isActive}
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
										onChange={handlePublishChange}
										checked={isPublished}
									/>
									&nbsp;&nbsp; Approve
									publishing&nbsp;&nbsp;&nbsp;&nbsp;
									<input
										type="radio"
										id="isPublished"
										name="isPublished"
										value={false}
										onChange={handlePublishChange}
										checked={!isPublished}
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
									onClick={handleClose}
										type="reset"
										className="btn btn-reset">
										Cancel
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Modal.Body>
		</div>
	);
}
