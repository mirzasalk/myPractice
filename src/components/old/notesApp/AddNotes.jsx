import { useContext, useState } from "react";
import { MyContext } from "./Context";
import "./NotesApp.css";

const AddNotes = (e) => {
  const { Notes, setNotes } = useContext(MyContext);
  const [iText, setIText] = useState("");

  let today = new Date(),
    date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
  const handleInputText = (e) => {
    if (e.target.value.length <= 200) setIText(e.target.value);
  };
  const handleClick = () => {
    setNotes([
      ...Notes,
      { text: iText, id: Math.floor(Math.random() * 10000), d: date },
    ]);
    setIText("");
  };
  return (
    <div className="AddNotes">
      <textarea
        name="notes"
        id="notes"
        value={iText}
        placeholder="Type For Add New Note..."
        cols="30"
        rows="10"
        onChange={(e) => {
          handleInputText(e);
        }}
      ></textarea>
      <div className="AddNotesFooter">
        <small>{200 - iText.length} Romaining</small>
        <button className="SaveBtn" onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};
export default AddNotes;
