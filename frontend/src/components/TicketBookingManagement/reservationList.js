import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import {
	cancelReservation,
	viewAllBookings,
} from "../../services/util/ticketBookingManagement/bookingService";
import Header from "../shared/Header";
import UpdateTrainPage from "../trainManagement/updateTrainForm";

export default function ReservationList() {
	const [existingBookings, setExistingBookings] = useState([]);

	const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
	const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] =
		useState(false);

	const [ModalEmpDelete, setModalEmpDelete] = useState([]);
	const [ModalEmpDeleteConfirm, setModalEmpDeleteConfirm] =
		useState(false);

	useEffect(() => {
		async function getAllExistingBookings() {
			try {
				const response = await viewAllBookings();
				if (response.data) {
					const currentDate = new Date();
					const isoString = currentDate.toISOString();

					const pastBookings = response.data.filter(
						(booking) => {
							const travelerDate = booking.travelDate;
							return travelerDate > isoString;
						},
					);

					setExistingBookings(pastBookings);
				} else {
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		}

		getAllExistingBookings();
	}, []);

	const openModalEmpUpdate = (selectedTrain) => {
		setModalEmpUpdate(selectedTrain);
		setModalEmpUpdateConfirm(true);
	};

	const openModalEmpDelete = (selectedreservation) => {
		setModalEmpDelete(selectedreservation);
		setModalEmpDeleteConfirm(true);
	};

	const handleCancelReservation = async (selectedreservation) => {
		if (selectedreservation) {
			try {
				await cancelReservation(selectedreservation.bookingId);
				Swal.fire({
					title: "Success!",
					text: "Reservation Cancelled Successfully",
					icon: "success",
					showConfirmButton: false,
					timer: 2000,
				}).then(() => {
					setModalEmpDeleteConfirm(false);
					window.location.replace("/reservation-list");
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

				<div style={{ width: 1800, marginLeft: 80 }}>
					<div class="row table-head mt-4 mb-5">
						<div class="col">
							<h3 className="float-left">
								Reservation Details
							</h3>
						</div>
						<a
							href="/train-details/search"
							class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								+ &nbsp; Make Reservation
							</button>
						</a>
						<a
							href="/reservation-list-previous"
							class="float-right">
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
									style={{ width: "125px" }}>
									Train Name
								</th>
								<th
									class="text-center"
									style={{ width: "115px" }}>
									Booking Date
								</th>
								<th
									class="text-center"
									style={{ width: "125px" }}>
									Reference ID
								</th>
								<th
									class="text-center"
									style={{ width: "120px" }}>
									Travel Date
								</th>
								<th
									class="text-center"
									style={{ width: "100px" }}>
									No of Seats
								</th>
								<th
									class="text-center"
									style={{ width: "115px" }}>
									Status
								</th>
								<th
									class="text-center"
									style={{ width: "250px" }}>
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{existingBookings.map((existingBooking) => {
								const travelDate =
									existingBooking.travelDate;
								const currentDate = new Date();
								const isoString =
									currentDate.toISOString();

								const dateDifference =
									new Date(travelDate) - currentDate;

								const daysDifference =
									dateDifference / (1000 * 60 * 60 * 24);

								const isAtLeast5DaysBefore =
									daysDifference >= 5;

								return (
									<tr key={existingBooking.trainId}>
										<td className="text-center">
											{existingBooking.trainName}
										</td>
										<td className="text-center">
											{existingBooking.bookingDate.slice(
												0,
												10,
											)}
										</td>
										<td className="text-center">
											{existingBooking.travelerId}
										</td>
										<td className="text-center">
											{existingBooking.travelDate.slice(
												0,
												10,
											)}
										</td>
										<td className="text-center">
											{
												existingBooking.numberOfPassengers
											}
										</td>
										<td className="text-center">
											{existingBooking.status}
										</td>
										<td className="text-center">
											{existingBooking.status ===
											"Cancelled" ? (
												<p
													style={{
														color: "red",
													}}>
													Already Cancelled this
													reservation
												</p>
											) : (
												<div>
													{!isAtLeast5DaysBefore ? (
														<p
															style={{
																color: "brown",
															}}>
															Update time
															period is over
														</p>
													) : (
														<button
															className="btn btn-warning btn-sm"
															style={{
																marginRight:
																	"4px",
															}}
															onClick={() =>
																openModalEmpUpdate(
																	existingBooking,
																)
															}>
															Update
														</button>
													)}

													{!isAtLeast5DaysBefore ? (
														<p
															style={{
																color: "blue",
															}}>
															Cancellation
															time period is
															over
														</p>
													) : (
														<button
															className="btn btn-danger btn-sm"
															style={{
																marginRight:
																	"4px",
															}}
															onClick={() =>
																openModalEmpDelete(
																	existingBooking,
																)
															}>
															Cancel
														</button>
													)}
												</div>
											)}
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
										handleCancelReservation(
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
