import React from "react";

function TaskItem({ task, completeTask, deleteTask }) {
  return (
    <li className="list-none flex justify-between items-center px-4 py-3 mb-3 rounded-xl bg-indigo-50 shadow-sm hover:shadow-md transition">
      <span
        className={`flex-1 ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-700"
        }`}
      >
        {task.task}
      </span>

      <div className="flex gap-2 ml-3">
        <button
          onClick={() => completeTask(task.id)}
          disabled={task.completed}
          className={`px-3 py-1 text-sm rounded-lg transition ${
            task.completed
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          {task.completed ? "Completed" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;