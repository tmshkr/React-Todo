import React from "react";

function Task(props) {
  const { title } = props.task;
  return (
    <li className="list-group-item" contentEditable>
      {title}
    </li>
  );
}

export default Task;
