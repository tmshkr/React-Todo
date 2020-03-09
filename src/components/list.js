import React, { Component } from "react";

import Task from "./task";
import CreateTask from "./create-task";
import ClearCompleted from "./clear-completed";
import Search from "./search";

class List extends Component {
  constructor(props) {
    super(props);
    let tasks = {};
    try {
      const saved = localStorage.getItem("tasks");
      if (saved) tasks = JSON.parse(saved);
    } catch {}

    this.state = { tasks, searchTerm: "" };
  }

  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      try {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      } catch {}
    }, 500);
  }

  setSearchTerm = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, tasks } = this.state;
    console.log(tasks);
    return (
      <ul className="task-list list-group">
        <Search setSearchTerm={this.setSearchTerm} />
        {Object.values(tasks)
          .filter(t => t.title.includes(searchTerm))
          .map(t => (
            <Task key={t.id} list={this} task={t} />
          ))}
        <CreateTask list={this} />
        <ClearCompleted list={this} />
      </ul>
    );
  }
}

export default List;
