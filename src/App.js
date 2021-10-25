import React, { Component } from "react";
import "./App.css";

import Heroes from "./components/Heroes";
import Villains from "./components/Villains";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Heroes</h1>
        <div className="header-bar" />
        <app-heroes />
        <Heroes />
        <br />
        <h1 className="margin-top">Villains</h1>
        <div className="header-bar" />
        <app-villains />
        <Villains />
      </div>
    );
  }
}

export default App;
