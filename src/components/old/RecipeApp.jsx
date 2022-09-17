import RecipeAppCard from "./RecipeAppCard";
import "./recipeApp.css";
import { useState } from "react";
import { useEffect } from "react";
const RecipeApp = () => {
  const [text, setText] = useState("");
  const [lista, setLista] = useState([]);
  const [fetch1, setFetch1] = useState(true);

  const APP_ID = "41ab0afe";
  const APP_KEY = "6be55deb709d8b632ff03bca0147b667	";

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${text}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.hits);
        setLista(data.hits);
      });
  }, [fetch1]);

  const HandleSearch = () => {
    setFetch1(!fetch1);
  };

  return (
    <div className="main">
      <div className="input">
        <input
          placeholder="Search..."
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={HandleSearch}>Search</button>
      </div>
      <div className="cards">
        {lista.map((item, index) => {
          return (
            <div key={index} className="polje">
              <RecipeAppCard
                lab={item.recipe.label}
                sast={item.recipe.ingredientLines}
                por={item.recipe.cuisineType}
                cal={parseInt(item.recipe.calories)}
                img={item.recipe.image}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RecipeApp;
