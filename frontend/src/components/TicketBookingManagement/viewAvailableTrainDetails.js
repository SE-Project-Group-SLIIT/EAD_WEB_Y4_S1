import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { viewAllTrainSchedules } from "../../services/util/trainScheduleManagement";
import Header from "../shared/Header";

export default function ViewAvailableTrainDerails() {
	const railwayStations = [
		{ name: "Colombo Fort", value: "colombo_fort" },
		{ name: "Kandy", value: "kandy" },
		{ name: "Gampaha", value: "gampaha" },
		{ name: "Galle", value: "Galle" },
		{ name: "Jaffna", value: "jaffna" },
		{ name: "Matara", value: "matara" },
		{ name: "Badulla", value: "badulla" },
		{ name: "Anuradhapura", value: "anuradhapura" },
		{ name: "Polonnaruwa", value: "polonnaruwa" },
		{ name: "Trincomalee", value: "trincomalee" },
		{ name: "Ella", value: "ella" },
		{ name: "Nuwara Eliya", value: "nuwara Eliya" },
		{ name: "Hikkaduwa", value: "hikkaduwa" },
		{ name: "Negombo", value: "negombo" },
		{ name: "Kurunegala", value: "kurunegala" },
		{ name: "Ragama", value: "ragama" },
		{ name: "Veyangoda", value: "veyangoda" },
		{ name: "Mirigama", value: "mirigama" },
		{ name: "Polgahawela", value: "polgahawela" },
		{ name: "Maradana", value: "maradana" },
		{ name: "Kollupitiya", value: "kollupitiya" },
		{ name: "Peradeniya", value: "peradeniya" },
		{ name: "Matale", value: "matale" },
		{ name: "Gampola", value: "gampola" },
	];

	const [bookingDate, setBookingDate] = useState(Date);
	const [arrivalStation, setArrivalStation] = useState("");
	const [departureStation, setDepartureStation] = useState("");
	const [trains, setTrains] = useState([]);
	const [error, setError] = useState(null);
	const [trainSchedules, setTrainSchedules] = useState([]);
	const [filteredTrainSchedules, setFilteredTrainSchedules] = useState(
		[],
	);
	const navigate = useNavigate();

	useEffect(() => {
		async function getAllTrainSchedules() {
			try {
				let respond = await viewAllTrainSchedules();
				if (respond.data) {
					setTrainSchedules(respond.data);
				} else {
					console.log("error");
				}
			} catch (error) {
				console.log(error);
			}
		}

		getAllTrainSchedules();
	}, []);

    const handleMakeReservation = () => {
        navigate("/make-reservation")
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
								<h3 style={{ marginBottom: 40 }}>
									Available Train Schedules
								</h3>
							</div>
						</div>
						<div>
							<Card
								style={{
									height: 200,
									width: 740,
									backgroundColor: "#87CEEB",
									marginBottom: 50,
									borderRadius: 20,
								}}>
								<Card.Body style={{ marginLeft: 20 }}>
									<div
										class="row"
										style={{
											marginBottom: 10,
											fontSize: 25,
											color: "black",
											marginLeft: 20,
										}}>
										<Card.Title
											style={{
												fontWeight: 800,
												display: "flex",
												justifyContent: "center",
											}}>
											Udarata Manike
										</Card.Title>
									</div>
									<div
										class="row"
										style={{
											color: "black",
											gap: 50,
										}}>
										<Card.Text>
											Arrival at : &nbsp; &nbsp;
											Colombo Fort
										</Card.Text>
										<Card.Text>
											Departure at : &nbsp; &nbsp;
											Kandy
										</Card.Text>
									</div>
									<div
										class="row"
										style={{
											color: "black",
											gap: 50,
										}}>
										<Card.Text>
											Arrival Time :&nbsp; &nbsp;
											10.00 A.M.
										</Card.Text>
										<Card.Text>
											Departure Time :&nbsp; &nbsp;
											14.00 P.M.
										</Card.Text>
									</div>
									<div
										class="row"
										style={{ color: "black" }}>
										<Card.Text>
											Train Type : &nbsp; &nbsp;
											Express
										</Card.Text>
									</div>
								</Card.Body>
								<button
									style={{
										marginBottom: 30,
										marginLeft: 500,
									}}
									onClick={handleMakeReservation}
									type="reset"
									className="btn btn-reset">
									Make Reservation
								</button>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
