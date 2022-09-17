import { useState } from "react";
import "./calculator2.css";

const Calculator2 = () => {
  let o2 = "";
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [history, setHistory] = useState([]);
  const [operand, setOperator] = useState("");
  const createOperand = (br) => {
    {
      if (op1 === {}) setOperator(operand + br);
      else {
        setOperator(operand + br);
      }
    }
  };

  const sabiranje = () => {
    if (operand === "" && op1 !== "") {
      let o1 = op1;
      setOp1("");
      setHistory([...history, o1, "+"]);
    } else {
      setOp1("");
      setHistory([...history, operand, "+"]);
    }
    setOperator("");
  };
  const oduzimanje = () => {
    if (operand === "" && op1 !== "") {
      let o1 = op1;
      setOp1("");
      setHistory([...history, o1, "-"]);
    } else {
      setOp1("");
      setHistory([...history, operand, "-"]);
    }
    setOperator("");
  };
  const deljenje = () => {
    if (operand === "" && op1 !== "") {
      let o1 = op1;
      setOp1("");
      setHistory([...history, o1, "/"]);
    } else {
      setOp1("");
      setHistory([...history, operand, "/"]);
    }
    setOperator("");
  };
  const mnozenje = () => {
    if (operand === "" && op1 !== "") {
      let o1 = op1;
      setOp1("");
      setHistory([...history, o1, "*"]);
    } else {
      setOp1("");
      setHistory([...history, operand, "*"]);
    }
    setOperator("");
  };
  const jednako = () => {
    let Pop = operand;
    let racun = history.filter((item) => {
      return true;
    });
    racun.push(Pop);
    racun = racun.join(" ");
    setHistory([]);
    setOperator("");

    setOp1(eval(racun));
    setOp2(op1);
  };

  // const jednako = () => {
  //   for (let i = 0; i < history.length; i++) {
  //     if (history[i] === "/") {
  //       setHistory([...history, operand]);
  //       console.log(history[i - 1]);
  //       console.log(history[i + 1]);
  //       console.log(parseInt(history[i - 1] / parseInt(history[i + 1])));
  //     }
  //   }
  // };
  // const jednako = () => {
  //   switch (operacija) {
  //     case "+":
  //       setOperacija("");
  //       break;
  //     case "-":
  //       setOp2(parseFloat(op1) - parseFloat(operand));
  //       setOperator("");
  //       setOp1("");
  //       setOperacija("");
  //       break;
  //     case "/":
  //       setOp2(parseFloat(op1) / parseFloat(operand));

  //       break;
  //     case "*":
  //       break;
  //   }
  // };
  const clear = () => {
    setOperator("");
    setHistory([]);
    setOp1();
  };
  return (
    <div className="calculator">
      <div className="results">
        {operand === "" ? op1 : null}
        {history}
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
          clear();
        }}
      >
        Clear
      </div>
    </div>
  );
};
export default Calculator2;
