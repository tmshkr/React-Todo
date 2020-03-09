import React, { Component } from "react";
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
      <AppContext.Provider value={this}>
        <main className="app">
          <List tasks={this.state.tasks} />
        </main>
      </AppContext.Provider>
    );
  }
}

export const AppContext = React.createContext();
export default App;
