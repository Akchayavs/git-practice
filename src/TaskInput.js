import React from "react";

function TaskInput({ text, setText, addTask }) {
  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={addTask}
        className="bg-indigo-500 text-white px-5 py-2 rounded-xl hover:bg-indigo-600 transition duration-200"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;