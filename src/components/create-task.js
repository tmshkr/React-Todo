import React, { useContext, useState } from "react";
import { AppContext } from "../app";
import { newTask } from "../data";

function CreateTask() {
  const app = useContext(AppContext);

  function handleKeyPress(e) {
    if (e.which === 13) {
      const tasks = [...app.state.tasks];
      tasks.push(newTask(e.target.value));
      app.setState({ tasks });
      e.target.value = "";
    }
  }

  return (
    <li className="list-group-item create-task">
      <input
        type="text"
        placeholder="New task..."
        onKeyPress={handleKeyPress}
      />
    </li>
  );
}

export default CreateTask;
