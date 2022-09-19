import { useContext } from "react";
import { MyContext } from "./Context";
import "./NotesApp.css";

import NotesList from "./NotesList";
const NotesApp = () => {
  const { setNotes, Notes } = useContext(MyContext);
  return (
    <div id="main">
      <input type="text" placeholder="Filter..." />
      <NotesList />
    </div>
  );
};

export default NotesApp;
