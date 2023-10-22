import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { Modal } from "react-bootstrap";
import {
	deleteTrain,
	viewAllTrains,
} from "../../services/util/trainManagement";
import UpdateTrainPage from "../trainManagement/updateTrainForm";
import Swal from "sweetalert2";

export default function PreviousReservationList() {
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
								
                                Previous Reservations
							</h3>
						</div>
						<a href="/train-details/search" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								+ &nbsp; Make Reservation
							</button>
						</a>
                        <a href="/reservation-list" class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px", width: 300 }}>
								Current Reservation Details
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
									style={{ width: "105px" }}>
									No of Seats
								</th>
								<th
									class="text-center"
									style={{ width: "155px" }}>
									Traveler Date
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
											05
										</td>
										<td className="text-center">
                                            2023/09/05
										</td>
										<td className="text-center">
											<card 
												style={{
													marginRight: "4px",
                                                    backgroundColor: '#4CBB17',
                                                    color: 'white',
                                                    width: 30,
                                                    padding: 5
												}}
												>
												Completed
											</card>
											
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
