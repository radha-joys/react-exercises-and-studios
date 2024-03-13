import recipedata from "./recipe.json";

function RecipeName() {
  return (
    <>
      {recipedata.map((recipe) => <h1>{recipe.name}</h1>)}
    </>
  );
}

export default RecipeName;

//import return the name of the recipe as a level 1 header