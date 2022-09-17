import { isValidElement, useState } from "react";
import "./shopingList.css";
const ShopingList = () => {
  const [br, setBr] = useState(0);
  const [inputText, setInputText] = useState();
  const [listOfItem, setListOfItem] = useState([]);

  const HandleText = (e) => {
    setInputText(e.target.value);
  };
  const HandleAdd = () => {
    setListOfItem([
      ...listOfItem,
      {
        text: inputText,
        complete: false,
        count: 1,
        id: Math.floor(Math.random() * 10000),
      },
    ]);
    setInputText("");
    setBr(br + 1);
  };

  const handleChecked = (id) => {
    const newList = listOfItem.map((item) => {
      if (id === item.id && item.complete) {
        item.complete = false;
        setBr(br + item.count);
      } else if (id === item.id && !item.complete) {
        item.complete = true;
        setBr(br - item.count);
      }

      return item;
    });
    setListOfItem(newList);
  };

  const handleCoundUp = (id) => {
    const newList = listOfItem.map((item) => {
      if (id === item.id && !item.complete) {
        item.count = item.count + 1;
        setBr(br + 1);
      }
      return item;
    });
    setListOfItem(newList);
  };
  const handleCoundDown = (id) => {
    const newList = listOfItem.map((item) => {
      if (id === item.id && item.count > 0 && !item.complete) {
        item.count = item.count - 1;
        setBr(br - 1);
      }
      return item;
    });
    setListOfItem(newList);
  };

  return (
    <div className="main">
      <div className="inputField">
        <input type="text" value={inputText} onChange={HandleText} />
        <img className="addImg" src="plus.png" alt="plus" onClick={HandleAdd} />
      </div>
      {listOfItem.map((item) => {
        return (
          <div className={!item.complete ? "item" : "completed"}>
            <div className="textAndCheck">
              {!item.complete ? (
                <img
                  className="iconchecked"
                  src="unchecked.png"
                  alt="unchecked"
                  onClick={() => {
                    handleChecked(item.id);
                  }}
                />
              ) : (
                <img
                  className="iconchecked"
                  src="checked.png"
                  alt="checked"
                  onClick={() => {
                    handleChecked(item.id);
                  }}
                />
              )}
              <p className="nameOfItem">{item.text}</p>
            </div>
            <div className="count">
              <img
                className="directionLeft"
                src="left.png"
                alt="left"
                onClick={() => {
                  handleCoundDown(item.id);
                }}
              />
              {item.count}
              <img
                className="directionRight"
                src="right.png"
                alt="right"
                onClick={() => {
                  handleCoundUp(item.id);
                }}
              />
            </div>
          </div>
        );
      })}
      <div className="total">
        <button
          onClick={() => {
            setListOfItem([]);
            setBr(0);
          }}
        >
          Clear
        </button>
        <div>Total:{br}</div>
      </div>
    </div>
  );
};
export default ShopingList;
