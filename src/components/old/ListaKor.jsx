import { useState } from "react";
import "./list.css";
const lista = [
  "Mirza Salkovic ",
  "Suad Suljovic ",
  "Irfan Ugljanin ",
  "Mejla Ugljanin ",
  "Ramiz Sabovic ",
];
const ListaKor = () => {
  const [key, setKey] = useState("");
  return (
    <div className="main">
      <input
        type="text"
        id="in"
        placeholder="Search..."
        onChange={(event) => {
          setKey(event.target.value);
        }}
      />
      <div className="listaKon">
        {lista
          .filter((val) => {
            if (key == "") {
              return val;
            } else if (val.toLowerCase().includes(key.toLowerCase())) {
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="mapDiv">
                <p>{val}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ListaKor;
