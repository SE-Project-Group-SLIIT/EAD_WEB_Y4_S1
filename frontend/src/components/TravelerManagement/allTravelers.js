import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import {viewAllTravelerDetails} from "../../services/util/travelerManagement/travelerService";

export default function AllTravelerList() {

    const [travelerDetails, settravelerDetails] = useState([]);

    useEffect(() => {
		async function getAllTravelerDetails() {
			try {
				let respond = await viewAllTravelerDetails();
				if (respond.data) {
					settravelerDetails(respond.data);
				} else {
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		}

		getAllTravelerDetails();
	}, []);

    return (
        <div>
            <div className="container pt-2">
                <div className="page-component-body" style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 60,
                }}>
                    <Header></Header>

                    <div style={{ width: 1800, marginLeft: 80 }}>
                        <div class="row table-head mt-4 mb-5">
                            <div class="col">
                                <h3 className="float-left">
                                    Traveler Details
                                </h3>
                            </div>
                            <a href="/traveler-profile/add" class="float-right">
                                <button
                                    class="btn btn-ok white"
                                    style={{ marginRight: "25px" }}>
                                    + &nbsp; New Traveler
                                </button>
                            </a>
                            {/* <a
							href="/train-schedule/list/active"
							class="float-right">
							<button
								class="btn btn-ok white"
								style={{ marginRight: "25px" }}>
								Active Travelers
							</button>
						</a>
						<a
							href="/train-schedule/list/publish"
							class="float-right">
							<button class="btn btn-ok white">
                            Publish Train Schedules
							</button>
						</a> */}
                        </div>

                        <table class="table table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th
                                        class="text-center"
                                        style={{ width: "80px" }}>
                                        No.
                                    </th>
                                    <th
                                        class="text-center"
                                        style={{ width: "105px" }}>
                                        NIC
                                    </th>
                                    <th
                                        class="text-center"
                                        style={{ width: "115px" }}>
                                        Full Name
                                    </th>
                                    {/* <th
                                        class="text-center"
                                        style={{ width: "125px" }}>
                                        Last Name
                                    </th> */}
                                    <th
                                        class="text-center"
                                        style={{ width: "120px" }}>
                                        Email
                                    </th>
                                    <th
                                        class="text-center"
                                        style={{ width: "115px" }}>
                                        Mobile
                                    </th>
                                    <th
                                        class="text-center"
                                        style={{ width: "155px" }}>
                                        Status
                                    </th>
                                    <th
                                        class="text-center"
                                        style={{ width: "155px" }}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                            {travelerDetails.map((travelerDetail, index) => {
								return (
									<tr>
                                        <th scope='row'>{index+1}</th>
										<td class="text-center">
											{travelerDetail.nic}
										</td>
										<td class="text-center">
											{travelerDetail.fullName}
										</td>
										{/* <td class="text-center">
											{travelerDetail.lastName}
										</td> */}
										<td class="text-center">
											{travelerDetail.email}
										</td>
										<td class="text-center">
											{travelerDetail.phoneNumber}
										</td>
                                        <td class="text-center">
											{travelerDetail.isActive}
										</td>
										<td class="text-center">
											<button
												class="btn btn-warning btn-sm"
												style={{
													marginRight: "4px",
												}}
												// onClick={() =>
												// 	openModalEmpUpdate(
												// 		trainSchedule,
												// 	)
												// }
                                                >
												Update
											</button>
												<button
													// onClick={() =>
													// 	openModalEmpDelete(
													// 		trainSchedule,
													// 	)
													// }
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

                </div>
            </div>
        </div>
    );
}