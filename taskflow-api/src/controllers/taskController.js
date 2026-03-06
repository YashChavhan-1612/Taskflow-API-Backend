let tasks = [];
let currentId = 1;

export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

export const createTask = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Enter Your Task" });
  }

  const newTask = {
    id: currentId++,
    text,
    completed: false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { text, completed } = req.body;

  if (text) task.text = text;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
};

export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(task => task.id !== id);

  res.status(204).end();
};