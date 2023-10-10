import React, { useState, useEffect } from "react";
import { viewAllTrainSchedules } from "../../services/util/trainScheduleManagement";
import Header from "../shared/Header";

const ActiveTrainScheduleList = () => {
	// const [employees, setEmployees] = useState([]);
	// const [showEmp, setShowEmp] = useState(false);
	// const [modalEmp, setEmp] = useState([]);
	const [trainSchedules, setTrainSchedules] = useState([]);

	useEffect(() => {
		async function getAllTrainSchedules() {
		  try {
			let respond = await viewAllTrainSchedules();
			if (respond.data) {
			  // Filter the data to get only schedules with isActive = true
			  const activeTrainSchedules = respond.data.filter(schedule => schedule.isActive === true);
			  setTrainSchedules(activeTrainSchedules);
			  console.log(activeTrainSchedules);
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
								Active Train Schedules List
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
								{/* <th
									class="text-center"
									style={{ width: "80px" }}>
									Train ID
								</th> */}
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
										{trainSchedule.departureStation}
									</td>								
									<td class="text-center">
										{trainSchedule.arrivalTime}
									</td>
									<td class="text-center">
										{trainSchedule.departureTime}
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
	);
};
export default ActiveTrainScheduleList;
