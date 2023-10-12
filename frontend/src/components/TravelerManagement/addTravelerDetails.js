import { useState } from "react";
import Header from "../shared/Header";
import Swal from "sweetalert2";
import {addTravelerDetails} from "../../services/util/travelerManagement/travelerService";

export default function AddTravelerDetails() {

    // const [travelerNIC, settravelerNIC] = useState("");
    // const [travelerFullname, settravelerFullname] = useState("");
    // // const [travelerLname, settravelerLname] = useState("");
    // const [travelerEmail, settravelerEmail] = useState("");
    // const [travelerPhone, settravelerPhone] = useState("");
    // const [travelerIsActive, settravelerIsActive] = useState("");

    const [NIC, settravelerNIC] = useState("");
    const [FullName, settravelerFullname] = useState("");
    // const [travelerLname, settravelerLname] = useState("");
    const [Email, settravelerEmail] = useState("");
    const [PhoneNumber, settravelerPhone] = useState("");
    const [IsActive, settravelerIsActive] = useState("");

    async function sendData(e) {
		e.preventDefault();
    
        const newTraveler = {
            NIC,
            FullName,
            // travelerLname,
            Email,
            PhoneNumber,
            IsActive,
        };

        // Send data to the backend
		  try {
            console.log(newTraveler);
			const response = await addTravelerDetails(newTraveler); // Call your backend function
			// Handle success response here
            console.log("response",response)
			Swal.fire({
			  title: "Success!",
			  text: "Traveler Schedule Details Added Successfully",
			  icon: "success",
			  showConfirmButton: false,
			  timer: 2000,
			})
		  } catch (error) {
			// Handle error response here
			const msgerr = error || "An error occurred";
			Swal.fire({
			  icon: "warning",
			  title: "Oops...",
			  text: `${msgerr}`,
			  confirmButtonColor: "#1fc191",
			});
		  }
    }

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
                                <h3 style={{ marginBottom: 50 }}>
                                    Create Traveler Profile
                                </h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form
                                    id="contact-form"
                                    class="form"
                                    role="form"
                                    onSubmit={sendData}
                                >

                                    <div class="form-group col-md-6">
                                        <input
                                            type="text"
                                            class="form-control formInput"
                                            id="nic"
                                            name="nic"
                                            placeholder="Taveler NIC"
                                            tabindex="1"
                                            required
                                            onChange={(e) => {
                                                settravelerNIC(
                                                    e.target.value,
                                                );
                                            }}
                                        />
                                    </div>

                                        <div
                                            class="form-group col-md-6"
                                            style={{ marginTop: 15 }}>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="fullname"
                                                placeholder="Full Name"
                                                tabindex="2"
                                                required
                                                onChange={(e) => {
                                                    settravelerFullname(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                        </div>
                                        {/* <div
                                            class="form-group col-md-6"
                                            style={{ marginTop: 15 }}>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="lname"
                                                placeholder="Last Name"
                                                tabindex="3"
                                                required
                                                onChange={(e) => {
                                                    settravelerLname(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                        </div> */}

                                        <div
                                            class="form-group col-md-6"
                                            style={{ marginTop: 15 }}>
                                            <input
                                                type="email"
                                                class="form-control formInput"
                                                id="email"
                                                placeholder="Email"
                                                tabindex="4"
                                                required
                                                onChange={(e) => {
                                                    settravelerEmail(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div
                                            class="form-group col-md-6"
                                            style={{ marginTop: 15 }}>
                                            <input
                                                type="tel"
                                                class="form-control formInput"
                                                id="phone"
                                                placeholder="Mobile"
                                                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
                                                tabindex="5"
                                                required
                                                onChange={(e) => {
                                                    settravelerPhone(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                        </div>

                                    <div
                                        className="row"
                                        style={{ marginTop: 15 }}>
                                        <div class="form-group col-md-6">
                                            {/* <label for="Gender">
                                                Is this an Active Schedule
                                                ?{" "}
                                            </label>
                                            <br /> */}
                                            <input
                                                type="radio"
                                                id="isActive"
                                                name="isActive"
                                                value="true"
                                                required
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
                                                value = "false" 
                                                required
                                                onChange={(e) => {
                                                    settravelerIsActive(
                                                        true,
                                                    );
                                                }}
                                            />
                                            &nbsp;&nbsp; Deactivate
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