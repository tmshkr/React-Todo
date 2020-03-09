const shortid = require("shortid");

const tasks = [];

for (let i = 0; i < 5; i++) {
  tasks.push(newTask(`Task ${i}`));
}

export function newTask(title) {
  return {
    id: shortid.generate(),
    createdAt: Date.now(),
    title,
    completed: false
  };
}

export default tasks;
