import React, { memo } from "react";
const shortid = require("shortid");

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

  function newTask(title) {
    return {
      id: shortid.generate(),
      createdAt: Date.now(),
      title,
      completed: false
    };
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
