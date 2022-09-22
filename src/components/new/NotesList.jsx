import { useContext, useState } from "react";
import "./NotesApp.css";
import AddNotes from "./AddNotes";
import Note from "./Note";
import { MyContext } from "./Context";
const NotesList = (props) => {
  const { Notes, setNotes } = useContext(MyContext);
  return (
    <div className="NotesField">
      {Notes.map((note, index) => {
        if (note.text.toLowerCase().includes(props.Ftext.toLowerCase())) {
          {
            console.log(note.text, props.Ftext);
          }
          return (
            <Note key={index} text={note.text} id={note.id} dat={note.d} />
          );
        }
      })}
      <AddNotes />
    </div>
  );
};
export default NotesList;
