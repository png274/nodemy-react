import React from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import TimeControl from "./TimeControl";

class PomodoroClock extends React.Component {
	constructor() {
		super();
		this.state = {
			type: "session",
			isRunning: false,
			currentSessionTime: 10,
			currentBreakTime: 5,
			totalSessionTime: 10,
			totalBreakTime: 5,
			// currentSessionTime: 5 * 60,
			// currentBreakTime: 5 * 60,
			// totalSessionTime: 5 * 60,
			// totalBreakTime: 5 * 60,
		};

		this.interval = null;
	}

	renderDisplayTime = () => {
		const time =
			this.state.type === "session"
				? this.state.currentSessionTime
				: this.state.currentBreakTime;

		const minute = _.padStart(Math.floor(time / 60), 2, "0");
		const second = _.padStart(time % 60, 2, "0");
		return `${minute}:${second}`;
	};

	/**
	 *
	 * @param {*} type type the current time [break, session]
	 * @param {*} typeChange [increase, decrease]
	 */
	handleTimeControlClick = (type, typeChange) => {
		// TODO check total time less than 0
		const { totalBreakTime, totalSessionTime } = this.state;
		if (type === "break") {
			if (typeChange === "increase") {
				this.setState({
					totalBreakTime: totalBreakTime + 60,
				});
			} else if (typeChange === "decrease") {
				this.setState({
					totalBreakTime: totalBreakTime - 60,
				});
			}
		} else if (type === "session") {
			if (typeChange === "increase") {
				this.setState({
					totalSessionTime: totalSessionTime + 60,
				});
			} else if (typeChange === "decrease") {
				this.setState({
					totalSessionTime: totalSessionTime - 60,
				});
			}
		}
	};

	startClock = () => {
		const { isRunning } = this.state;
		if (isRunning) {
			clearInterval(this.interval);
			this.setState({
				isRunning: false,
			});
			return;
		}

		this.interval = setInterval(() => {
			const {
				type,
				currentBreakTime,
				currentSessionTime,
				totalBreakTime,
				totalSessionTime,
			} = this.state;
			let nextBreakTime =
				type === "break" ? currentBreakTime - 1 : currentBreakTime;
			let nextSessionTime =
				type === "session" ? currentSessionTime - 1 : currentSessionTime;
			let nextType = type;
			if (currentBreakTime === 0 && type === "break") {
				nextType = "session";
				nextBreakTime = totalBreakTime;
			} else if (currentSessionTime === 0 && type === "session") {
				nextType = "break";
				nextSessionTime = totalSessionTime;
			}
			this.setState({
				isRunning: true,
				type: nextType,
				currentBreakTime: nextBreakTime,
				currentSessionTime: nextSessionTime,
			});
		}, 1000);
	};

	reset = () => {
		clearInterval(this.interval);
		this.setState({
			type: "session",
			isRunning: false,
			currentSessionTime: 10,
			currentBreakTime: 5,
			totalSessionTime: 10,
			totalBreakTime: 5,
			// currentSessionTime: 5 * 60,
			// currentBreakTime: 5 * 60,
			// totalSessionTime: 5 * 60,
			// totalBreakTime: 5 * 60,
		});
	};

	render() {
		return (
			<div>
				<h1>Pomodoro Clock</h1>
				<h1>{this.state.type}</h1>

				<TimeControl
					type={"session"}
					amount={this.state.totalSessionTime}
					handleTimeChange={this.handleTimeControlClick}
				/>
				<TimeControl
					type={"break"}
					amount={this.state.totalBreakTime}
					handleTimeChange={this.handleTimeControlClick}
				/>
				<h2>{this.renderDisplayTime()}</h2>
				<Button onClick={this.startClock}>Start/Stop</Button>
				<Button onClick={this.reset}>Reset</Button>
			</div>
		);
	}
}

export default PomodoroClock;
