import React from "react";
import {  Link } from "react-router-dom";

import "./style.scss";

function Header(props) {

	return (
		<div>
				<nav className="main-menu fixed-top">
					<ul>
						<hr></hr>
						<li>
							<Link to="/dashboard">
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
									<i className="fa fa-clock-o fa-2x"></i>{" "}
									<span className="nav-text">
										Traveler Management
									</span>{" "}
									<i className="fa fa-angle-right fa-animate fa-2x"></i>
								</a>
							</li>
							<ul className="sub-menu collapse" id="new1">
								<li className="has-subnav">
									<Link to="/rentalList">
										<i className="fa  fa-2x"></i>
										<span className="nav-text">
											Traveler Profile List
										</span>
										<i className="fa fa-angle-right fa-2x"></i>
									</Link>
								</li>
								<li className="has-subnav ">
									<Link to="/addRental">
										<i className="fa"></i>
										<span className="nav-text">
											Add New Traveler Profile
										</span>
										<i className="fa fa-angle-right fa-3x"></i>
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
									<i className="fa fa-calendar fa-2x"></i>{" "}
									<span className="nav-text">
										Book Your Ticket
									</span>{" "}
									<i className="fa fa-angle-right fa-animate fa-2x"></i>
								</a>
							</li>
							<ul className="sub-menu collapse" id="new2">
								<li className="has-subnav">
									<Link to="/viewEvent">
										<i className="fa  fa-2x"></i>
										<span className="nav-text">
											{" "}
											Reservations List
										</span>
										<i className="fa fa-angle-right fa-2x"></i>
									</Link>
								</li>
								<li className="has-subnav ">
									<Link to="/addEvent">
										<i className="fa"></i>
										<span className="nav-text">
											Add Reservation
										</span>
										<i className="fa fa-angle-right fa-3x"></i>
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
									<i className="fa fa-car fa-2x"></i>{" "}
									<span className="nav-text">
										Train Schedules
									</span>{" "}
									<i className="fa fa-angle-right fa-animate fa-2x"></i>
								</a>
							</li>
							<ul class="sub-menu collapse" id="new3">
								<li class="has-subnav ">
									<Link to="/vehicle/viewVehicle">
										<i class="fa"></i>
										<span className="nav-text">
										Train Schedules List
										</span>

										<i class="fa fa-angle-right fa-3x"></i>
									</Link>
								</li>
								<li className="has-subnav">
									<Link to="/vehicle/addVehicle">
										<i className="fa  fa-2x"></i>
										<span class="nav-text">
											Add Train Schedule
										</span>
										<i className="fa fa-angle-right fa-2x"></i>
									</Link>
								</li>
							</ul>
							<li></li>
						</li>
					</ul>
				</nav>
			
			<div>{props.children}</div>
		</div>
	);
}

export default Header;
