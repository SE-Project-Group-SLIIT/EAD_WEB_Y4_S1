import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage";
import AddTrainSchedule from "../components/TrainScheduleManagement/trainScheduleAdd";
import TrainScheduleList from "../components/TrainScheduleManagement/trainScheduleList";
import ActiveTrainScheduleList from "../components/TrainScheduleManagement/activeTrainScheduleList";
import PublishTrainScheduleList from "../components/TrainScheduleManagement/publishtrainScheduleList";
import UpdateTrainSchedule from "../components/TrainScheduleManagement/updateTrainSchedule";
import AddTrainPage from "../components/trainManagement/trainAddForm";
import TrainListTable from "../components/trainManagement/trainListTable";
import UpdateTrainPage from "../components/trainManagement/updateTrainForm";
import CheckAvailableTrainsPage from "../components/TicketBookingManagement/checkAvailableTrainsPage";
import ReservationList from "../components/TicketBookingManagement/reservationList";
import PreviousReservationList from "../components/TicketBookingManagement/previousReservationsList";
import ViewAvailableTrainDerails from "../components/TicketBookingManagement/viewAvailableTrainDetails";
import MakeReservationPage from "../components/TicketBookingManagement/makeReservationPage";

const PageRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/train-schedule/list"
							element={<TrainScheduleList />}
						/>
						<Route
							path="/train-schedule/add"
							element={<AddTrainSchedule />}
						/>
							<Route
							path="/train-schedule/list/active"
							element={<ActiveTrainScheduleList />}
						/>
							<Route
							path="/train-schedule/list/publish"
							element={<PublishTrainScheduleList />}
						/>
						<Route
							path="/train-schedule/update"
							element={<UpdateTrainSchedule />}
						/>
						<Route
							path="/train/add"
							element={<AddTrainPage />}
						/>
						<Route
							path="/train/list"
							element={<TrainListTable />}
						/>
						<Route
							path="/train/update"
							element={<UpdateTrainPage />}
						/>
						<Route
							path="/train-reservation/list"
							element={<HomePage />}
						/>
						<Route
							path="/train-reservation/add"
							element={<HomePage />}
						/>
						<Route
							path="/traveler-profile/list"
							element={<HomePage />}
						/>
						<Route
							path="/traveler-profile/add"
							element={<HomePage />}
						/>
						{/* <Route
							path="/train-details/search"
							element={<checkAvailableTrains />}
						/> */}
						<Route
							path="/train-details/search"
							element={<CheckAvailableTrainsPage />}
						/>
						<Route
							path="/reservation-list"
							element={<ReservationList />}
						/>
						<Route
							path="/reservation-list-previous"
							element={<PreviousReservationList />}
						/>
						<Route
							path="/train-details/available"
							element={<ViewAvailableTrainDerails />}
						/>
						<Route
							path="/make-reservation"
							element={<MakeReservationPage />}
						/>
						<Route path="/login" element={<HomePage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
