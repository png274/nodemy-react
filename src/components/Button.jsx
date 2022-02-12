import React from "react";

class Button extends React.Component {
  onClickMe = (event) => {
    console.log('jj');
    console.log(event.target.value)
  }
  render() {
    return <button onClick={this.onClickMe} value="a">Click me</button>;
  }
}

export default Button;