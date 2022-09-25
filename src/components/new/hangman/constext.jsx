import React from "react";
import { useState, createContex } from "react";

export const myContext = React.createContext();

const Context = (props) => {
  const [hidenWord, setHidenWord] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [corectLetters, setCorectLetters] = useState([]);
  const [eror, setEror] = useState(0);
  const [btnClick, setBtnClick] = useState(false);
  const [helpLetter, setHelpLetter] = useState("");
  const [corect, setCorect] = useState(-1);
  return (
    <myContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default Context;
