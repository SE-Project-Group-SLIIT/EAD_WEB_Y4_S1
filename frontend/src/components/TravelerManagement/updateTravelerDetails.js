

import { React, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import {updateTraveler} from "../../services/util/travelerManagement/travelerService";

export default function UpdateTravelerDetails({data, cl}){
    const [NIC, settravelerNIC] = useState("");
    const [FullName, settravelerFullname] = useState("");
    const [Email, settravelerEmail] = useState("");
    const [PhoneNumber, settravelerPhone] = useState("");
    const [IsActive, settravelerIsActive] = useState("");

    useEffect(() => {
		console.log("data",data);
        if(data){
            settravelerNIC(data.nic);
            settravelerFullname(data.fullName);
            settravelerEmail(data.email);
            settravelerPhone(data.phoneNumber);
            settravelerIsActive(data.isActive);
        }
    }, [data]);

    async function sendData(e) {
		e.preventDefault();

        const updateTravelerDetails = {
            NIC,
            FullName,
            Email,
            PhoneNumber,
            IsActive //: IsActive === true,
        };

        try {
			console.log("data2",data.NIC);
			const response = await updateTraveler(
				updateTravelerDetails.NIC,
				updateTravelerDetails,
			);
			Swal.fire({
				title: "Success!",
				text: "Traveler Details Updated Successfully",
				icon: "success",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				window.location.replace("/traveler-profile/list");
			});
		} catch (error) {
			const msgerr = error.response.data.msg || "An error occurred";
			Swal.fire({
				icon: "warning",
				title: "Oops...",
				text: `${msgerr}`,
				confirmButtonColor: "#1fc191",
			});
		}
    }
    return (
		<div>
			<Modal.Header>
				<Modal.Title>Update Traveler Details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<form
							id="contact-form"
							class="form"
							role="form"
							onSubmit={sendData}>
							<div class="row">
								<div class="form-group col-md-8">
									<label
										style={{
											float: "left",
											marginLeft: 10,
											fontWeight: 800,
										}}
										for="Name">
										Full Name
									</label>
									<input
										type="text"
										class="form-control formInput"
										id="Arrival"
										placeholder="Train Name"
										tabindex="5"
										value={FullName}
										onChange={(e) =>
											settravelerFullname(e.target.value)
										}
									/>
								</div>
							</div>
							<div className="row">
								<div
									class="form-group col-md-6"
									style={{ marginTop: 15 }}>
									<label
										style={{
											float: "left",
											marginLeft: 10,
											fontWeight: 800,
										}}
										for="Name">
										Email
									</label>
									<input
										type="email"
										class="form-control formInput"
										id="Arrival"
										placeholder="Arrival Station"
										tabindex="5"
										value={Email}
                                        onChange={(e) =>
											settravelerEmail(e.target.value)
										}
									/>
								</div>
								<div
									class="form-group col-md-6"
									style={{ marginTop: 15 }}>
									<label
										style={{
											float: "left",
											marginLeft: 10,
											fontWeight: 800,
										}}
										for="Name">
										Mobile
									</label>
									<input
										type="tel"
										class="form-control formInput"
										id="departure"
										placeholder="Departure Station"
										tabindex="5"
										value={PhoneNumber}
                                        onChange={(e) =>
											settravelerPhone(e.target.value)
										}
									/>
								</div>
							</div>
							
							<div className="row" style={{ marginTop: 15 }}>
								<div class="form-group col-md-6">
									<label for="Status" style={{
											float: "left",
											marginLeft: 10,
											fontWeight: 800,
										}}>
										Traveler Status{" "}
									</label>
									<br />
									<div class="form-check form-check-inline">
										<input class="" type="radio" name="inlineRadioOptions" id="inlineRadio1" checked={IsActive === true} 
											onChange={(e) => {
												settravelerIsActive(
													true,
											);
										}}/>
										<label class="form-check-label" for="inlineRadio1"> &nbsp;&nbsp; Active</label>
									</div> &nbsp;&nbsp;
									<div class="form-check form-check-inline">
										<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" checked={IsActive === false} 
											onChange={(e) => {
												settravelerIsActive(
													false,
												);
											}}
										/>
										<label class="form-check-label" for="inlineRadio2"> &nbsp; Inactive</label>
									</div>


									{/* <label for="Status">
										Traveler Status{" "}
									</label>
									<br />
									<input
										type="radio"
										id="isActive"
										name="isActive"
										value={IsActive}
										onChange={(e) => {
											settravelerIsActive(
												true,
											);
										}}
									/>
									&nbsp;&nbsp;
									Activate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<input
										type="radio"
										id="isActive"
										name="isActive"
										value={IsActive}
										onChange={(e) => {
											settravelerIsActive(
												false,
											);
										}}
									/>
									&nbsp;&nbsp; Deactivate */}
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
			</Modal.Body>
		</div>
	);
}