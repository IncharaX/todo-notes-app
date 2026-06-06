import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    addTodo(task);

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}


export default TodoForm;