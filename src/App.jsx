import React from 'react';

import ButtonComponent from './components/Button';
import './App.css';
// Class component
class App extends React.Component {

  name = 'Nodemy';
  // constructor() {
  //   super();
  // }

  onChangeText = (e) => {
    console.log('change text', e.target.value);
  }

  render () {
    return (
      <div
        className="text-red"
        style={{
          padding: "10rem 20rem",
          color: "green",
        }}
      >
        <ButtonComponent/>
        <input type="text" onChange={this.onChangeText}/>
      </div>
    );
  }
}

export default App;

// state props
// Life cycle