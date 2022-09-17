import "./ToDoList.css";
import { useState } from "react";

const ToDoList = () => {
  let catAll = true;
  let catMarked = false;
  let catUnmarked = false;
  const list2 = [];
  const [list, setList] = useState([]);
  const category = ["All", "Marked", "Unmarked"];
  const [Drop, setDrop] = useState("up");
  const [Categ, setCateg] = useState("All");
  const [InputText, setInputText] = useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleDrop = () => {
    Drop === "up" ? setDrop("down") : setDrop("up");
  };

  const handleList = () => {
    setList([
      ...list,
      {
        text: InputText,
        completed: false,
        id: Math.floor(Math.random() * 10000),
        cat: "Unmarked",
      },
    ]);
    console.log(InputText, list);
  };

  const completeTask = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        item.cat = "Marked";
      }
      return item;
    });

    setList(newList);
  };
  const returnFromCompletedTask = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        item.cat = "Unmarked";
      }
      return item;
    });

    setList(newList);
  };
  const deleteTask = (id) => {
    const newList2 = list.filter((item) => {
      if (item.id === id) {
        return false;
      }
      return true;
    });
    setList(newList2);
  };

  return (
    <div className="main">
      <button onClick={handleList}>Add</button>
      <div className="main1">
        <div className="item">
          <input
            placeholder="Add new task..."
            type="text"
            onChange={handleInputText}
          />
        </div>

        <div className="categoryOfItem">
          <p>{Categ}</p>
          <img src="drop.png" alt="category" onClick={handleDrop} />
        </div>
      </div>
      {Drop === "down" ? (
        <div className="main2">
          <div className="pomocniDiv"></div>
          <div className="category">
            <div className="ParagrafCat" onClick={(event) => setCateg("All")}>
              {category[0]}
            </div>
            <div
              className="ParagrafCat"
              onClick={(event) => setCateg("Marked")}
            >
              {" "}
              {category[1]}
            </div>
            <div
              className="ParagrafCat"
              onClick={(event) => setCateg("Unmarked")}
            >
              {" "}
              {category[2]}
            </div>
          </div>
        </div>
      ) : null}
      <div className="lista">
        {list.map((elem, index) => {
          return (
            <div
              className={
                elem.cat !== Categ && Categ !== "All"
                  ? "non"
                  : elem.completed === false
                  ? "taskNo"
                  : "taskYes"
              }
              key={elem.id}
            >
              <div className="TextOfTask">{elem.text} </div>{" "}
              <div>
                <img
                  src="done.png"
                  alt="done"
                  onClick={
                    elem.cat === "Unmarked"
                      ? () => completeTask(elem.id)
                      : () => returnFromCompletedTask(elem.id)
                  }
                />
                <img
                  src="delete.png"
                  alt="delete"
                  onClick={() => deleteTask(elem.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// to do list
export default ToDoList;
