import { RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";
import React from "react";

export const MyContext = React.createContext();

const Context = (props) => {
  const [Notes, setNotes] = useState([]);
  return (
    <MyContext.Provider value={{ Notes, setNotes }}>
      {props.children}
    </MyContext.Provider>
  );
};
export default Context;
