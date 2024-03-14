import { useState } from 'react';
import './App.css'
import BoardAssignment from './components/BoardAssignment';
import StatusChange from './components/StatusChange';
import RecipeDisplay from './components/Recipe'; 

function App() {

  return (
    <>
      <div className="App">
        <RecipeDisplay />
        <div>
          <BoardAssignment />
          <StatusChange />
        </div>
      </div>
    </>
  )
}

export default App
