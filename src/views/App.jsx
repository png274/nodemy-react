import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import DemoBootstrap from "../components/DemoBootstrap";
// import PomodoroClock from "../components/PomodoroClock";
import "../styles/App.css";
import Home from "./Home";
import Page from "./Page";
import About from "./About";
// import { alertSomething } from "../services/user";
// import Calculator from "../components/Calculator";
// import DrumPad from "../components/Drumpad";
// import LifeCycle from "./LifeCycle";

const routeConfig = [
	{
		component: <Home />,
		path: "/home",
		label: "Home",
	},
	{
		component: <Page />,
		path: "/page",
		label: "Page",
	},
	{
		component: <About />,
		path: "/about",
		label: "About",
	},
];

function App() {
	return (
		<BrowserRouter>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{routeConfig.map((route) => (
								<Link className="nav-link" to={route.path}>
									{route.label}
								</Link>
							))}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Routes>
				{routeConfig.map((route) => (
					<Route path={route.path} element={route.component} />
				))}
				{/* urlParams */}
				<Route path={"/user/:userId/:userName/:address"} element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
