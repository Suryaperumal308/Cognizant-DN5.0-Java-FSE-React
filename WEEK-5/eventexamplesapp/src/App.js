import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));

    this.sayHello();
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  sayHello = () => {
    alert("Hello Member");
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = () => {
    alert("I was clicked");
  };

  render() {
    return (
        <div className="container">
          <p>{this.state.count}</p>

          <button onClick={this.increment}>
            Increment
          </button>

          <br />

          <button onClick={this.decrement}>
            Decrement
          </button>

          <br />

          <button onClick={() => this.sayWelcome("Welcome")}>
            Say welcome
          </button>

          <br />

          <button onClick={this.onPress}>
            Click on me
          </button>

          <CurrencyConvertor />
        </div>
    );
  }
}

export default App;