import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeConfig from "../config/routes";
import store from "../redux/store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					{routeConfig.map((route, index) => (
						<Route path={route.path} element={route.component} key={index} />
					))}
					{/* urlParams */}
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}
export default App;
