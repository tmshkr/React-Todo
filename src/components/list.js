import React from "react";
import { Alert, ListGroup, ListGroupItem } from "reactstrap";

import Task from "./task";

function List(props) {
  const { tasks } = props;
  return (
    <ListGroup className="task-list">
      {tasks.map(t => (
        <ListGroupItem key={t.id}>{t.title}</ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default List;
