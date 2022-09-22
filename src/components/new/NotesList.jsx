import { useContext, useState } from "react";
import "./NotesApp.css";
import AddNotes from "./AddNotes";
import Note from "./Note";
import { MyContext } from "./Context";
const NotesList = (props) => {
  const { Notes, setNotes } = useContext(MyContext);
  return (
    <div className="NotesField">
      {props.Ftext === ""
        ? Notes.map((note, index) => {
            return <Note key={index} text={note.text} id={note.id} />;
          })
        : Notes.map((note, index) => {
            if (note.text.includes(props.Ftext))
              return <Note key={index} text={note.text} id={note.id} />;
          })}
      <AddNotes />
    </div>
  );
};
export default NotesList;
