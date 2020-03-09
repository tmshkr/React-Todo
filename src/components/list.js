import React from "react";
import { Alert, ListGroup, ListGroupItem } from "reactstrap";

import Task from "./task";
import CreateTask from "./create-task";

function List(props) {
  const { tasks } = props;

  return (
    <form>
      <ul className="task-list list-group">
        {tasks.map(t => (
          <Task key={t.id} task={t} />
        ))}
        <CreateTask />
      </ul>
    </form>
  );
}

export default List;
