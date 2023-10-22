import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { Modal } from "react-bootstrap";
import {
	deleteTrain,
	viewAllTrains,
} from "../../services/util/trainManagement";
import UpdateTrainPage from "../trainManagement/updateTrainForm";
import Swal from "sweetalert2";

export default function ReservationList() {
	const [trains, setTrains] = useState([]);

	const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
	const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] =
		useState(false);

	const [ModalEmpDelete, setModalEmpDelete] = useState([]);
	const [ModalEmpDeleteConfirm, setModalEmpDeleteConfirm] =
		useState(false);

	useEffect(() => {
		async function getAllTrains() {
			try {
				let respond = await viewAllTrains();
				if (respond.data) {
					setTrains(respond.data);
				} else {
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		}

		getAllTrains();
	}, []);

	console.log(trains);

	const openModalEmpUpdate = (selectedTrain) => {
		setModalEmpUpdate(selectedTrain);
		setModalEmpUpdateConfirm(true);
	};

	const openModalEmpDelete = (selectedTrain) => {
		setModalEmpDelete(selectedTrain);
		setModalEmpDeleteConfirm(true);
	};

	const confirmDelete = async (data) => {
		try {
			await deleteTrain(data.trainId);
			setModalEmpDeleteConfirm(false);
			Swal.fire({
				title: "Success!",
				text: "Train Details Deleted Successfully",
				icon: "success",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				window.location.replace("/train/list");
			});
		} catch (error) {}
	};

	return (
		<div className="container pt-2">
			<div
				className="page-component-body"
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: 60,
				}}>
				<Header></Header>

				<div style={{ width: 1800, marginLeft: 80 }}>
					<div class="row table-head mt-4 mb-5">
						<div class="col">
							<h3 className="float-left">
								Reservation Details
							</h3>
						</div>
						<a href="/train-details/search" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								+ &nbsp; Make Reservation
							</button>
						</a>
						<a href="/reservation-list-previous" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								Previous Reservations
							</button>
						</a>
					</div>

					<table class="table table-hover">
						<thead class="thead-dark">
							<tr>
								<th
									class="text-center"
									style={{ width: "105px" }}>
									Train Name
								</th>
								<th
									class="text-center"
									style={{ width: "115px" }}>
									Arrives
								</th>
								<th
									class="text-center"
									style={{ width: "125px" }}>
									Departs
								</th>
								<th
									class="text-center"
									style={{ width: "120px" }}>
									Train Type
								</th>
                                <th
									class="text-center"
									style={{ width: "100px" }}>
									No of Seats
								</th>
								<th
									class="text-center"
									style={{ width: "155px" }}>
									Traveler Date
								</th>
								<th
									class="text-center"
									style={{ width: "155px" }}>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{trains.map((train) => {
								return (
									<tr key={train.trainId}>
										<td className="text-center">
											{train.trainName}
										</td>
										<td className="text-center">
											{train.arrivalStation}
										</td>
										<td className="text-center">
											{train.departureStation}
										</td>
										<td className="text-center">
											{train.trainType}
										</td>
                                        <td className="text-center">
											{/* {train.trainType} */}
                                            02
										</td>
										<td className="text-center">
											2023/11/05
											{/* <ul>
												{train.trainStations.map(
													(station, index) => (
														<li key={index}>
															{station}
														</li>
													),
												)}
											</ul> */}
										</td>
										<td className="text-center">
											<button
												className="btn btn-warning btn-sm"
												style={{
													marginRight: "4px",
												}}
												onClick={() =>
													openModalEmpUpdate(
														train,
													)
												}>
												Update
											</button>
											<button
												className="btn btn-danger btn-sm"
												style={{
													marginRight: "4px",
												}}
												onClick={() =>
													openModalEmpDelete(
														train,
													)
												}>
												Cancel
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				<Modal
					show={ModalEmpUpdateConfirm}
					onHide={() => setModalEmpUpdateConfirm(false)}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<UpdateTrainPage
						data={ModalEmpUpdate}
						onHide={() => setModalEmpUpdate(false)}
					/>
				</Modal>

				<Modal
					show={ModalEmpDeleteConfirm}
					onHide={() => setModalEmpDeleteConfirm(false)}
					size="md"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header>
						<Modal.Title>Confirm Cancellation</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							Are you sure you want to cancel this
							reservation ?
						</p>
					</Modal.Body>
					<Modal.Footer>
						<div className="row">
							<div className="col -6">
								<button
									type="submit"
									className="btn btn-delete"
									onClick={() => {
										confirmDelete(ModalEmpDelete);
									}}>
									Yes
								</button>
							</div>
							<div
								className="col-6 text-right"
								onClick={() =>
									setModalEmpDeleteConfirm(false)
								}>
								<button
									type="reset"
									className="btn btn-reset">
									No
								</button>
							</div>
						</div>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
}
