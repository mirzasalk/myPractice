import React from "react";
import { useContext } from "react";
import { myContext } from "../constext";
import "./Figure.css";

const Figure = () => {
  const { eror } = useContext(myContext);
  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {eror > 0 ? <circle cx="140" cy="70" r="20" /> : null}
      {/* <!-- Body --> */}
      {eror > 1 ? <line x1="140" y1="90" x2="140" y2="150" /> : null}
      {/* <!-- Arms --> */}
      {eror > 2 ? <line x1="140" y1="120" x2="120" y2="100" /> : null}
      {eror > 3 ? <line x1="140" y1="120" x2="160" y2="100" /> : null}
      {/* <!-- Legs --> */}
      {eror > 4 ? <line x1="140" y1="150" x2="120" y2="180" /> : null}
      {eror > 5 ? <line x1="140" y1="150" x2="160" y2="180" /> : null}
    </svg>
  );
};

export default Figure;
