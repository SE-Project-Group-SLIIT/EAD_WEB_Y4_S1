import React from "react";

import Header from "../shared/Header";

export default function AddTrainSchedule() {

	const railwayStations = [
		{ name: "Colombo Fort", value: "colombo_fort" },
		{ name: "Kandy", value: "kandy" },
		{ name: "Gampaha", value: "gampaha" },
		{ name: "Galle", value: "galle" },
		{ name: "Jaffna", value: "jaffna" },
		{ name: "Matara", value: "matara" },
		{ name: "Badulla", value: "badulla" },
		{ name: "Anuradhapura", value: "anuradhapura" },
		{ name: "Polonnaruwa", value: "polonnaruwa" },
		{ name: "Trincomalee", value: "trincomalee" },
		{ name: "Ella", value: "ella" },
		{ name: "Nuwara Eliya", value: "nuwara_eliya" },
		{ name: "Hikkaduwa", value: "hikkaduwa" },
		{ name: "Negombo", value: "negombo" },
		{ name: "Kurunegala", value: "kurunegala" },
	];

	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [address, setAddress] = useState("");
	// const [nic, setNIC] = useState("");
	// const [dateOfBirth, setDateOfBirth] = useState(moment().format('MM-DD-YYYY'));
	// const [phoneNumber, setPhoneNumber] = useState("");
	// const [emailAddress, setEmailAddress] = useState("");
	// const [gender, setGender] = useState("");
	// const [joiningDate, setJoiningDate] = useState(moment().format('MM-DD-YYYY'));
	// const [designation, setDesignation] = useState("");

	// const [TeleErr, setTeleNoErr] = useState("");
	// const [NICErr, setNICErr] = useState("");

	// async function sendData(e) {
	// 	e.preventDefault();

	// 	const teleValid = TeleValidation();
	// 	const NICValid = NICValidation();

	// 	const newEmployee = {
	// 	  firstName,
	// 	  lastName,
	// 	  address,
	// 	  nic,
	// 	  dateOfBirth,
	// 	  phoneNumber,
	// 	  emailAddress,
	// 	  gender,
	// 	  joiningDate,
	// 	  designation,
	// 	};

	// Send data to the backend
	// 	if (teleValid === true && NICValid === true) {
	// 	  try {
	// 		const response = await addEmployees(newEmployee); // Call your backend function
	// 		// Handle success response here
	// 		Swal.fire({
	// 		  title: "Success!",
	// 		  text: "Employee Details Added Successfully",
	// 		  icon: "success",
	// 		  showConfirmButton: false,
	// 		  timer: 2000,
	// 		}).then(() => {
	// 		  window.location.replace("/all-employee-list");
	// 		});
	// 	  } catch (error) {
	// 		// Handle error response here
	// 		const msgerr = error.response.data.msg || "An error occurred";
	// 		Swal.fire({
	// 		  icon: "warning",
	// 		  title: "Oops...",
	// 		  text: `${msgerr}`,
	// 		  confirmButtonColor: "#1fc191",
	// 		});
	// 	  }
	// 	}
	//   }

	// const TeleValidation = () => {
	// 	//validate function

	// 	const TeleErr = {}; //State
	// 	let teleValid = true; //setting flag

	// 	if (phoneNumber.trim().length > 10) {
	// 		TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
	// 		// alert("**Invalid Telephone Number");
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops...Invalid Telephone Number",
	// 			text: "You enterd Invalid Telephone Number , Try Again !!",
	// 			confirmButtonColor: "#1fc191",
	// 			// footer: '<a href=""#home">Why do I have this issue?</a>'
	// 		});
	// 		teleValid = false;
	// 	} else if (phoneNumber.trim().length < 10) {
	// 		TeleErr.InValidTeleNo = " *Invalid Telephone Number"; // error msg
	// 		// alert("**Invalid Telephone Number");
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops...Invalid Telephone Number",
	// 			text: "You enterd Invalid Telephone Number , Try Again !!",
	// 			confirmButtonColor: "#1fc191",
	// 			// footer: '<a href=""#home">Why do I have this issue?</a>'
	// 		});
	// 		teleValid = false;
	// 	}

	// 	setTeleNoErr(TeleErr); //update error objects

	// 	return teleValid;
	// };

	// const NICValidation = () => {
	// 	const NICErr = {}; //State
	// 	let NICValid = true; //setting flag

	// 	if (nic.trim().length > 12) {
	// 		NICErr.InValidNIC = " Invalid NIC Number"; // error msg
	// 		// alert("**Invalid NIC Number");
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops...Invalid NIC Number",
	// 			text: "You enterd invalid NIC , Try Again !!",
	// 			confirmButtonColor: "#1fc191",
	// 			// footer: '<a href=""#home">Why do I have this issue?</a>'
	// 		});
	// 		NICValid = false;
	// 	} else if (nic.trim().length < 10) {
	// 		NICErr.InValidNIC = " Invalid NIC Number"; // error msg
	// 		// alert("**Invalid NIC Number");
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops... Invalid NIC Number",
	// 			text: "You enterd invalid NIC , Try Again !!",
	// 			confirmButtonColor: "#1fc191",
	// 			// footer: '<a href=""#home">Why do I have this issue?</a>'
	// 		});
	// 		NICValid = false;
	// 	}

	// 	setNICErr(NICErr); //update error objects
	// 	return NICValid;
	// };

	// const [isMobileValid, setMobileIsValid] = useState(false);
	// const [Mobilemessage, setMobileMessage] = useState("");

	// const MobileRegex =
	// 	/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

	// const validateMobile = (event) => {
	// 	const mobile = event.target.value;
	// 	if (MobileRegex.test(mobile)) {
	// 		setMobileIsValid(true);
	// 		setMobileMessage("Your Mobile Number looks good!");
	// 	} else {
	// 		setMobileIsValid(false);
	// 		setMobileMessage("Please enter a valid Mobile Number!");
	// 	}
	// };

	// const [isValid, setIsValid] = useState(false);
	// const [message, setMessage] = useState("");

	// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

	// const validateEmail = (event) => {
	// 	const email = event.target.value;
	// 	if (emailRegex.test(email)) {
	// 		setIsValid(true);
	// 		setMessage("Your email looks good!");
	// 	} else {
	// 		setIsValid(false);
	// 		setMessage("Please enter a valid email!");
	// 	}
	// };

	// const [isNICValid, setNICIsValid] = useState(false);
	// const [NICmessage, setNICMessage] = useState("");

	// const NICRegex1 =
	// 	/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][V.v]$/;
	// const NICRegex2 =
	// 	/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

	// const validateNIC = (event) => {
	// 	const NIC = event.target.value;
	// 	if (NICRegex1.test(NIC)) {
	// 		setNICIsValid(true);
	// 		setNICMessage("Your NIC looks good!");
	// 	} else if (NICRegex2.test(NIC)) {
	// 		setNICIsValid(true);
	// 		setNICMessage("Your NIC looks good!");
	// 	} else {
	// 		setNICIsValid(false);
	// 		setNICMessage("Please enter a valid NIC Number!");
	// 	}
	// };

	return (
		<div class="page-component-body">
			<Header></Header>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: 100,
				}}>
				<div class="container input-main-form-emp pt-3">
					<div class="container border-top">
						<div class="row">
							<div
								class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"
								style={{ marginTop: 15, marginBottom: 8 }}>
								<h3 style={{marginBottom: 50}}>
									Create Train Schedules
								</h3>
							</div>
						</div>
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<form
									id="contact-form"
									class="form"
									role="form"
									// onSubmit={sendData}
								>
									{/* <div className="row"> */}
	
										<div class="form-group col-md-6">
											<input
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												placeholder="Train Name"
												tabindex="1"
												required
												// onChange={(e) => {
												// 	setLastName(
												// 		e.target.value,
												// 	); // assign value
												// }}
											/>
										</div>
									{/* </div> */}
									<div className="row">
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
												}}
												for="Name">
												Arrival Station
											</label>
											<select
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												placeholder="Arrival Station"
												tabindex="1"
												required
												// onChange={(e) => {
												// 	setFirstName(
												// 		e.target.value,
												// 	); // assign value
												// }}
											>
												{railwayStations.map(
													(station) => (
														<option
															key={
																station.value
															}
															value={
																station.value
															}>
															{station.name}
														</option>
													),
												)}
											</select>
										</div>
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											<label
												style={{
													float: "left",
													marginLeft: 10,
												}}
												for="Name">
												Departure Station
											</label>
											<select
												type="text"
												class="form-control formInput"
												id="Name"
												name="Name"
												placeholder="Departure Station"
												tabindex="1"
												required
												// onChange={(e) => {
												// 	setLastName(
												// 		e.target.value,
												// 	); // assign value
												// }}
											>
												{railwayStations.map(
													(station) => (
														<option
															key={
																station.value
															}
															value={
																station.value
															}>
															{station.name}
														</option>
													),
												)}
											</select>
										</div>
									</div>

									<div className="row">
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											{/* <label class="form-label" for="Email">Email : </label> */}
											<input
												type="email"
												class="form-control formInput"
												id="Email"
												placeholder="Arrival Time"
												tabindex="6"
												required
												// onChange={(e) => {
												// 	setEmailAddress(
												// 		e.target.value,
												// 	); //assign value
												// 	validateEmail(e);
												// }}
											/>
										</div>
										<div
											class="form-group col-md-6"
											style={{ marginTop: 15 }}>
											{/* <label class="form-label" for="Phone">Phone : </label> */}
											<input
												type="text"
												class="form-control formInput"
												id="Phone"
												placeholder="Departure Time"
												tabindex="5"
												required
												// onChange={(e) => {
												// 	setPhoneNumber(
												// 		e.target.value,
												// 	);
												// 	validateMobile(e);
												// }}
											/>
										</div>
									</div>

									<div
										className="row"
										style={{ marginTop: 15 }}>
										<div class="form-group col-md-6">
											<label for="Gender">
												Is this an Active Schedule
												?{" "}
											</label>
											<br />
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value="Active"
												required
												// onChange={(e) => {
												// 	setGender(
												// 		e.target.value,
												// 	);
												// }}
											/>
											&nbsp;&nbsp;
											Active&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value="Inactive"
												required
												// onChange={(e) => {
												// 	setGender(
												// 		e.target.value,
												// 	);
												// 	// {' '}
												// }}
											/>
											&nbsp;&nbsp; Inactive
										</div>
										<div class="form-group col-md-6">
											<label for="Gender">
												Do you want to publish this
												Schedule ?
											</label>
											<br />
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value="Active"
												required
												// onChange={(e) => {
												// 	setGender(
												// 		e.target.value,
												// 	);
												// }}
											/>
											&nbsp;&nbsp; Approve
											publishing&nbsp;&nbsp;&nbsp;&nbsp;
											<input
												type="radio"
												id="isActive"
												name="isActive"
												value="Inactive"
												required
												// onChange={(e) => {
												// 	setGender(
												// 		e.target.value,
												// 	);
												// 	// {' '}
												// }}
											/>
											&nbsp;&nbsp; Decline publishing
										</div>
									</div>

									<div className="row mt-2 mb-3">
										<div className="col py-3 text-center">
											<button
												type="submit"
												className="btn btn-ok">
												Add
											</button>
										</div>
										<div className="col py-3 text-center">
											<button
												type="reset"
												className="btn btn-reset">
												Cancel
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
