import { useState } from "react";

function ArrayState() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, "New Note"]);
  };

  return (
    <div>
      <button onClick={addNote}>Add Note</button>

      {notes.map((note, index) => (
        <h2 key={index}>{note}</h2>
      ))}
    </div>
  );
}

export default ArrayState;
