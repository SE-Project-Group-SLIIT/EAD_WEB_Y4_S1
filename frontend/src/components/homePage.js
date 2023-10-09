import React from "react";
import BigVide from "../components/assests/video/train_ticketing.mp4";
import Header from "./shared/Header";

const HomePage = () => {
	return (
		<div>
			<Header></Header>
			<div className="landingpage" style={{backgroundColor: "#111D46"}}>
				<div style={{display: 'flex', justifyContent: 'center'}}>
				<div className="home-text">
					<h1 id="h1" style={{fontSize: 44, color: 'white'}}>Welcome to Sri Lanka Railways</h1>
					<p id="para" style={{fontSize: 18, color: 'white'}}>Online Advance Train Seats Reservation</p>
				</div>
				</div>
				<button
					style={{
						width: "200px",
						height: "40px",
						marginBottom: 12,
						marginTop: 10,
						backgroundColor: "white",
						color: "black",
						fontSize: 18,
						fontFamily: "Merianda",
						borderRadius: 14,
						borderColor: "white",
					}}>
					Book Your Seat
				</button>

				<video
					style={{ width: "100%" }}
					src={BigVide}
					autoPlay
					muted
					loop
					class="video-bg"
				/>

				<div className="bg-overlay"></div>
			</div>
		</div>
	);
};
export default HomePage;
