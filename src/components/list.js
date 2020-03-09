import React, { Component } from "react";

import Task from "./task";
import CreateTask from "./create-task";
import ClearCompleted from "./clear-completed";

class List extends Component {
  constructor(props) {
    super(props);
    let tasks = [];
    try {
      const saved = localStorage.getItem("tasks");
      if (saved) tasks = JSON.parse(saved);
    } catch {}

    this.state = { tasks };
  }

  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      try {
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      } catch {}
    }, 500);
  }

  render() {
    const { tasks } = this.state;
    return (
      <ul className="task-list list-group">
        {tasks.map((t, index) => (
          <Task key={t.id} list={this} task={t} index={index} />
        ))}
        <CreateTask list={this} />
        <ClearCompleted list={this} />
      </ul>
    );
  }
}

export default List;
