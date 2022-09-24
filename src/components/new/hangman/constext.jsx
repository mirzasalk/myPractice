import React from "react";
import { useState, createContex } from "react";

export const myContext = React.createContext();

const Context = (props) => {
  const [hidenWord, setHidenWord] = useState([]);

  return (
    <myContext.Provider value={{ hidenWord, setHidenWord }}>
      {props.children}
    </myContext.Provider>
  );
};

export default Context;
