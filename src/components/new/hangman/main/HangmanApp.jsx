import "./style.css";
import Figure from "../figure/Figure";
import Header from "../header/Header";
import { useContext, useEffect, useState } from "react";
import HidenWordInput from "../HidenWordInput/HidenWordInput";
import HidenWordField from "../HidenWordField/HidenWordField";
import EnterLetterField from "../enterLetterField/EnterLetterField";
import { myContext } from "../constext";

const Hangman = () => {
  const {
    setHidenWord,
    hidenWord,
    setWrongLetters,
    setCorectLetters,
    corectLetters,
    eror,
    setEror,
    BtnClick,
    setBtnClick,
    setHelpLetter,
    corect,
    setCorect,
  } = useContext(myContext);
  return (
    <div className="main">
      {corect}
      {eror > 5 ? (
        <div className="GameOver">
          <h1>Game Over</h1>
          <button
            onClick={() => {
              setBtnClick(false);
              setHidenWord([]);
              setWrongLetters([]);
              setEror(0);
              setCorectLetters([]);
              setHelpLetter("");
              setCorect(-1);
            }}
          >
            Play Again
          </button>
        </div>
      ) : null}
      {corect === hidenWord.length ? (
        <div className="GameOver">
          <h1>You Win!!!</h1>
          <button
            onClick={() => {
              setBtnClick(false);
              setHidenWord([]);
              setWrongLetters([]);
              setEror(0);
              setCorectLetters([]);
              setHelpLetter("");
              setCorect(-1);
            }}
          >
            Play Again
          </button>
        </div>
      ) : null}
      <Header />
      <HidenWordInput />
      <div className="body">
        <Figure />
        <EnterLetterField />
      </div>
      <HidenWordField />
    </div>
  );
};
export default Hangman;
