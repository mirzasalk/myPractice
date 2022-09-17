import { useEffect, useState } from "react";
import ContactListCard from "./ContactListCard";
const ContactList = () => {
  const [listContact, setListContact] = useState([]);
  const [fet, setFet] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setListContact(data.results);
        console.log(listContact);
      });
  }, [fet]);

  return (
    <div>
      {listContact.map((item, index) => {
        return (
          <ContactListCard
            key={index}
            name={`${item.name.title} ${item.name.first} ${item.name.last}`}
            email={item.email}
            img={item.picture.medium}
            age={item.dob.age}
          />
        );
      })}
      <button
        onClick={() => {
          setFet(!fet);
        }}
      >
        fetch
      </button>
    </div>
  );
};
export default ContactList;
