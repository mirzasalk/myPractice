import { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const [br, setBr] = useState(0);

  const [O, setO] = useState(0);
  let t = 0;
  const questions = [
    {
      q1: "Koliko drzava postoji na svetu?",
      A: { ime: "120", isCorect: false },
      B: { ime: "123", isCorect: false },
      C: { ime: "140", isCorect: false },
      D: { ime: "195", isCorect: true },
    },
    {
      q1: "Ko je predsednik/ca Srbije?",
      A: { ime: "Suad Suljevic", isCorect: false },
      B: { ime: "Mejla Ugljanin", isCorect: false },
      C: { ime: "Sulejma Ugljanin", isCorect: false },
      D: { ime: "Aleksandar Vucic", isCorect: true },
    },
    {
      q1: "Ko je najbolji programer u suadovoj grupi?",
      A: { ime: "Irfan Ugljanin", isCorect: false },
      B: { ime: "Mejla Ugljanin", isCorect: true },
      C: { ime: "Samil Plojovic", isCorect: false },
      D: { ime: "Mirza Salkovic", isCorect: false },
    },
    {
      q1: "Ko je najbolji profesor u centru?",
      A: { ime: "camil", isCorect: false },
      B: { ime: "Suad", isCorect: true },
      C: { ime: "Dzemil", isCorect: false },
      D: { ime: "Faris", isCorect: true },
    },
  ];
  const hendleBr = () => {
    setBr(br + 1);
  };
  const hendleO = () => {
    setO(O + 1);
  };

  return (
    <div className="osnova">
      {br + 1 < 5 ? (
        <div className="polje">
          <div className="poljePitanja">
            <div>
              <h2>
                question {br + 1}/{questions.length}
              </h2>
            </div>
            {questions[br].q1}
          </div>
          <div className="poljaOdgovora">
            <button
              onClick={(event) => {
                hendleBr();
                if (questions[br].A.isCorect === true) {
                  hendleO();
                }
              }}
            >
              {questions[br].A.ime}
            </button>
            <button
              onClick={(event) => {
                hendleBr();
                if (questions[br].B.isCorect === true) {
                  hendleO();
                }
              }}
            >
              {questions[br].B.ime}
            </button>
            <button
              onClick={(event) => {
                hendleBr();
                if (questions[br].C.isCorect === true) {
                  hendleO();
                }
              }}
            >
              {questions[br].C.ime}
            </button>
            <button
              onClick={(event) => {
                hendleBr();
                if (questions[br].D.isCorect === true) {
                  hendleO();
                }
              }}
            >
              {questions[br].D.ime}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>You scored {O} of 4</h2>
        </div>
      )}
    </div>
  );
};
export default Quiz;
