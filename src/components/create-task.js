import React, { memo } from "react";
import { newTask } from "../data";

function CreateTask(props) {
  const { list } = props;

  function handleKeyPress(e) {
    if (e.which === 13 && e.target.value) {
      const tasks = [...list.state.tasks];
      tasks.push(newTask(e.target.value));
      list.setState({ tasks });
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
