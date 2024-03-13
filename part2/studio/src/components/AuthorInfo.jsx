import "./styling.css";
import recipeData from './recipe.json';

function AuthorInfo() {
  return (
    <>
      {recipeData.map((recipe) => {
      <div key={recipe.name}>
      <img className="recipeImage" src={recipe.authorImage} alt={recipe.author} />
      <h3>{recipe.author}</h3>
      <a href={recipe.website} target="blank">URL</a>
    </div>
    })}
    </>
  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 