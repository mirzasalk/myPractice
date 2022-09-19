import { useContext, useState } from "react";
import { MyContext } from "./Context";
import "./NotesApp.css";

const AddNotes = (e) => {
  const { Notes, setNotes } = useContext(MyContext);
  let iText = "";
  const handleInputText = (e) => {
    iText = e.target.value;
  };
  const handleClick = () => {
    setNotes([
      ...Notes,
      { text: iText, id: Math.floor(Math.random() * 10000) },
    ]);
    {
      console.log(Notes);
    }
  };
  return (
    <div className="AddNotes">
      <textarea
        name="notes"
        id="notes"
        placeholder="Type For Add New Note..."
        cols="30"
        rows="10"
        onChange={(e) => {
          handleInputText(e);
        }}
      ></textarea>
      <div className="AddNotesFooter">
        <small>200 Romaining</small>
        <button className="SaveBtn" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNotes;
