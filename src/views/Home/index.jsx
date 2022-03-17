import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { connect, useSelector, useDispatch } from "react-redux";
import actionCreator from "../../redux/action";

const Home = (props) => {
	useEffect(() => {
		console.log("HOME: ", props);
	}, []);

	// useHistory  < v5
	return (
		<>
			<h1>{props.user.username}</h1>
			<h2>{props.count.value}</h2>
			<button
				onClick={() => {
					props.updateCount(props.count + 1);
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					console.log("Click");
					props.fetchData();
				}}
			>
				Fetch data
			</button>
			<button
				onClick={() => {
					props.update();
				}}
			>
				Update
			</button>
		</>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateCount: (count) => dispatch(actionCreator.updateCount(count)),
		changeUserName: (newCount) => dispatch(actionCreator.decrease(newCount)),
		update: (newCount) => dispatch(actionCreator.update()),
		fetchData: () => dispatch(actionCreator.fetchData()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
