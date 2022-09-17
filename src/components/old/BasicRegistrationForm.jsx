import { useState } from "react";
import "./BasicForm.css";
const BasicRegistrationForm = () => {
  const [value, setValue] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });

  const handleFirstName = (event) => {
    setValue({ ...value, firstName: event.target.value });
  };

  const handleSecondName = (event) => {
    setValue({ ...value, secondName: event.target.value });
  };

  const handleEmail = (event) => {
    setValue({ ...value, email: event.target.value });
  };

  const [sub, setSub] = useState(false);

  const [em, setEm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSub(true);
    if (value.firstName && value.secondName && value.email) {
      setEm(true);
    }
    console.log(em, sub);
  };
  return (
    <div className="m">
      {sub && em ? (
        <div className="window">You have successfully registered.</div>
      ) : null}

      <form className="formMain">
        <input
          type="text"
          placeholder="First Name"
          value={value.frstName}
          onChange={handleFirstName}
        />
        {!value.firstName && sub ? (
          <span>You have not entered your firstname !</span>
        ) : null}

        <input
          type="text"
          placeholder="Second Name"
          value={value.secondName}
          onChange={handleSecondName}
        />
        {!value.secondName && sub ? (
          <span>You have not entered your secontname !</span>
        ) : null}
        <input
          type="text"
          placeholder="Email"
          value={value.email}
          onChange={handleEmail}
        />
        {
          (!value.email,
          sub ? <span>You have not entered your email !</span> : null)
        }

        <button className="but" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};
export default BasicRegistrationForm;
