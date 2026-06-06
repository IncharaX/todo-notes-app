import { useState } from "react";

function NoteCard({
  note,
  deleteNote,
  editNote,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] =
    useState(note.title);

  const [content, setContent] =
    useState(note.content);

  const handleSave = () => {
    editNote({
      ...note,
      title,
      content,
    });

    setIsEditing(false);
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <>
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <textarea
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
          />

          <button onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>

          <p>{note.content}</p>

          <div className="note-actions">
            <button
              onClick={() =>
                setIsEditing(true)
              }
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() =>
                deleteNote(note.id)
              }
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;