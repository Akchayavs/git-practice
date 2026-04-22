import React from "react";

function TaskInput({ text, setText, addTask }) {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;