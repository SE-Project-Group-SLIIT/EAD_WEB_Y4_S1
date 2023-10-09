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
					<h1 id="h1" style={{fontSize: 44, color: 'white', marginTop: 14}}>Welcome to Sri Lanka Railways</h1>
					<p id="para" style={{fontSize: 16, color: 'white', marginTop: 8}}>Online Advance Train Seats Reservation</p>
				</div>
				</div>
			
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
