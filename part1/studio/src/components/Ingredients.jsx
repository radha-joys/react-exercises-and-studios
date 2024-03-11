import styles from './Ingredients.module.css';

export const RecipeIngredients = () => {
    const ingredients = ["3/4 cup Toor Dal", "1 to 2 tbsp Tamarind Paste", "1 tbsp Jaggery", "1 Onion", "1 Tomato", "1 Carrot", "1 Drumstick", "2 to 3 Bhindi", "1 Chili", "Salt", "Red Chilli Powder", "Turmeric", "Coriander Leaves", "Sambar Powder", "Oil"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
        </div>
    )
}