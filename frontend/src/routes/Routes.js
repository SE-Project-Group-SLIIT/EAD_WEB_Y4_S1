import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage";
import AddTrainSchedule from "../components/TrainScheduleManagement/trainScheduleAdd";
import TrainScheduleList from "../components/TrainScheduleManagement/trainScheduleList";
import ActiveTrainScheduleList from "../components/TrainScheduleManagement/activeTrainScheduleList";
import PublishTrainScheduleList from "../components/TrainScheduleManagement/publishtrainScheduleList";
import UpdateTrainSchedule from "../components/TrainScheduleManagement/updateTrainSchedule";

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
						<Route path="/login" element={<HomePage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
