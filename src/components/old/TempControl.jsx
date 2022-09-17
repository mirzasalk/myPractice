import { useState } from "react";
import "./temp.css";
const TempControl = (props) => {
  let c = "white";
  const [tempCounter, setTempCounter] = useState(0);
  function inc() {
    setTempCounter((count) => count + 1);
  }
  function dec() {
    setTempCounter((count) => count - 1);
  }
  if (tempCounter < 0) {
    c = "blue";
  }
  if (tempCounter > 0) {
    c = "orange";
  }

  return (
    <div className={c}>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <h1>{tempCounter} °C</h1>
    </div>
  );
};

export default TempControl;
