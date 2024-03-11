import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Howl's Moving Castle", "Movie 3", "Movie 4"];
      return (
      <div style={{border: "5px solid black", padding: "1.5rem"}}>
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol>
            {movies.map((movie, index) => <li key={index} className={classes.movieText}>{movie}</li>)}
         </ol>
      </div>
      );
   }
}

export default MovieList;