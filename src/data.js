const shortid = require("shortid");

const tasks = [
  {
    id: shortid.generate(),
    createdAt: Date.now(),
    title: "First task",
    completed: false
  },
  {
    id: shortid.generate(),
    createdAt: Date.now(),
    title: "Second task",
    completed: false
  },
  {
    id: shortid.generate(),
    createdAt: Date.now(),
    title: "Third task",
    completed: false
  },
  {
    id: shortid.generate(),
    createdAt: Date.now(),
    title: "Fourth task",
    completed: false
  }
];

export default tasks;
