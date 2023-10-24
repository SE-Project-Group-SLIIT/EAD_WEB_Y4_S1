/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import Swal from "sweetalert2";
import { addTrain } from "../../services/util/trainManagement";
import Header from "../shared/Header";

export default function MakeReservationPage() {
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
	const [showForm, setShowForm] = useState(true);

	const handleDestinationCheckboxChange = (value) => {
		if (trainStations.includes(value)) {
			setTrainStations(
				trainStations.filter((item) => item !== value),
			);
		} else {
			setTrainStations([...trainStations, value]);
		}
	};

	async function sendData(e) {
		e.preventDefault();

		const newTrain = {
			trainName,
			arrivalStation,
			departureStation,
			trainType,
			trainStations: trainStations,
		};

		try {
			const addedTrain = await addTrain(newTrain);
			Swal.fire({
				title: "Success!",
				text: "Train Details Added Successfully",
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

	const handleCancelClick = () => {
		setShowForm(false);
		window.location.replace("/train/list");
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
										Book Your Ticket
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
                                            fontWeight: 800,
										}}
										for="Train Name">
										Train Name
									</label>
									<input
										type="text"
										class="form-control formInput"
										id="Name"
										name="Name"
										placeholder="Udarata Manike"
										tabindex="1"
										required
										onChange={(e) => {
											settrainName(e.target.value);
										}}
									/>
								</div>
                                {/* <div style={{ marginBottom: 18 }}>
									<label
										style={{
											float: "left",
											marginLeft: 10,
										}}
										for="Train Name">
										Traveler Name
									</label>
									<input
										type="text"
										class="form-control formInput"
										id="Name"
										name="Name"
										placeholder=" "
										tabindex="1"
										required
										onChange={(e) => {
											settrainName(e.target.value);
										}}
									/>
								</div> */}
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
												Traveler Name
											</label>
											<input
										type="text"
										class="form-control formInput"
										id="Name"
										name="Name"
										placeholder=" "
										tabindex="1"
										required
										onChange={(e) => {
											settrainName(e.target.value);
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
												NIC Number
											</label>
											<input
										type="text"
										class="form-control formInput"
										id="Name"
										name="Name"
										placeholder=" "
										tabindex="1"
										required
										onChange={(e) => {
											settrainName(e.target.value);
										}}
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
												for="Booking Date">
												Travel Date
											</label>
											<input
												type="date"
												id="scheduleDatePicker"
												name="datePicker"
												style={{ width: 230 }}
												// value={scheduleDate} // Set the value of the time picker to departureTime
												// onChange={(e) =>
												// 	setscheduleDate(
												// 		e.target.value,
												// 	)
												// }
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
												for="No of Passangers">
												No of Passangers
											</label>
											<input type="number" id="quantity" name="quantity" min="1" max="100"/>
										</div>
									</div>
								<div className="row mt-2 mb-3">
									<div className="col py-3 text-center">
										<button
											type="submit"
											className="btn btn-ok">
											Book
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
		</div>
	);
}
