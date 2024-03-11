import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeDescription from './components/Description';
import { RecipeIngredients } from './components/Ingredients';
import { RecipePhoto } from './components/Photos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RecipePhoto />
      <div>
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </div>
  )
}

export default App
