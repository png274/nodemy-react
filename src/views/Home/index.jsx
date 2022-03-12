import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import actionCreator from "../../redux/action";

const Home = (props) => {
	useEffect(() => {
		console.log("HOME: ", props);
	}, []);
	const navigate = useNavigate();
	// useHistory  < v5
	return (
		<>
			<h1>{props.username}</h1>
			<h2>{props.count}</h2>
			<button
				onClick={() => {
					props.increase(props.count + 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					props.decrease(props.count + 1);
				}}
			>
				Decrease
			</button>
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

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		increase: (newCount) => dispatch(actionCreator.increase(newCount)),
		decrease: (newCount) => dispatch(actionCreator.decrease(newCount)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// tsx typescript
// jsx javascript

// redux thunk
// multiple reducer
