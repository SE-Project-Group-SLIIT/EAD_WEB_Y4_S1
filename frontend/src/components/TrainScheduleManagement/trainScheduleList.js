import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import {
	viewAllTrainSchedules,
	cancelTrainSchedules,
} from "../../services/util/trainScheduleManagement";
import { Modal } from "react-bootstrap";
import UpdateTrainSchedule from "./updateTrainSchedule";
import Swal from "sweetalert2";

export default function TrainScheduleList() {
	const [trainSchedules, setTrainSchedules] = useState([]);
	const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
	const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] =
		useState(false);
	const [ModalEmpDelete, setModalEmpDelete] = useState([]);
	const [ModalEmpDeleteConfirm, setModalEmpDeleteConfirm] =
		useState(false);

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

	const openModalEmpUpdate = (selectedTrainSchedule) => {
		setModalEmpUpdate(selectedTrainSchedule);
		setModalEmpUpdateConfirm(true);
	};

	const openModalEmpDelete = (selectedTrainSchedule) => {
		setModalEmpDelete(selectedTrainSchedule);
		setModalEmpDeleteConfirm(true);
	};

	const handleCancelTrainSchedule = async (selectedTrainSchedule) => {
		if (selectedTrainSchedule) {
			try {
				await cancelTrainSchedules(
					selectedTrainSchedule.trainScheduleId,
				);
				Swal.fire({
					title: "Success!",
					text: "Train Schedule Cancelled Successfully",
					icon: "success",
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					setModalEmpDeleteConfirm(false);
					window.location.replace("/train-schedule/list");
				});
			} catch (error) {
				const msgerr =
					error.response.data.msg || "An error occurred";
				Swal.fire({
					icon: "warning",
					title: "Oops...",
					text: `${msgerr}`,
					confirmButtonColor: "#1fc191",
				});
			}
		}
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

				<div style={{ width: 2000, marginLeft: 80 }}>
					<div class="row table-head mt-4 mb-5">
						<div class="col">
							<h3 className="float-left">
								All Train Schedules
							</h3>
						</div>
						<a href="/train-schedule/add" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								+ &nbsp; New Train Schedule
							</button>
						</a>
						<a
							href="/train-schedule/list/active"
							class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								Active Train Schedules
							</button>
						</a>
						<a
							href="/train-schedule/list/publish"
							class="float-right">
							<button class="btn btn-ok white">
								Publish Train Schedules
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
									Arrival Station
								</th>
								<th
									class="text-center"
									style={{ width: "125px" }}>
									Departure Station
								</th>
								<th
									class="text-center"
									style={{ width: "120px" }}>
									Arrival Time
								</th>
								<th
									class="text-center"
									style={{ width: "115px" }}>
									Departure Time
								</th>
								<th
									class="text-center"
									style={{ width: "155px" }}>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{trainSchedules.map((trainSchedule) => {
								console.log(trainSchedule.isCancelled);
								return (
									<tr style={{ fontWeight: 600 }}>
										<td class="text-center">
											{trainSchedule.trainName}
										</td>
										<td class="text-center">
											{trainSchedule.arrivalStation}
										</td>
										<td class="text-center">
											{
												trainSchedule.departureStation
											}
										</td>
										<td class="text-center">
											{trainSchedule.arrivalTime.slice(
												11,
												19,
											)}
										</td>
										<td class="text-center">
											{trainSchedule.departureTime.slice(
												11,
												19,
											)}
										</td>

										<td class="text-center">
											<button
												class="btn btn-warning btn-sm"
												style={{
													fontWeight: 600,
													marginRight: "6px",
													color: "brown",
												}}
												onClick={() =>
													openModalEmpUpdate(
														trainSchedule,
													)
												}>
												Update
											</button>
											<button
												style={{
													fontWeight: 600,
													color: "white",
													backgroundColor:
														trainSchedule.isCancelled
															? "#E30B5C"
															: "#191970",
												}}
												disabled={
													trainSchedule.isCancelled
												}
												onClick={() =>
													openModalEmpDelete(
														trainSchedule,
													)
												}
												class="btn btn-sm">
												{trainSchedule.isCancelled
													? "Already Cancelled"
													: "Cancel Schedule"}
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				{/* modal for update employee details */}
				<Modal
					show={ModalEmpUpdateConfirm}
					onHide={() => setModalEmpUpdateConfirm(false)}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<UpdateTrainSchedule
						data={ModalEmpUpdate}
						onHide={() => setModalEmpUpdate(false)}
					/>
				</Modal>

				{/* modal for delete employee details */}
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
						<p style={{ fontWeight: 600 }}>
							Are you sure you want to cancel this train
							schedule ?
						</p>
					</Modal.Body>
					<Modal.Footer>
						<div className="row">
							<div className="col -6">
								<button
									style={{ fontWeight: 600 }}
									type="submit"
									className="btn btn-delete"
									onClick={() => {
										handleCancelTrainSchedule(
											ModalEmpDelete,
										);
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
									style={{ fontWeight: 600 }}
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
