import { useContext, React } from "react";
import { myContext } from "../constext";
import "./HidenWordField.css";

const HidenWordField = () => {
  const { hidenWord } = useContext(myContext);
  let word = [];
  for (let i = 0; i < hidenWord.length; i++) {
    word.push(hidenWord[i]);
  }
  console.log(word);
  return (
    <div className="HidenWordField">
      {word.map((item, index) => {
        if (item === " ") {
          return (
            <div key={index} className="letterFieldSpace">
              {item}
            </div>
          );
        } else {
          return (
            <div key={index} className="letterField">
              {item}
            </div>
          );
        }
      })}
    </div>
  );
};

export default HidenWordField;
