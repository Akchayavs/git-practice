import React from "react";

function TaskItem({ task, completeTask, deleteTask }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.task}
      </span>

      <button
        onClick={() => completeTask(task.id)}
        disabled={task.completed}
      >
        {task.completed ? "Completed" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;