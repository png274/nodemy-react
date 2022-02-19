import React from "react";
import "../styles/App.css";

// import { alertSomething } from "../services/user";
// import Calculator from "../components/Calculator";
import DrumPad from "../components/Drumpad";
// className component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.numberValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.name = "Nodemy";
    this.state = {
      counter: 0,
      name: "",
      calculatorValue: "",
    };
  }

  increase = (e) => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  onChangeText = (e) => {
    this.setState((state, props) => {
      console.log(state, props);
    });
  };

  insertNumber = (newNum) => {
    this.setState(
      {
        calculatorValue: this.state.calculatorValue + newNum,
      },
      () => {
        console.log(this.state.calculatorValue);
      }
    );
  };

  clear = () => {
    this.setState({
      calculatorValue: "",
    });
  };

  // render() {
  //   return (
  //     <div
  //       id="calculator"
  //     >
  //       {/* {this.state.calculatorValue}
  //       {_.map(this.numberValue, (num) => {
  //         const callbackFunc = num%2 === 0 ? this.insertNumber : this.increase;
  //         return <ButtonComponent key={num} onClick={callbackFunc} label={num} />;
  //       })} */}
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="container">
        {/* <label>First in tab order:<input type="text"/></label>

        <div tabIndex="1">Tabbable due to tabindex.</div>

        <div tabIndex="0">Not tabbable: no tabindex.</div>

        <label>Third in tab order:<input type="text"/></label> */}

        <div
          className="row border"
        >
          <div className="border col-6">Column 1</div>
          <div className="border col-6">Column 2</div>
          <div className="col">Column 3</div>
          <div className=" col-12">
            <DrumPad />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// state props
// Life cycle
