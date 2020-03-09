import React, { memo, useContext, useState } from "react";
import { AppContext } from "../app";
import { newTask } from "../data";

function CreateTask() {
  const app = useContext(AppContext);

  function handleKeyPress(e) {
    if (e.which === 13 && e.target.value) {
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

export default memo(CreateTask);
