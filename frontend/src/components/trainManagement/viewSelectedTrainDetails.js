/* eslint-disable jsx-a11y/no-redundant-roles */
import { React, useEffect, useState } from "react";

export default function ViewSelectedTrainDetailsPage({ data }) {
	const [trainName, settrainName] = useState("");
	const [arrivalStation, setarrivalStation] = useState("");
	const [departureStation, setdepartureStation] = useState("");
	const [trainType, setTrainType] = useState("");
	const [trainStations, setTrainStations] = useState([]);

	useEffect(() => {
		if (data) {
			settrainName(data.trainName);
			setarrivalStation(data.arrivalStation);
			setdepartureStation(data.departureStation);
			setTrainType(data.trainType);
			setTrainStations(data.trainStations);
		}
	}, [data]);

	return (
		<div class="card" style={{borderRadius: 10}}>
			<div class="card-body" style={{borderRadius: 10}}>
				<h5
					class="card-title"
					style={{
						marginBottom: 50,
						color: "#4CBB17",
						display: "flex",
						justifyContent: "center",
						fontSize: 25,
					}}>
					{trainName} Train Details
				</h5>
				<p
					class="card-text"
					style={{ fontWeight: 600, fontSize: 18 }}>
					Arrives : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
					{arrivalStation}
				</p>
				<p
					class="card-text"
					style={{
						fontWeight: 600,
						fontSize: 18,
						marginBottom: 50,
					}}>
					Departs : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;{" "}
					{departureStation}
				</p>
				<p
					class="card-text"
					style={{ fontWeight: 600, fontSize: 18 }}>
					The {trainName} train, as a named {trainType} train, was
					established to connect {arrivalStation} and{" "}
					{departureStation}.
				</p>
				<p
					class="card-text"
					style={{ fontWeight: 600, fontSize: 18, color: '#191970' }}>
					Destinations
				</p>
				<ul>
					{trainStations.map((station, index) => (
						<li key={index} style={{ fontWeight: 400, fontSize: 18 }}>{station}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
