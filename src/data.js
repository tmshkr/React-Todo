const shortid = require("shortid");

const tasks = [];

for (let i = 0; i < 5; i++) {
  tasks.push({
    id: shortid.generate(),
    createdAt: Date.now(),
    title: `Task ${i}`,
    completed: false
  });
}

export default tasks;
