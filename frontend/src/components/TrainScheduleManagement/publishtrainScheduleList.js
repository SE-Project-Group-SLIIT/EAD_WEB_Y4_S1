import React, { useState } from "react";

import Header from "../shared/Header";

const PublishTrainScheduleList = () => {
	// const [employees, setEmployees] = useState([]);
	// const [showEmp, setShowEmp] = useState(false);
	// const [modalEmp, setEmp] = useState([]);

	// useEffect(() => {
	// 	async function getEmployees() {
	// 		try {
	// 			let respond = await viewAllActiveEmployees();
	// 			if (respond.data) {
	// 				setEmployees(respond.data);
	// 			} else {
	// 				console.log("error");
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}

	// 	getEmployees();
	// }, []);

	return (
        <div className="container pt-2">
		<div className="page-component-body" style={{
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
						<button class="btn btn-ok white" style={{ marginRight: "25px" }}>
							+ &nbsp; New Train Schedule
						</button>
					</a>
                    <a href="/train-schedule/list" class="float-right">
						<button class="btn btn-ok white" style={{ marginRight: "25px" }}>
                        Train Schedules
						</button>
					</a>
					<a href="/train-schedule/list/active" class="float-right">
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
									style={{ width: "80px" }}>
									Train ID
								</th>
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
						{/* {employees.map((employee) => {
							return (
								<tr>
									<td class="text-center">
										{employee.firstName}
									</td>
									<td class="text-center">
										{employee.lastName}
									</td>
									<td class="text-center">
										{employee.address}
									</td>
									<td class="text-center">
										{employee.emailAddress}
									</td>
									<td class="text-center">
										{employee.phoneNumber}
									</td>
									<td class="text-center">
										{employee.nic}
									</td>
									<td class="text-center">
										{employee.designation}
									</td>
								</tr>
							);
						})} */}
					</tbody>
				</table>
			</div>
		</div>
        </div>
	);
};
export default PublishTrainScheduleList;
