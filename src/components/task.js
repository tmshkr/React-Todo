import React, { useContext, useEffect, useState, memo } from "react";
// import { AppContext } from "../app";

function Task(props) {
  const { list } = props;
  const [title, setTitle] = useState(props.task.title);
  const [checked, setChecked] = useState(props.task.completed);

  // const app = useContext(AppContext);

  // update app state
  useEffect(() => {
    const { index } = props;
    const tasks = [...list.state.tasks];
    const task = { ...tasks[index], title, completed: checked };
    tasks.splice(index, 1, task);
    list.setState({ tasks });
  }, [title, checked]);

  return (
    <li className="task list-group-item">
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </li>
  );
}

export default memo(Task);
