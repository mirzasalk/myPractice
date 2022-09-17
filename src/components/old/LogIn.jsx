import React, { useState } from "react";
import "./Login.css";
const LogIn = () => {
  const [sub, setSub] = useState(false);
  const [text, setText] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });
  const [emptyText, setEmptyText] = useState(true);

  const handleFirstName = (event) => {
    setText({ ...text, firstName: event.target.value });
  };
  const handleSecondName = (event) => {
    event.preventDefault();
    setText({ ...text, secondName: event.target.value });
  };
  const handleEmail = (event) => {
    setText({ ...text, email: event.target.value });
  };
  const handleLogIn = (event) => {
    event.preventDefault();
    setSub(true);
    if (text.firstName !== "" && text.secondName !== "" && text.email !== "") {
      setEmptyText(false);
    }
  };
  const handleLogOut = (event) => {
    setSub(false);
    setText({ firstName: "", secondName: "", email: "" });
    setEmptyText(true);
  };
  return (
    <div className="main">
      {emptyText ? (
        <div className="forma">
          <form>
            <input
              value={text.firstName}
              type="text"
              placeholder="First name..."
              onChange={handleFirstName}
            />
            {sub && text.firstName === "" ? (
              <span>Please enter your firstName !!!</span>
            ) : null}

            <input
              value={text.secondName}
              type="text"
              placeholder="Second name"
              onChange={handleSecondName}
            />
            {sub && text.secondName === "" ? (
              <span>Please enter your secondName !!!</span>
            ) : null}
            <input
              type="email"
              placeholder="Email"
              value={text.email}
              onChange={handleEmail}
            />
            {sub && text.email === "" ? (
              <span>Please enter your email !!!</span>
            ) : null}
          </form>
          <button onClick={handleLogIn}>Log in</button>
        </div>
      ) : (
        <div>
          <div className="logOutB">
            <div className="forma">
              <p>Ime: {text.firstName}</p>
              <p>Prezime: {text.secondName}</p>
              <p>Email: {text.email}</p>
            </div>

            <button onClick={handleLogOut}>Log out</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default LogIn;
