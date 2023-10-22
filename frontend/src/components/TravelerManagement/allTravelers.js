import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { viewAllTravelerDetails, deleteTraveler } from "../../services/util/travelerManagement/travelerService";
import UpdateTravelerDetails from "./updateTravelerDetails";
import Swal from "sweetalert2";
import { Modal } from "react-bootstrap";

export default function AllTravelerList() {

    const [travelerDetails, settravelerDetails] = useState([]);

    const [ModalTravelerUpdate, setModalTravelerUpdate] = useState([]);
    const [ModalTravelerUpdateConfirm, setModalTravelerUpdateConfirm] =
        useState(false);

    const [ModalTravelerDelete, setModalTravelerDelete] = useState([]);
    const [ModalTravelerDeleteConfirm, setModalTravelerDeleteConfirm] =
        useState(false);

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

    const openModalTravelerUpdate = (selectedTraveler) => {
        setModalTravelerUpdate(selectedTraveler);
        setModalTravelerUpdateConfirm(true);
    };

    const openModalTravelerDelete = (selectedTraveler) => {
        setModalTravelerDelete(selectedTraveler);
        setModalTravelerDeleteConfirm(true);
    };

    const confirmDelete = async (data) => {
		try {
			await deleteTraveler(data.nic);
			setModalTravelerDeleteConfirm(false);
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
                                            <th scope='row'>{index + 1}</th>
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
                                                {travelerDetail.isActive === true ? "Active" : "Inactive"}
                                            </td>
                                            <td class="text-center">
                                                <button
                                                    class="btn btn-warning btn-sm"
                                                    style={{
                                                        marginRight: "4px",
                                                    }}
                                                    onClick={() =>
                                                        openModalTravelerUpdate(
                                                            travelerDetail,
                                                        )
                                                    }
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        openModalTravelerDelete(
                                                            travelerDetail
                                                        )
                                                    }
                                                    class="btn btn-danger btn-sm">
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <Modal
                        show={ModalTravelerUpdateConfirm}
                        onHide={() => setModalTravelerUpdateConfirm(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <UpdateTravelerDetails
                            data={ModalTravelerUpdate}
                            onHide={() => setModalTravelerUpdate(false)}
                        />
                    </Modal>

                    <Modal
                        show={ModalTravelerDeleteConfirm}
                        onHide={() => setModalTravelerDeleteConfirm(false)}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header>
                            <Modal.Title>Confirm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Are you sure you want to delete this traveler?
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="row">
                                <div className="col -6">
                                    <button
                                        type="submit"
                                        className="btn btn-delete"
                                        onClick={() => {
                                            confirmDelete(ModalTravelerDelete);
                                        }}>
                                        Yes
                                    </button>
                                </div>
                                <div
                                    className="col-6 text-right"
                                    onClick={() =>
                                        setModalTravelerDeleteConfirm(false)
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
        </div>
    );
}