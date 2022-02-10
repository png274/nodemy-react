import React from 'react';
import './App.css';

// State props
// Stateless
// Function Components
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// Class component
const name = 'John';
class App extends React.Component {

  
  render () {
    return (
      <div className="App">
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default App;
