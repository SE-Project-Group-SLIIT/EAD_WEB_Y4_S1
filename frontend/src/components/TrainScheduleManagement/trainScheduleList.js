import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { viewAllTrainSchedules } from "../../services/util/trainScheduleManagement";
import { Modal } from "react-bootstrap";
import UpdateTrainSchedule from "./updateTrainSchedule";

export default function TrainScheduleList() {
	// const [search, setSearch] = useState("");

	const [trainSchedules, setTrainSchedules] = useState([]);

	const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
	const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] =
		useState(false);

	const [ModalEmpDelete, setModalEmpDelete] = useState([]);
	const [ModalEmpDeleteConfirm, setModalEmpDeleteConfirm] =
		useState(false);

	const [ModalEmpActive, setModalEmpActive] = useState([]);
	const [ModalEmpActiveConfirm, setModalEmpActiveConfirm] =
		useState(false);

	console.log(trainSchedules);

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

	const openModalEmpUpdate = (data) => {
		setModalEmpUpdate(data);
		setModalEmpUpdateConfirm(true);
	};

	const openModalEmpDelete = (data) => {
		console.log("delEmp");
		setModalEmpDelete(data);
		setModalEmpDeleteConfirm(true);
	};

	const openModalEmpActivate = (data) => {
		console.log("delEmp");
		setModalEmpActive(data);
		setModalEmpActiveConfirm(true);
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
							<h3 className="float-left">Train Schedules</h3>
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
								return (
									<tr>
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
											{/* {trainSchedule.arrivalTime} */}
											{trainSchedule.arrivalTime.slice(11, 19)}
										</td>
										<td class="text-center">
											{/* {trainSchedule.departureTime} */}
											{trainSchedule.departureTime.slice(11, 19)}
										</td>

										<td class="text-center">
											<button
												class="btn btn-warning btn-sm"
												style={{
													marginRight: "4px",
												}}
												onClick={() =>
													openModalEmpUpdate(
														trainSchedule,
													)
												}>
												Update
											</button>
											<button
												onClick={() =>
													openModalEmpDelete(
														trainSchedule,
													)
												}
												class="btn btn-danger btn-sm">
												Cancel
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
					<Modal.Header closeButton>
						<Modal.Title>Confirm Cancellation</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							Are you sure you want to cancel this train
							schedule ?
						</p>
					</Modal.Body>
					<Modal.Footer>
						<div className="row">
							<div className="col -6">
								<button
									type="submit"
									className="btn btn-delete"
									// onClick={() => {
									// 	deleteEmployee(ModalEmpDelete);
									// }}
								>
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
