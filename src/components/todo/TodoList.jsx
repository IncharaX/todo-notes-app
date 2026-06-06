import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  clearAllTodos,
}) {
  return (
    <div>
      <h2>
        Tasks ({todos.length})
      </h2>


      {todos.length > 0 && (
  <button onClick={clearAllTodos}>
    Clear All
  </button>
  )}

      {todos.length === 0 ? (
        <p>No tasks yet.
      Add your first task above.</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;