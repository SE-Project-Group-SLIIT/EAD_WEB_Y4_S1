import React from "react";
import Header from "../shared/Header";

export default function TrainScheduleList() {
	// const [search, setSearch] = useState("");

	// const [employees, setEmployees] = useState([]);

	// const [ModalEmpUpdate, setModalEmpUpdate] = useState([]);
	// const [ModalEmpUpdateConfirm, setModalEmpUpdateConfirm] =
	// 	useState(false);

	// const [ModalEmpDelete, setModalEmpDelete] = useState([]);
	// const [ModalEmpDeleteConfirm, setModalEmpDeleteConfirm] =
	// 	useState(false);

    //     const [ModalEmpActive, setModalEmpActive] = useState([]);
    //     const [ModalEmpActiveConfirm, setModalEmpActiveConfirm] =
    //         useState(false);

	// useEffect(() => {
	// 	async function getEmployees() {
	// 		try {
	// 			let respond = await viewEmployees();
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

	// const deleteEmployee = async (id) => {
	// 	try {
	// 		const response = await inactiveEmployee(id);
	// 		// You can handle the response as needed
	// 		if (response.status === 200) {
	// 			// Employee was made inactive successfully
	// 			return response.data;
	// 		} else {
	// 			// Handle the error case
	// 			throw new Error("Failed to make the employee inactive");
	// 		}
	// 	} catch (error) {
	// 		// Handle any other errors
	// 		console.error("An error occurred:", error);
	// 		throw error;
	// 	}
	// 	// console.log("deleteEmployee...", data);
	// 	// await axios
	// 	// 	.post("http://localhost:8070/REmployee/addRemovedEmp/", {
	// 	// 		data,
	// 	// 	})
	// 	// 	.then(() => {
	// 	// 		Swal.fire({
	// 	// 			title: "Success!",
	// 	// 			text: "Permenantly deleted the Employee Record",
	// 	// 			icon: "success",
	// 	// 			showConfirmButton: false,
	// 	// 			timer: 1500,
	// 	// 		});
	// 	// 		console.log("Emp delete modal....");

	// 	// 		console.log(ModalEmpDelete);
	// 	// 		const value = axios.post(
	// 	// 			"http://localhost:8070/employee/deleteEmp",
	// 	// 			ModalEmpDelete,
	// 	// 		);
	// 	// 		if (value) {
	// 	// 			Swal.fire({
	// 	// 				title: "Success!",
	// 	// 				text: "Permenantly deleted the Employee Record &  added successfully into the Removed Employee List !!",
	// 	// 				icon: "success",
	// 	// 				showConfirmButton: false,
	// 	// 				timer: 2000,
	// 	// 			}).then(() => {
	// 	// 				console.log("111111111111");
	// 	// 				window.location.reload();
	// 	// 			});
	// 	// 		}
	// 	// 	})
	// 	// 	.catch((err) => {
	// 	// 		Swal.fire({
	// 	// 			icon: "error",
	// 	// 			title: "Oops...",
	// 	// 			text: "Something went wrong!",
	// 	// 			confirmButtonColor: "#207159",
	// 	// 		}).then(() => {
	// 	// 			window.location.reload();
	// 	// 		});
	// 	// 		alert(err.response.data.errorCode);
	// 	// 	});
	// };

    // const restoreEmployee = async (id) => {
	// 	try {
	// 		const response = await activeEmployee(id);
	// 		// You can handle the response as needed
	// 		if (response.status === 200) {
	// 			// Employee was made inactive successfully
	// 			return response.data;
	// 		} else {
	// 			// Handle the error case
	// 			throw new Error("Failed to make the employee inactive");
	// 		}
	// 	} catch (error) {
	// 		// Handle any other errors
	// 		console.error("An error occurred:", error);
	// 		throw error;
	// 	}
	// };

	// const openModalEmpUpdate = (data) => {
	// 	setModalEmpUpdate(data);
	// 	setModalEmpUpdateConfirm(true);
	// };

	// const openModalEmpDelete = (data) => {
	// 	console.log("delEmp");
	// 	setModalEmpDelete(data);
	// 	setModalEmpDeleteConfirm(true);
	// };

    // const openModalEmpActivate = (data) => {
	// 	console.log("delEmp");
	// 	setModalEmpActive(data);
	// 	setModalEmpActiveConfirm(true);
	// };

	return (
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
								Train Schedules
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
										<td class="text-center">
											<button
												class="btn btn-warning btn-sm"
												style={{
													marginRight: "4px",
												}}
												onClick={() =>
													openModalEmpUpdate(
														employee,
													)
												}>
												Update
											</button>
											{employee.isActive ? ( // Check if employee.isActive is true
												<button
													onClick={() =>
														openModalEmpDelete(
															employee,
														)
													}
													class="btn btn-danger btn-sm">
													Inactive
												</button>
											) : (
												// If employee.isActive is false
												<button
													onClick={() =>
														openModalEmpActivate(
															employee,
														)
													}
													class="btn btn-success btn-sm">
													Active
												</button>
											)}
										</td>
									</tr>
								);
							})} */}
						</tbody>
					</table>
				</div>

				{/* modal for update employee details */}
				{/* <Modal
					show={ModalEmpUpdateConfirm}
					onHide={() => setModalEmpUpdateConfirm(false)}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<UpdateEmployee
						data={ModalEmpUpdate}
						onHide={() => setModalEmpUpdate(false)}
					/>
				</Modal> */}

				{/* modal for delete employee details */}
				{/* <Modal
					show={ModalEmpDeleteConfirm}
					onHide={() => setModalEmpDeleteConfirm(false)}
					size="md"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header closeButton>
						<Modal.Title>Confirm Deletion</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							Would you like to remove this employee's
							details ?
						</p>
					</Modal.Body>
					<Modal.Footer>
						<div className="row">
							<div className="col -6">
								<button
									type="submit"
									className="btn btn-delete"
									onClick={() => {
										deleteEmployee(ModalEmpDelete);
									}}>
									Confirm
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
									cancel
								</button>
							</div>
						</div>
					</Modal.Footer>
				</Modal> */}

                	{/* modal for active employee details */}
				{/* <Modal
					show={ModalEmpActiveConfirm}
					onHide={() => setModalEmpActiveConfirm(false)}
					size="md"
					aria-labelledby="contained-modal-title-vcenter"
					centered>
					<Modal.Header closeButton>
						<Modal.Title>Confirm Activation</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							Would you like to active this employee's
							details ?
						</p>
					</Modal.Body>
					<Modal.Footer>
						<div className="row">
							<div className="col -6">
								<button
									type="submit"
									className="btn btn-delete"
									onClick={() => {
										restoreEmployee(ModalEmpActive);
									}}>
									Confirm
								</button>
							</div>
							<div
								className="col-6 text-right"
								onClick={() =>
									setModalEmpActiveConfirm(false)
								}>
								<button
									type="reset"
									className="btn btn-reset">
									cancel
								</button>
							</div>
						</div>
					</Modal.Footer>
				</Modal> */}
			</div>
		</div>
	);
}
