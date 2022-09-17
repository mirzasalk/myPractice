import "./card.css";
import Counter from "./Counter";
function Card(props) {
  return (
    <div className="card">
      <img src={props.url} alt="logo" className="logo" />
      <h1>{props.title}</h1>
      <p>{props.subtittle}</p>
      <button className="button1">
        <h3>{props.buttonText}</h3>
      </button>
      <Counter />
    </div>
  );
}
export default Card;
