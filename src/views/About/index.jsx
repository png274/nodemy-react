import React from "react";
import { useParams } from "react-router-dom";

const About = ({}) => {
	const params = useParams();

	return (
		<>
			<h1>About</h1>
			{JSON.stringify(params, null, 2)}
		</>
	);
};
export default About;

// chi co 2 truong username password
// /login
// form de login

// /register
// form de regiset

// fetch('asdf', {
//   method: 'POST',
//   body: JSON.stringify(obj)
// })

// axios.post('asdf', body);
