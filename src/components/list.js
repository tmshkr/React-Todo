import React from "react";
import Task from "./task";

function List(props) {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map(t => (
        <Task key={t.id} task={t} />
      ))}
    </ul>
  );
}

export default List;
