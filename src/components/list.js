import React from "react";
import { Alert, ListGroup, ListGroupItem } from "reactstrap";

import Task from "./task";

function List(props) {
  const { tasks } = props;

  return (
    <form>
      <ul className="task-list list-group">
        {tasks.map(t => (
          <Task key={t.id} task={t} />
        ))}
        <li className="list-group-item" contentEditable>
          New task...
        </li>
      </ul>
    </form>
  );
}

export default List;
