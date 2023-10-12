import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import train from "../assests/images/train.png";

function Header(props) {
	return (
		<div>
			<nav className="main-menu fixed-top">
				<img
					src={train}
					style={{
						height: 60,
						width: 150,
						marginTop: 50,
						marginBottom: 20,
						marginLeft: 56,
					}}
					alt="tute"
				/>
				<ul>
					<li>
						<Link to="/">
							<i className="fa fa-th fa-2x"></i>
							<span className="nav-text">Dashboard</span>
							<i className="fa fa-angle-right fa-2x"></i>
						</Link>
					</li>
					<hr></hr>
					<li className="has-subnav">
						<li
							data-toggle="collapse"
							data-target="#new1"
							className="collapsed">
							<a href="javascript:void(0)">
								{" "}
								<i className="fa fa-user fa-2x"></i>{" "}
								<span className="nav-text">
									Traveler &nbsp; Management
								</span>{" "}
								<i className="fa fa-angle-right fa-animate fa-2x"></i>
							</a>
						</li>
						<ul className="sub-menu collapse" id="new1">
							<li className="has-subnav">
								<Link to="/traveler-profile/list">
									<i className="fa  fa-2x"></i>
									<span className="nav-text">
										Traveler Profile List
									</span>
								</Link>
							</li>
							<li className="has-subnav ">
								<Link to="/traveler-profile/add">
									<i className="fa"></i>
									<span className="nav-text">
										Add New Traveler Profile
									</span>
								</Link>
							</li>
						</ul>
						<li></li>
					</li>
					<hr></hr>
					<li className="has-subnav">
						<li
							data-toggle="collapse"
							data-target="#new2"
							className="collapsed">
							<a href="javascript:void(0)">
								{" "}
								<i className="fa fa-ticket fa-2x"></i>{" "}
								<span className="nav-text">
									Book Your Ticket
								</span>{" "}
								<i className="fa fa-angle-right fa-animate fa-2x"></i>
							</a>
						</li>
						<ul className="sub-menu collapse" id="new2">
							<li className="has-subnav">
								<Link to="/train-reservation/list">
									<i className="fa  fa-2x"></i>
									<span className="nav-text">
										{" "}
										Reservations List
									</span>
								</Link>
							</li>
							<li className="has-subnav ">
								<Link to="/train-reservation/add">
									<i className="fa"></i>
									<span className="nav-text">
										Add Reservation
									</span>
								</Link>
							</li>
						</ul>
						<li></li>
					</li>
					<hr></hr>
					<li className="has-subnav">
						<li
							data-toggle="collapse"
							data-target="#new3"
							className="collapsed">
							<a href="javascript:void(0)">
								{" "}
								<i className="fa fa-calendar fa-2x"></i>{" "}
								<span className="nav-text">
									Train Schedules
								</span>{" "}
								<i className="fa fa-angle-right fa-animate fa-2x"></i>
							</a>
						</li>
						<ul class="sub-menu collapse" id="new3">
							<li class="has-subnav ">
								<Link to="/train-schedule/list">
									<i class="fa"></i>
									<span className="nav-text">
										Train Schedules List
									</span>
								</Link>
							</li>
							<li className="has-subnav">
								<Link to="/train-schedule/add">
									<i className="fa  fa-2x"></i>
									<span class="nav-text">
										Add Train Schedule
									</span>
								</Link>
							</li>
						</ul>

						<li></li>
					</li>
					<hr></hr>
					<li className="has-subnav">
						<li
							data-toggle="collapse"
							data-target="#new4"
							className="collapsed">
							<a href="javascript:void(0)">
								{" "}
								<i className="fa fa-train fa-2x"></i>{" "}
								<span className="nav-text">
									Trains
								</span>{" "}
								<i className="fa fa-angle-right fa-animate fa-2x"></i>
							</a>
						</li>
						<ul class="sub-menu collapse" id="new4">
							<li class="has-subnav ">
								<Link to="/train/list">
									<i class="fa"></i>
									<span className="nav-text">
										Train List
									</span>
								</Link>
							</li>
							<li className="has-subnav">
								<Link to="/train/add">
									<i className="fa  fa-2x"></i>
									<span class="nav-text">
										Add Train
									</span>
								</Link>
							</li>
						</ul>

						<li></li>
					</li>
					<hr></hr>
					<li className="has-subnav" style={{ marginTop: 130 }}>
						<hr></hr>
						<li
							data-toggle="collapse"
							data-target="#new4"
							className="collapsed">
							<Link to="/login">
								<i className="fa fa-user fa-2x"></i>{" "}
								<span className="nav-text">Login</span>{" "}
							</Link>
						</li>

						<li></li>
					</li>
				</ul>
			</nav>

			<div>{props.children}</div>
		</div>
	);
}

export default Header;
