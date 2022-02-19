import React from "react";

class Calculator extends React.Component {

  componentDidMount() {
    console.log('Mounted');
  }

  componentWillUnmount() {
    console.log('Unmounted')
  }

  render() {
    console.log('render');
    return<>Calculator</>;
  }
}

export default Calculator;