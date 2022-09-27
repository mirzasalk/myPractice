import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "../constext";
import "./HidenWordInput.css";

const HidenWordInput = () => {
  const [Word, setWord] = useState("");
  const {
    hidenWord,
    setHidenWord,
    wrongLetters,
    setWrongLetters,
    corectLetters,
    setCorectLetters,
    eror,
    setEror,
    btnClick,
    setBtnClick,
    helpLetter,
    setHelpLetter,
    corect,
    setCorect,
  } = useContext(myContext);

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
            if (Word !== "") {
              setHidenWord(Word);
              setBtnClick(!btnClick);
              setWord([]);
            }
          }}
        >
          Save
        </button>
      ) : (
        <button
          className="inputBtn"
          onClick={(e) => {
            setBtnClick(false);
            setHidenWord([]);
            setWrongLetters([]);
            setEror(0);
            setCorectLetters([]);
            setHelpLetter("");
            setCorect(-1);
          }}
        >
          refresh
        </button>
      )}
    </div>
  );
};

export default HidenWordInput;
