import { useContext, useEffect, useState } from "react";
import { MyContext } from "./Context";
import "./NotesApp.css";
import Header from "./Header";
import NotesList from "../NotesList";
const NotesApp = () => {
  const [filterText, setFilterText] = useState("");
  const { setNotes, Notes } = useContext(MyContext);
  const [toogleMode, setToogleMode] = useState("main");

  const handleM = () => {
    if (toogleMode === "main") {
      setToogleMode("mainDark");
    } else {
      setToogleMode("main");
    }
  };
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("data-notesApp-react"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data-notesApp-react", JSON.stringify(Notes));
  }, [Notes]);
  return (
    <div id={toogleMode}>
      <Header handleMode={handleM} />
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
