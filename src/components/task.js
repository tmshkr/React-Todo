import React, { useState } from "react";

function Task(props) {
  const [title, setTitle] = useState(props.task.title);

  return (
    <li className="list-group-item task">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </li>
  );
}

export default Task;
