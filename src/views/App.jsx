import React from "react";
import { findDOMNode } from "react-dom";
import Button from "../components/Button";

import ButtonComponent from "../components/Button";
import "../styles/App.css";
// Class component
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
      calculatorValue: ''
    })
  }

  render() {
    return (
      <div
        id="calculator"
        className="text-red"
        style={{
          padding: "10rem 20rem",
          color: "green",
        }}
      >
        {this.state.calculatorValue}
        {this.numberValue.map((num) => {
          const callbackFunc = num%2 === 0 ? this.insertNumber : this.increase;
          return <ButtonComponent key={num} onClick={callbackFunc} label={num} />;
        })}
      </div>
    );
  }
}

export default App;

// state props
// Life cycle
