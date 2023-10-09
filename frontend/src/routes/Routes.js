import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage";

const PageRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
