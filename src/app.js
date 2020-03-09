import React, { Component } from "react";
import localforage from "localforage";
import data from "./data";

import List from "./components/list";

class App extends Component {
  componentDidUpdate() {
    console.log("CDU fired", Date.now());
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log("localforage");
      localforage.setItem("tasks", this.state.tasks);
    }, 500);
  }

  render() {
    return (
      <main className="app">
        <List />
      </main>
    );
  }
}

export default App;
