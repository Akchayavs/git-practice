import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
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
    <div>
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
  );
}

export default App;