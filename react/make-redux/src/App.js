import React, { Component, lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lazy from "./Lazy";
const OtherComponent = lazy(() => import("./Lazy"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: "test1",
      test2: "test2",
      num1: 0,
      num2: 0
    };
  }

  componentDidMount() {
    this.setState({
      num1: this.state.num1 + 1
    });
    this.setState({
      num3: this.state.num1 + 1
    });
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>{this.state.test1}</p>
          <p>{this.state.test2}</p>

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
