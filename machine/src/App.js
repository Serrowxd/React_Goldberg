import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  // onClick, componentDidMount, call a function that unmounts the entire page as it stands, then renders a square.
  // That function calls a another function on a setTimeout that moves the square to the right side of the screen.
  // That same function calls another setTimeout that calls two more functions.
  // The first one changes the background color. The second calls a function that shifts the square back to the center.
  // This calls a function that causes the square to grow to a set-width/height.
  // Call another function that drops text from the top of the screen, place it a little too close to the bar.
  // Call another function right after that on a slightly longer timeout that shifts it back up to where it should be.
  // Final function renders a login, but spell login wrong and don't put in a button.
  // After a short timeout, render the button and fix the login spelling.
  // When a click is registered inside the square, make everything vanish.
  // Render a single button in the center that says "Click me!"
  // This takes you back to the beginning

  componentDidMount() {
    // Break everything
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            {' '}
            React Goldberg
            <br />
            <span>By Kevin Jolley</span>
          </h1>
          <button>Click Me</button>
        </header>
      </div>
    );
  }
}

export default App;
