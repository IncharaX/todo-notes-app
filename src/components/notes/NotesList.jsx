import NoteCard from "./NoteCard";

function NotesList({
  notes,
  deleteNote,
  editNote,
  clearAllNotes,
}) {
  return (
    <div>
      <h2>
        Notes ({notes.length})
      </h2>

      {notes.length > 0 && (
  <button onClick={clearAllNotes}>
    Clear Notes
  </button>
  )}

      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))
      )}
    </div>
  );
}

export default NotesList;