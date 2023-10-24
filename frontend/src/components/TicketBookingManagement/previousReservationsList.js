import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { viewAllBookings } from "../../services/util/ticketBookingManagement/bookingService";

export default function PreviousReservationList() {
	const [existingBookings, setExistingBookings] = useState([]);

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
							return travelerDate < isoString;
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
						<a
							href="/train-details/search"
							class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								+ &nbsp; Make Reservation
							</button>
						</a>
						<a href="/reservation-list" class="float-right">
							<button
								class="btn btn-ok white"
								style={{
									marginRight: "25px",
									width: 300,
								}}>
								Current Reservation Details
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
									style={{ width: "155px" }}>
									Status
								</th>
								{/* <th
									class="text-center"
									style={{ width: "155px" }}>
									Action
								</th> */}
							</tr>
						</thead>
						<tbody>
							{existingBookings.map((existingBooking) => {
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
											<card
												style={{
													marginRight: "4px",
													backgroundColor:
														"#4CBB17",
													color: "white",
													width: 30,
													padding: 5,
												}}>
												{existingBooking.status}
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
