const Todo = require("../models/todoModel");

// Create a new task
exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      task: req.body.task,
    });
    await todo.save();
    res.status(201).json({ message: "Task created successfully", todo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read all tasks
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a task
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Task updated successfully", updatedTodo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a task
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
