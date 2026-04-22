import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (text.trim() === "") return;   
    setList([...list, text]);         
    setText("");                      
  }

  return (
    <div>
      <TaskInput  
        text={text}
        setText={setText}
        addTask={addTask}
      />
      <TaskList list={list} />
    </div>
  );
}

export default App;