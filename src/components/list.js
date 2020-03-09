import React from "react";
import { Alert, ListGroup, ListGroupItem, Button } from "reactstrap";

import Task from "./task";
import CreateTask from "./create-task";
import ClearCompleted from "./clear-completed";

function List(props) {
  const { tasks } = props;

  return (
    <ul className="task-list list-group">
      {tasks.map((t, index) => (
        <Task key={t.id} task={t} index={index} />
      ))}
      <CreateTask />
      <ClearCompleted />
    </ul>
  );
}

export default List;
