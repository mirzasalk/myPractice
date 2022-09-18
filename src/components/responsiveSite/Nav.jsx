import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  const [drop, setDrop] = useState(false);
  return (
    <div>
      <div className="nav">
        <Link to={"/"} className="LinkHome">
          <h1 className="logo">TRVL</h1>
        </Link>
        <img
          className="drop"
          src="dropdown.png"
          alt="dropDown"
          onClick={() => {
            setDrop(!drop);
          }}
        />
        <div className="menuNav">
          <div>
            <Link className="linkNav" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="linkNav" to="/services">
              Service
            </Link>
          </div>
          <div>
            <Link className="linkNav" to="/product">
              Product
            </Link>
          </div>
          <button className="navBtn">SING UP</button>
        </div>
      </div>
      {drop ? (
        <div className="dropDiv">
          <div>
            <Link className="linkNav" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="linkNav" to="/services">
              Service
            </Link>
          </div>
          <div>
            <Link className="linkNav" to="/product">
              Product
            </Link>
          </div>
          <button className="navBtn2">SING UP</button>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
