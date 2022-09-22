import { useContext, useState } from "react";
import { MyContext } from "./Context";
import "./NotesApp.css";

import NotesList from "./NotesList";
const NotesApp = () => {
  const [filterText, setFilterText] = useState("");
  const { setNotes, Notes } = useContext(MyContext);
  return (
    <div id="main">
      <input
        type="text"
        placeholder="Filter..."
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />
      <NotesList Ftext={filterText} />
    </div>
  );
};

export default NotesApp;
