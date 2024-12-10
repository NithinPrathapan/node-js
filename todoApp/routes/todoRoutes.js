const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController.js");

// Create a new task
router.post("/", todoController.createTodo);

// Get all tasks
router.get("/", todoController.getTodos);

// Update a task by ID
router.put("/:id", todoController.updateTodo);

// Delete a task by ID
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
