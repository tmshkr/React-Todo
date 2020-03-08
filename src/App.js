import React, { Component } from "react";
import localforage from "localforage";

class App extends Component {
  constructor() {
    super();
    localforage.config();

    this.state = {
      tasks: [
        {
          createdAt: Date.now(),
          title: "First task",
          completed: false
        }
      ]
    };
  }
  render() {
    return <div className="app">Hello World!</div>;
  }
}

export default App;
