import React, { useState } from "react";

const Todo = () => {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState("");
  const tasks = ["task1", "task2", "task3"];
  const handleClick = () => {
    setCount(count + 1);
  };
  const handlechange = () => {
    setinput(event.target.value);
  };

  return (
    <>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handlechange} />
      <button onClick={handleClick} value="Add tasks button">
        Add Task
      </button>
      <h1>input: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
