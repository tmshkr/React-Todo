import React, { memo, useContext } from "react";
import { Button } from "reactstrap";

import { AppContext } from "../app";

function ClearCompleted() {
  const app = useContext(AppContext);
  const clear = () => {
    let tasks = [...app.state.tasks];
    tasks = tasks.filter(t => !t.completed);
    app.setState({ tasks });
  };

  return <Button onClick={clear}>clear completed</Button>;
}

export default memo(ClearCompleted);
