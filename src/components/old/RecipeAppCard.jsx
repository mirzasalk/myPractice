import "./recipeApp.css";
const RecipeAppCard = (props) => {
  return (
    <div className="recipes">
      <h1>{props.lab}</h1>

      <img src={props.img} alt="Slika" />

      <h3>Origin: {props.por}</h3>
      <h3>Calories: {props.cal}</h3>
      <div>
        {props.sast.map((item, index) => {
          return (
            <p key={index} className="sastojak">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default RecipeAppCard;
