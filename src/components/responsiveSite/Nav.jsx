import { Link } from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="logo">TRVL</h1>
      <div className="menuNav">
        <Link className="linkNav" to="/">
          Home
        </Link>
        <Link className="linkNav" to="/services">
          Service
        </Link>
        <Link className="linkNav" to="/product">
          Product
        </Link>
        <button className="navBtn">SING UP</button>
      </div>
    </div>
  );
};

export default Nav;
