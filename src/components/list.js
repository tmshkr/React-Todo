import React from "react";
import Task from "./task";

function List(props) {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </ul>
  );
}

export default List;
