import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { connect, useSelector, useDispatch } from "react-redux";
import actionCreator from "../../redux/action";
import userContext from "../../utils/context/user";
import styles from "./Home.module.scss";

const Home = (props) => {
	const userCtx = useContext(userContext);
	useEffect(() => {
		console.log("HOME: ", props);
		console.log(userCtx);
	}, []);

	console.log(styles);

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
			<div className={`${styles["parent"]}`}>Parent module</div>
			<div className="parent">Parent global</div>
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
