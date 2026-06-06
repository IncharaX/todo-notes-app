import { useState } from "react";

import Header from "./components/shared/Header";

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";

import NoteForm from "./components/notes/NoteForm";
import NotesList from "./components/notes/NotesList";

function App() {
  const [todos, setTodos] = useState([]);
 const [notes, setNotes] = useState([]);

  const addTodo = (taskText) => {
    const newTodo = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const addNote = (title, content) => {
  const newNote = {
    id: Date.now(),
    title,
    content,
  };

  setNotes((prev) => [...prev, newNote]);
};

const deleteNote = (id) => {
  setNotes((prev) =>
    prev.filter((note) => note.id !== id)
  );
};

const editNote = (updatedNote) => {
  setNotes((prev) =>
    prev.map((note) =>
      note.id === updatedNote.id
        ? updatedNote
        : note
    )
  );
};
  return (
    <div className="container">
      <Header />

      <div className="grid">
        <section className="card">
          <TodoForm addTodo={addTodo} />

          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </section>

        <section className="card">
         <NoteForm addNote={addNote} />
          <NotesList
          notes={notes}
          deleteNote={deleteNote}
          editNote={editNote}
          />
        </section>
      </div>
    </div>
  );
}

export default App;