import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ list, completeTask, deleteTask }) {
  if (list.length === 0) {
    return <p>No tasks added yet</p>;
  }

  return (
    <ul>
      {list.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;