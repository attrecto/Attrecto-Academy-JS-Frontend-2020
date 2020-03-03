import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header";
import { ClickMe } from "./ClickMe";

class App extends Component {
  state = {
    clicks: 0
  };

  setClicks = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  componentDidMount() {
    console.log("mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks !== this.state.clicks) {
      console.log("clicks updated");
    }
  }

  render() {
    return (
      <div className="App">
        <Header clicks={this.state.clicks} />
        <ClickMe clicks={this.state.clicks} setClicks={this.setClicks} />
      </div>
    );
  }
}

export default App;
