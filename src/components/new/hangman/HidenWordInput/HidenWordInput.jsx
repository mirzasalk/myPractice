import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "../constext";
import "./HidenWordInput.css";

const HidenWordInput = () => {
  const [Word, setWord] = useState("");
  const { setHidenWord } = useContext(myContext);
  const [btnClick, setBtnClick] = useState(false);
  return (
    <div className="inputFiled">
      {!btnClick ? (
        <input
          className="wordInput"
          placeholder="Eneter Hiden Word"
          type="text"
          value={Word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
      ) : null}

      {!btnClick ? (
        <button
          className="inputBtn"
          onClick={(e) => {
            setHidenWord(Word);
            setBtnClick(!btnClick);
            setWord([]);
          }}
        >
          Save
        </button>
      ) : (
        <button
          className="inputBtn"
          onClick={(e) => {
            setBtnClick(!btnClick);
            setHidenWord([]);
          }}
        >
          refresh
        </button>
      )}
    </div>
  );
};

export default HidenWordInput;
