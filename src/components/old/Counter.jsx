import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  function inc() {
    setCounter((count) => count + 1);
  }
  function dec() {
    setCounter((count) => count - 1);
  }
  return (
    <div className={props.color}>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
      <h1>{counter} </h1>
    </div>
  );
}
export default Counter;
