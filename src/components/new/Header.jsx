import React from "react";
import "./NotesApp.css";
const Header = ({ handleMode }) => {
  return (
    <div id="header">
      <h1>Notes</h1>
      <button onClick={handleMode}>Toogle Mode</button>
    </div>
  );
};
export default Header;
