import { useState } from 'react';
import '../index.css';

const RecipeAuthor = () => {
   let authorLink = "https://thecozycook.com/stovetop-mac-and-cheese/";
   let authorPhoto = "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg";
   let authorName = "Stephanie Melchione";

   return (
      <div>
         <img src={authorPhoto} alt ={authorName} style={{objectFit: "contain", borderRadius: "50%", height: "120px"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Stephanie Melchione Site</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["uncooked macaroni","butter","flour","heavy cream","milk"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredients.map((item, index) => <li key={index}>{item}</li>)}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <> 
         <div>
            <h1>Stovetop Mac and Cheese</h1>
            <p>This Creamy Stovetop Mac and Cheese is the BEST 30-minute meal for a busy week. Your family will love it every time!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thecozycook.com/wp-content/uploads/2021/10/Stovetop-Mac-and-Cheese-2.jpg" alt="Stovetop Mac and Cheese" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div>
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
