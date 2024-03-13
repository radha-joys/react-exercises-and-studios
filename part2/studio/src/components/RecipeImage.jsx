import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
   return (
    <div>
      {recipedata.map((recipe => <img className="recipeImage" src={recipe.recipeImage} alt={recipe.name} />))}
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 