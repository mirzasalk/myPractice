import { useContext, useState } from "react";
import "./NotesApp.css";
import AddNotes from "./AddNotes";
import Note from "./Note";
import { MyContext } from "./Context";
const NotesList = () => {
  const { Notes, setNotes } = useContext(MyContext);
  return (
    <div className="NotesField">
      {Notes.map((note, index) => {
        return <Note key={index} text={note.text} id={note.id} />;
      })}
      <AddNotes />
    </div>
  );
};
export default NotesList;
