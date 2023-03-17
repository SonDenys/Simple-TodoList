import "./App.css";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(event);
    setTasks([...tasks, { name: inputValue, isCompleted: false }]);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    // We locate the task with the index and we remove 1 element (the element index)
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleCheck = (index) => {
    const newTasks = [...tasks];
    // .IsCompleted has to be the opposite boolean after being hit by the function handleCheck()
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <div>
            <li
              style={{
                textDecorationLine: task.isCompleted ? "line-through" : "none",
              }}
              key={index}
            >
              {task.name}
            </li>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleCheck(index)}>
              {task.isCompleted ? "Uncheck" : "Check"}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
