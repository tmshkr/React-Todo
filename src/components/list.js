import React from "react";
import { Alert, ListGroup, ListGroupItem, Button } from "reactstrap";

import Task from "./task";
import CreateTask from "./create-task";

function List(props) {
  const { tasks } = props;

  return (
    <ul className="task-list list-group">
      {tasks.map(t => (
        <Task key={t.id} task={t} />
      ))}
      <CreateTask />
      <Button>clear completed</Button>
    </ul>
  );
}

export default List;
