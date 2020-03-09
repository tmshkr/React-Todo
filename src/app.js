import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import localforage from "localforage";
import data from "./data";

import List from "./components/list";

class App extends Component {
  constructor() {
    super();
    localforage.config();

    this.state = {
      tasks: data
    };
  }

  componentDidMount() {
    console.log("CDM fired", Date.now());
  }

  componentDidUpdate() {
    console.log("CDU fired", Date.now());
  }

  render() {
    return (
      <main className="app">
        <List tasks={this.state.tasks} />
      </main>
    );
  }
}

export default App;
