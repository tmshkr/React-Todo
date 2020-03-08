import React from "react";

function Task(props) {
  const { title } = props.task;
  return <li>{title}</li>;
}

export default Task;
