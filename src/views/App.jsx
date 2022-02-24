import React from "react";
// import DemoBootstrap from "../components/DemoBootstrap";
import PomodoroClock from "../components/PomodoroClock";
import "../styles/App.css";
// import { alertSomething } from "../services/user";
// import Calculator from "../components/Calculator";
// import DrumPad from "../components/Drumpad";
// import LifeCycle from "./LifeCycle";
class App extends React.Component {
	state = {
		shouldShow: true,
	};

	render() {
		return (
			<div className="container">
				{/* <div>
					LIFE CYCLE REACT
					<button
						onClick={() =>
							this.setState({ shouldShow: !this.state.shouldShow })
						}
					>
						Toggle
					</button>
				</div>
				{this.state.shouldShow && <LifeCycle />} */}
				<PomodoroClock />
			</div>
		);
	}
}

export default App;

// state props
// Life cycle
//  {/* <label>First in tab order:<input type="text"/></label>

//       <div tabIndex="1">Tabbable due to tabindex.</div>

//       <div tabIndex="0">Not tabbable: no tabindex.</div>

//       <label>Third in tab order:<input type="text"/></label> */}

//       {/* <div
//         className="row border"
//       >
//         <div className="border col-6">Column 1</div>
//         <div className="border col-6">Column 2</div>
//         <div className="col">Column 3</div>
//         <div className=" col-12">
//           <DrumPad />
//         </div>
//       </div> */}
