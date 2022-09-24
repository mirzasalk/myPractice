import "./style.css";
import Figure from "../figure/Figure";
import Header from "../header/Header";
import { useContext, useEffect, useState } from "react";
import HidenWordInput from "../HidenWordInput/HidenWordInput";
import { myContext } from "../constext";
import HidenWordField from "../HidenWordField/HidenWordField";

const Hangman = () => {
  const { hidenWord } = useContext(myContext);
  return (
    <div className="main">
      <Header />
      <HidenWordInput />
      <div className="body">
        <Figure />
      </div>
      <HidenWordField />
    </div>
  );
};
export default Hangman;
