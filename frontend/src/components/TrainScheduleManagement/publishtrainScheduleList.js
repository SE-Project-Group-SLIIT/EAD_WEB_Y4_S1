import React, { useState, useEffect } from "react";
import { viewAllTrainSchedules } from "../../services/util/trainScheduleManagement";
import Header from "../shared/Header";
import { Modal } from "react-bootstrap";
import UpdateTrainSchedule from "./updateTrainSchedule";

const PublishTrainScheduleList = () => {
	// const [employees, setEmployees] = useState([]);
	// const [showEmp, setShowEmp] = useState(false);
	// const [modalEmp, setEmp] = useState([]);

	const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
	const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] =
		useState(false);

	const [ModalEmpDelete, setModalEmpDelete] = useState([]);
	const [ModalEmpDeleteConfirm, setModalEmpDeleteConfirm] =
		useState(false);

	const [ModalEmpActive, setModalEmpActive] = useState([]);
	const [ModalEmpActiveConfirm, setModalEmpActiveConfirm] =
		useState(false);

		const openModalEmpUpdate = (data) => {
			setModalEmpUpdate(data);
			setModalEmpUpdateConfirm(true);
		};

		const openModalEmpDelete = (data) => {
			console.log("delEmp");
			setModalEmpDelete(data);
			setModalEmpDeleteConfirm(true);
		};

	const [trainSchedules, setTrainSchedules] = useState([]);

	useEffect(() => {
		async function getAllTrainSchedules() {
			try {
				let respond = await viewAllTrainSchedules();
				if (respond.data) {
					// Filter the data to get only schedules with isActive = true
					const publishedTrainSchedules = respond.data.filter(
						(schedule) => schedule.isPublished === true,
					);
					setTrainSchedules(publishedTrainSchedules);
					console.log(publishedTrainSchedules);
				} else {
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		}

		getAllTrainSchedules();
	}, []);

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
					<div class="row table-head mt-3">
						<div class="col">
							<h3 className="float-left ">
								Publish Train Schedules List
							</h3>
						</div>
						<a href="/train-schedule/add" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								+ &nbsp; New Train Schedule
							</button>
						</a>
						<a href="/train-schedule/list" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								Train Schedules
							</button>
						</a>
						<a
							href="/train-schedule/list/active"
							class="float-right">
							<button class="btn btn-ok white">
								Active Train Schedules
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
												}
											>
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
};
export default PublishTrainScheduleList;
