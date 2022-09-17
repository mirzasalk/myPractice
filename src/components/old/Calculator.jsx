import { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState();
  const [operacija, setOperacija] = useState("");
  const [operand, setOperator] = useState("");

  const createOperand = (br) => {
    {
      setOperator(operand + br);
    }
  };

  const sabiranje = () => {
    setOp1(operand);
    setOperator("");
    setOperacija("+");
  };
  const oduzimanje = () => {
    setOp1(operand);
    setOperator("");
    setOperacija("-");
  };
  const deljenje = () => {
    setOp1(operand);
    setOperator("");
    setOperacija("/");
  };
  const mnozenje = () => {
    setOp1(operand);
    setOperator("");
    setOperacija("*");
  };
  const jednako = () => {
    switch (operacija) {
      case "+":
        setOp2(parseFloat(op1) + parseFloat(operand));
        setOperator("");
        setOp1("");
        setOperacija("");
        break;
      case "-":
        setOp2(parseFloat(op1) - parseFloat(operand));
        setOperator("");
        setOp1("");
        setOperacija("");
        break;
      case "/":
        setOp2(parseFloat(op1) / parseFloat(operand));
        setOperator("");
        setOp1("");
        setOperacija("");
        break;
      case "*":
        setOp2(parseFloat(op1) * parseFloat(operand));
        setOperator("");
        setOp1("");
        setOperacija("");
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="results">
        {op2}
        {op1}
        {operacija}
        {operand}
      </div>
      <div className="rows">
        <div className="number" onClick={() => createOperand(1)}>
          1
        </div>
        <div className="number" onClick={() => createOperand(2)}>
          2
        </div>
        <div className="number" onClick={() => createOperand(3)}>
          3
        </div>
        <div
          className="operation"
          onClick={() => {
            sabiranje();
          }}
        >
          +
        </div>
      </div>
      <div className="rows">
        <div className="number" onClick={() => createOperand(4)}>
          4
        </div>
        <div className="number" onClick={() => createOperand(5)}>
          5
        </div>
        <div className="number" value={6} onClick={() => createOperand(6)}>
          6
        </div>
        <div
          className="operation"
          onClick={() => {
            oduzimanje();
          }}
        >
          -
        </div>
      </div>
      <div className="rows">
        <div className="number" onClick={() => createOperand(7)}>
          7
        </div>
        <div className="number" onClick={() => createOperand(8)}>
          8
        </div>
        <div className="number" onClick={() => createOperand(9)}>
          9
        </div>
        <div
          className="operation"
          onClick={() => {
            mnozenje();
          }}
        >
          *
        </div>
      </div>
      <div className="rows">
        <div className="number" onClick={() => createOperand(".")}>
          .
        </div>
        <div className="number" value={0} onClick={() => createOperand(0)}>
          0
        </div>
        <div
          className="number"
          onClick={() => {
            jednako();
          }}
        >
          =
        </div>
        <div
          className="operation"
          onClick={() => {
            deljenje();
          }}
        >
          /
        </div>
      </div>
      <div
        className="clear"
        onClick={() => {
          setOperator("");
          setOp1("");
          setOp2("");
          setOperacija("");
        }}
      >
        Clear
      </div>
    </div>
  );
};
export default Calculator;
