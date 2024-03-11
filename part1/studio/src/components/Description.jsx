import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor(){
    let authorLink = 'https://www.indianhealthyrecipes.com/andhra-sambar-recipe-how-to-make-south-indian-sambar/';
    let authorPhoto = 'https://cdn.pixabay.com/photo/2015/10/18/20/15/woman-995164_1280.png';
    let authorName = 'Swasti';
    return (
        <div className= {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Author Image" className={styles.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Recipe for Sambar</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render(){
        return(
            <div > 
                <div style={{textAlign: "center"}}>
                    <h1>Sambar</h1>
                    <p>Sambar recipe made easy and gives you a perfect South Indian taste. Serve this sambar with steamed rice, idli, dosa or vada.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;