import React from "react";

function TaskList({ list }) {
  if (list.length === 0) {
    return <p>No tasks added yet</p>;
  }

  return (
    
    <ul>
      {list.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default TaskList;