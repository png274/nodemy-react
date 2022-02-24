import React from "react";
import { Button } from "react-bootstrap";
class TimeControl extends React.Component {
	increase = () => {
		this.props.handleTimeChange(this.props.type, "increase");
	};

	decrease = () => {
		this.props.handleTimeChange(this.props.type, "decrease");
	};
	render() {
		return (
			<div>
				<h3>Type {this.props.type}</h3>
				<Button onClick={this.increase}>Increase</Button>
				<h3>{this.props.amount / 60}</h3>
				<Button onClick={this.decrease}>Decrease</Button>
			</div>
		);
	}
}

export default TimeControl;
