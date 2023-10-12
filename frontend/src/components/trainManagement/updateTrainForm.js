/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { updateTrainDetails } from "../../services/util/trainManagement";
import Header from "../shared/Header";

export default function UpdateTrainPage({ data, cl }) {
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

	const destinations = [
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

	const [trainName, settrainName] = useState("");
	const [arrivalStation, setarrivalStation] = useState("");
	const [departureStation, setdepartureStation] = useState("");
	const [trainType, setTrainType] = useState("");
	const [trainStations, setTrainStations] = useState([]);

	useEffect(() => {
		if (data) {
			settrainName(data.trainName);
			setarrivalStation(data.arrivalStation);
			setdepartureStation(data.departureStation);
			setTrainType(data.trainType);
			setTrainStations(data.trainStations);
		}
	}, [data]);

	async function sendData(e) {
		e.preventDefault();

		const updateTrain = {
			trainName,
			arrivalStation,
			departureStation,
			trainType,
			trainStations: trainStations,
		};

		try {
			// Make a PUT request to update the train
			const response = await updateTrainDetails(
				data.trainId,
				updateTrain,
			);
			Swal.fire({
				title: "Success!",
				text: "Train Details Updated Successfully",
				icon: "success",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				window.location.replace("/train/list");
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

	const handleDestinationCheckboxChange = (value) => {
		if (trainStations.includes(value)) {
			setTrainStations(
				trainStations.filter((item) => item !== value),
			);
		} else {
			setTrainStations([...trainStations, value]);
		}
	};

	const [showForm, setShowForm] = useState(true);

	const handleCancelClick = () => {
		setShowForm(false);
		window.location.replace("/train/list");
	};

	return (
		<div>
			<div class="page-component-body">
				<Header></Header>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
					}}>
					{showForm && (
						<div class="container input-main-form-emp pt-3">
							<div class="container border-top">
								<div class="row">
									<div
										class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"
										style={{
											marginTop: 15,
											marginBottom: 8,
										}}>
										<h3 style={{ marginBottom: 50 }}>
											Update Train Form
										</h3>
									</div>
								</div>
								<form
									id="contact-form"
									class="form"
									role="form"
									onSubmit={sendData}>
									<div style={{ marginBottom: 18 }}>
										<label
											style={{
												float: "left",
												marginLeft: 10,
											}}
											for="Train Name">
											Train Name
										</label>
										<input
											type="text"
											class="form-control formInput"
											id="Name"
											name="Name"
											placeholder="Type the Train Name here"
											tabindex="1"
											required
											value={trainName}
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
											style={{ marginTop: 18 }}>
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
												value={arrivalStation}
												onChange={(e) => {
													setarrivalStation(
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
															}
															selected={
																station.value ===
																arrivalStation
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
												value={departureStation}
												onChange={(e) => {
													setdepartureStation(
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
															}
															selected={
																station.value ===
																departureStation
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
										<div
											style={{ marginTop: 18 }}
											class="form-group col-md-3">
											<input
												type="radio"
												id="Slow"
												name="Slow"
												value="Slow"
												checked={
													trainType === "Slow"
												}
												onChange={(e) => {
													setTrainType(
														e.target.value,
													);
												}}
											/>
											&nbsp;&nbsp;
											Slow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										</div>
										<div
											style={{ marginTop: 18 }}
											class="form-group col-md-3">
											<input
												type="radio"
												id="Express"
												name="Express"
												value="Express"
												checked={
													trainType === "Express"
												}
												onChange={(e) => {
													setTrainType(
														e.target.value,
													);
												}}
											/>
											&nbsp;&nbsp; Express
										</div>
									</div>
									<div className="row">
										<div
											style={{ marginTop: 18 }}
											class="form-group col-md-6">
											<label
												style={{
													float: "left",
													marginLeft: 10,
												}}
												for="Name">
												Destinations
											</label>
										</div>
									</div>
									<div className="row">
										{destinations.map(
											(destination) => (
												<div
													style={{
														marginTop: 10,
													}}
													className="form-group col-md-3"
													key={
														destination.value
													}>
													<input
														style={{
															marginRight: 10,
														}}
														type="checkbox"
														id={
															destination.value
														}
														name={
															destination.value
														}
														value={
															destination.value
														}
														checked={trainStations.includes(
															destination.value,
														)}
														onChange={() =>
															handleDestinationCheckboxChange(
																destination.value,
															)
														}
													/>
													<label
														htmlFor={
															destination.value
														}>
														{destination.name}
													</label>
												</div>
											),
										)}
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
												onClick={handleCancelClick}
												type="reset"
												className="btn btn-reset">
												Cancel
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					)}
				</div>
			</div>{" "}
		</div>
	);
}
