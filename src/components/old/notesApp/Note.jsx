import { useContext } from "react";
import { MyContext } from "./Context";
import "./NotesApp.css";

const Note = (props) => {
  const { Notes, setNotes } = useContext(MyContext);
  const id = props.id;

  const handleClick = () => {
    let list = [];
    list = Notes.filter((item, index) => {
      if (id !== item.id) {
        return true;
      } else {
        return false;
      }
    });

    setNotes(list);
  };

  return (
    <div className="Note">
      <div className="NotesText">{props.text}</div>
      <div className="AddNotesFooter">
        <small>{props.dat}</small>
        <img src="delete.png" alt="delete" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Note;
