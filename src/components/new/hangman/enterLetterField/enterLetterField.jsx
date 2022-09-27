import React, { useContext, useState } from "react";
import { myContext } from "../constext";
import "./enterLetterField.css";

const EnterLetterField = () => {
  const {
    corectLetters,
    setCorectLetters,
    hidenWord,
    setHidenWord,
    wrongLetters,
    setWrongLetters,
    eror,
    setEror,
    helpLetter,
    setHelpLetter,
    corect,
    setCorect,
  } = useContext(myContext);

  let word = [];
  for (let i = 0; i < hidenWord.length; i++) {
    word.push(hidenWord[i]);
  }

  return (
    <div>
      {hidenWord.length === 0 ? null : (
        <div className="bodyWrongLetter">
          <input
            className="inputForNextLetter"
            type="text"
            value={helpLetter}
            placeholder="Enter Next Letter"
            onChange={(e) => {
              if (helpLetter.length < 1 || e.key === "delete") {
                setHelpLetter(e.target.value);
              }
            }}
            onKeyPress={(e) => {
              console.log(e.key);
              if (e.key === "Enter" && !word.includes(e.target.value)) {
                setWrongLetters([...wrongLetters, e.target.value]);
                setHelpLetter("");
                setEror(eror + 1);
              } else if (e.key === "Enter") {
                setCorectLetters([...corectLetters, e.target.value]);
                setHelpLetter("");
                if (corect === -1) {
                  setCorect(corect + 2);
                } else {
                  setCorect(corect + 1);
                }
              }
            }}
          />
          <div className="wrongLettersText">
            <h3>Wrong Letters:</h3>
            <div className="wrongLetterList">{wrongLetters}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnterLetterField;
