const Todo = require("../model/todoModel.js");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render("todoForm", { todos });
  } catch (error) {
    console.log(error);
  }
};

exports.addTodos = async (req, res) => {
  console.log(req.body, "req.body data");
  try {
    const newTodo = new Todo({
      task: req.body.task,
    });
    await newTodo.save();
    res.redirect("/");
    console.log(newTodo);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;

  const deletedItem = await Todo.findByIdAndDelete(id);
  if (!deletedItem) {
    return res.status(404).json({ message: "item not found" });
  }
  res.redirect("/");
};
