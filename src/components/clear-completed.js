import React, { memo } from "react";
import { Button } from "reactstrap";

function ClearCompleted(props) {
  const { list } = props;
  const clear = () => {
    let tasks = [...list.state.tasks];
    tasks = tasks.filter(t => !t.completed);
    list.setState({ tasks });
  };

  return <Button onClick={clear}>clear completed</Button>;
}

export default memo(ClearCompleted);
