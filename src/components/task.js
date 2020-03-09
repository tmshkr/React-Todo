import React, { useState } from "react";

function Task(props) {
  const [title, setTitle] = useState(props.task.title);
  const [checked, setChecked] = useState(props.task.completed);

  return (
    <li className="task list-group-item">
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </li>
  );
}

export default Task;
