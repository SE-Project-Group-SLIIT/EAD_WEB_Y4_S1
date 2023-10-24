import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { Modal } from "react-bootstrap";
import { viewAllTrains } from "../../services/util/trainManagement";
import UpdateTrainPage from "./updateTrainForm";
import ViewSelectedTrainDetailsPage from "./viewSelectedTrainDetails";

export default function TrainListTable() {
	const [trains, setTrains] = useState([]);

	const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
	const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] =
		useState(false);

	const [ModalEmpView, setModalEmpView] = useState([]);
	const [ModalEmpViewConfirm, setModalEmpViewConfirm] =
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

	const openModalEmpView = (selectedTrain) => {
		setModalEmpView(selectedTrain);
		setModalEmpViewConfirm(true);
	};

	// const confirmDelete = async (data) => {
	// 	try {
	// 		await deleteTrain(data.trainId);
	// 		setModalEmpViewConfirm(false);
	// 		Swal.fire({
	// 			title: "Success!",
	// 			text: "Train Details Deleted Successfully",
	// 			icon: "success",
	// 			showConfirmButton: false,
	// 			timer: 2000,
	// 		}).then(() => {
	// 			window.location.replace("/train/list");
	// 		});
	// 	} catch (error) {}
	// };

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
								Train List Details
							</h3>
						</div>
						<a href="/train/add" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								+ &nbsp; New Train
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
									Train Type
								</th>
								<th
									class="text-center"
									style={{ width: "155px" }}>
									Destinations
								</th>
								<th
									class="text-center"
									style={{ width: "115px" }}>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{trains.map((train) => {
								return (
									<tr
										key={train.trainId}
										style={{ fontWeight: 600 }}>
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
											<ul>
												{train.trainStations.map(
													(station, index) => (
														<li key={index}>
															{station}
														</li>
													),
												)}
											</ul>
										</td>
										<td className="text-center">
											<button
												className="btn btn-warning btn-sm"
												style={{
													marginRight: "4px",
													fontWeight: 600,
													color: "brown",
												}}
												onClick={() =>
													openModalEmpUpdate(
														train,
													)
												}>
												Update
											</button>
											<button
												className="btn btn-sm"
												style={{
													marginRight: "4px",
													backgroundColor:
														"#4CBB17",
													fontWeight: 600,
													color: "white",
												}}
												onClick={() =>
													openModalEmpView(train)
												}>
												View
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
					show={ModalEmpViewConfirm}
					onHide={() => setModalEmpViewConfirm(false)}
					size="md"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<ViewSelectedTrainDetailsPage
						data={ModalEmpView}
						onHide={() => setModalEmpView(false)}
					/>
				</Modal>
			</div>
		</div>
	);
}
