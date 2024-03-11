import React from 'react';
import classes from './ChoresList.module.css'

export default function ChoresList () {
   let pageTitle = "Todays Chores List";
   let choresList = ["Buy Groceries", "Complete final presentation", "Learn car driving"];
  return (
      <div>
          <h3 className={classes.choresHeading}>{pageTitle}</h3>
          <ul>
            {choresList.map((chore, index) =>  <li key = {index} className={classes.choresText}>{chore}</li>)}
          </ul>
      </div>
  );
}