const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());


const Task = require("./models/task");


async function startServer() {
  try {
    console.log("Connecting to MongoDB...");

    await mongoose.connect(
      "mongodb+srv://akchayavs2_db_user:dq2tvi1KNV6VIJUS@cluster0.9mw196h.mongodb.net/tasksDB"
    );

    console.log("MongoDB Connected ✅");

    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000 ✅");
    });

  } catch (error) {
    console.log("MongoDB Connection Failed ❌");
    console.log(error);
  }
}

startServer();



app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});


app.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to add task" });
  }
});



app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Task.findByIdAndUpdate(id, {
      completed: true,
    });

    res.json({ message: "Task completed ✅" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});



app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Task.findByIdAndDelete(id);

    res.json({ message: "Task deleted ✅" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});
