import React from "react";

class Pad extends React.Component {

  state = {
    isPressed: false
  }

  onPressed = () => {
    this.props.onClick(this.props.label);
    this.setState({ isPressed: true }, () => {
      setTimeout(() => {
        this.setState({isPressed: false})
      }, 200);
    });
  }

  render() {
    return (
      <div className="p-3 col-4">
        <button
          className={`btn ${
            this.state.isPressed ? "btn-danger" : "btn-primary"
          } w-100`}
          onClick={this.onPressed}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}

Pad.defaultProps = {
  label: 'i',
  onClick: () => {}
}

export default Pad;