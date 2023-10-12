import React from "react";
import BigVide from "../components/assests/video/train_ticketing.mp4";
import Header from "./shared/Header";
import "./home.css";

const HomePage = () => {
	return (
		<div>
			<Header></Header>
			<div className="landingpage">
				<div style={{ display: "flex", justifyContent: "center" }}>
					<div className="home-text">
						<h1
							id="h1"
							style={{
								fontSize: 58,
								color: "white",
								marginTop: 30,
								width: 580,
								fontWeight: 800,
								display:'flex',
								justifyContent: 'center',
							}}>
							Welcome to Ceylon Rail Book
						</h1>
						<p
							id="para"
							style={{
								fontSize: 22,
								color: "white",
								marginTop: 8,
							}}>
							Online Advance Train Seats Reservation
						</p>
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
