import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Header from "../shared/Header";
import { fetchAvailableTrains } from "../../services/util/ticketBookingManagement/bookingService";

export default function checkAvailableTrains() {

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

    const [bookingDate, setBookingDate] = useState(null);
    const [arrivalStation, setArrivalStation] = useState('');
    const [departureStation, setDepartureStation] = useState('');
    const [trains, setTrains] = useState([]);
    const [error, setError] = useState(null);

    async function sendData(e) {
        e.preventDefault();
        try {
            const availableTrains = await fetchAvailableTrains({
                bookingDate,
                arrivalStation,
                departureStation
            });
            setTrains(availableTrains);
            Swal.fire({
                title: "Success!",
                text: "Train Details Fetched Successfully",
                icon: "success",
                timer: 2000,
            });
        } catch (error) {
            const errorMsg = error.response?.data?.msg || "An error occurred";
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: `${errorMsg}`,
                confirmButtonColor: "#1fc191",
            });
            setError(errorMsg);
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
                                    Train Ticket Booking
                                </h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form
                                    id="contact-form"
                                    class="form"
                                    role="form"
                                    onSubmit={sendData}>

                                    <div className="row">
                                        <div
                                            class="form-group col-md-7"
                                            style={{ marginTop: 15 }}>
                                            <label
                                                style={{
                                                    float: "left",
                                                    marginLeft: 10,
                                                    fontWeight: 800,
                                                }}
                                                for="Schedule Date">
                                                Booking Date
                                            </label>
                                            <input
                                                type="date"
                                                id="scheduleDatePicker"
                                                name="datePicker"
                                                style={{ width: 230 }}
                                                value={scheduleDate} // Set the value of the time picker to departureTime
                                                onChange={(e) =>
                                                    setBookingDate(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div
                                        class="form-group col-md-6"
                                        style={{ marginTop: 18 }}>
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
                                            onChange={(e) => {
                                                setArrivalStation(
                                                    e.target.value,
                                                );
                                            }}>
                                            {railwayStations.map(
                                                (station) => (
                                                    <option
                                                        key={station.value}
                                                        value={
                                                            station.value
                                                        }>
                                                        {station.name}
                                                    </option>
                                                ),
                                            )}
                                        </select>
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
                                                onChange={(e) => {
                                                    setDepartureStation(
                                                        e.target.value,
                                                    );
                                                }}>
                                                {railwayStations.map(
                                                    (station) => (
                                                        <option
                                                            key={station.value}
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
                                    <div className="row mt-2 mb-3">
									<div className="col py-3 text-center">
										<button
											type="submit"
											className="btn btn-ok">
											Search
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