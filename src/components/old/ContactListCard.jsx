import { useState } from "react";
import "./contactList.css";
const ContactListCard = (props) => {
  const [btn, setBtn] = useState(true);

  return (
    <div className="contact-card">
      <img src={props.img} alt="profilna" />
      <div className="info">
        <p>name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setBtn(!btn)}>
          {btn ? "Show age" : <p>Hide age {props.age}</p>}
        </button>
      </div>
    </div>
  );
};
export default ContactListCard;
