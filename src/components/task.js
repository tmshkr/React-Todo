import React, { useEffect, useState, memo } from "react";

function Task(props) {
  const { index, list, task } = props;
  const [title, setTitle] = useState(task.title);
  const [checked, setChecked] = useState(task.completed);

  // update list state
  useEffect(() => {
    const tasks = [...list.state.tasks];
    const task = { ...tasks[index], title, completed: checked };
    tasks.splice(index, 1, task);
    list.setState({ tasks });
    // eslint-disable-next-line
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
