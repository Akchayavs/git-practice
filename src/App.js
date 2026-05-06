import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (text.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      task: text,
      completed: false,
    };

    setList([...list, newTask]);
    setText("");
  }

  function completeTask(id) {
    const updatedList = list.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setList(updatedList);
  }

  function deleteTask(id) {
    const updatedList = list.filter((task) => task.id !== id);
    setList(updatedList);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-indigo-600">
            Welcome 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your tasks effortlessly
          </p>
        </div>

        <TaskInput
          text={text}
          setText={setText}
          addTask={addTask}
        />

        <TaskList
          list={list}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
