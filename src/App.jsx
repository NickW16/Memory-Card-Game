import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayPokemon from './components/DisplayPokemon.jsx'
import PokemonGameLogic from './components/PokemonGameLogic.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pokémon Memory Game!</h1>

     <div id="cards-container">
      <PokemonGameLogic />
     </div>
    </>
  )
}

export default App
