import React, { useState, useEffect, useCallback } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  }, []);

  
  const addTask = useCallback(() => {
    if (text.trim() === "") return;

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: text }),
    })
      .then((res) => res.json())
      .then((newTask) => {
        setList((prev) => [...prev, newTask]);
        setText("");
      })
      .catch((err) => console.log(err));
  }, [text]);

  
  const completeTask = useCallback((id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
    })
      .then(() => {
        setList((prev) =>
          prev.map((task) =>
            task._id === id ? { ...task, completed: true } : task
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  
  const deleteTask = useCallback((id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setList((prev) => prev.filter((task) => task._id !== id));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-5 rounded shadow">

        <h1 className="text-xl font-bold mb-4 text-center">
          Task Manager
        </h1>

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