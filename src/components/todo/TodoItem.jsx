function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <div>
        <span
          className={todo.completed ? "completed" : ""}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}

          {todo.completed && (
          <span className="badge">
           Completed
         </span>
    )}
          </span>


        <small>{todo.createdAt}</small>
      </div>

      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
