import { useState } from "react";
import "./navBar.css";
const NavBar = () => {
  const [MenuSub, setMenuSub] = useState(false);
  const MenuItems = [
    {
      title: "Home",
      url: "#",
      cName: "home",
    },
    {
      title: "Services",
      url: "#",
      cName: "ser",
    },
    {
      title: "Products",
      url: "#",
      cName: "pro",
    },
    {
      title: "Contact Us",
      url: "#",
      cName: "con",
    },
  ];

  const hendleMenuSub = () => {
    setMenuSub(true);
  };
  const hendleMenuSub2 = () => {
    setMenuSub(false);
  };

  return (
    <div id="Main">
      <div className="nav">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnanWC9hVq92tHoeq8m2cpeDj5861LmdmLw&usqp=CAU"
          alt="logo"
          className="logo"
        />

        <div className="listItem">
          <a className="itemRes" href={MenuItems[0].url}>
            {MenuItems[0].title}
          </a>
          <a className="itemRes" href={MenuItems[0].url}>
            {MenuItems[1].title}
          </a>
          <a className="itemRes" href={MenuItems[0].url}>
            {MenuItems[2].title}
          </a>
          <a className="itemRes" href={MenuItems[0].url}>
            {MenuItems[3].title}
          </a>
          <button className="btn">Sing up</button>
          {!MenuSub ? (
            <img
              href="#"
              src="baricon.png"
              className="menuIcon"
              onClick={hendleMenuSub}
            ></img>
          ) : (
            <img
              className="XIcon"
              href="#"
              src="xicon.png"
              alt="X"
              onClick={hendleMenuSub2}
            ></img>
          )}
        </div>
      </div>
      <div className="mejlinaIdeja">
        {MenuSub ? (
          <div className="dropDownMenu">
            <a className="dropDownMenuA" href={MenuItems[0].url}>
              {MenuItems[0].title}
            </a>
            <a className="dropDownMenuA" href={MenuItems[0].url}>
              {MenuItems[1].title}
            </a>
            <a className="dropDownMenuA" href={MenuItems[0].url}>
              {MenuItems[2].title}
            </a>
            <a className="dropDownMenuA" href={MenuItems[0].url}>
              {MenuItems[3].title}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default NavBar;
