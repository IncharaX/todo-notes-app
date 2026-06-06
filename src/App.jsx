import Header from "./components/shared/Header";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import NoteForm from "./components/notes/NoteForm";
import NotesList from "./components/notes/NotesList";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="grid">
        <section className="card">
          <TodoForm />
          <TodoList />
        </section>

        <section className="card">
          <NoteForm />
          <NotesList />
        </section>
      </div>
    </div>
  );
}

export default App;