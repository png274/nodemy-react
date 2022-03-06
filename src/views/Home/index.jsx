import React from "react";
import { useNavigate } from "react-router";

const Home = ({}) => {
	const navigate = useNavigate();
	// useHistory  < v5
	return (
		<>
			<h1>Home</h1>
			<button
				onClick={() => {
					navigate("/about");
				}}
			>
				Navigage
			</button>
		</>
	);
};
export default Home;
// tsx typescript
// jsx javascript
