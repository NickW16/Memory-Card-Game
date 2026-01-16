import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayPokemon from './components/DisplayPokemon.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pokémon Memory Game!</h1>

     <div id="cards-container">
      <DisplayPokemon name="pikachu" />
      <DisplayPokemon name="bulbasaur" />
      <DisplayPokemon name="charmander" />
      <DisplayPokemon name="squirtle" />
      <DisplayPokemon name="butterfree" />
      <DisplayPokemon name="pidgeotto" />
      <DisplayPokemon name="arbok" />
      <DisplayPokemon name="clefairy" />
      <DisplayPokemon name="ninetales" />
      <DisplayPokemon name="slowbro" />
      <DisplayPokemon name="gengar" />
      <DisplayPokemon name="onix" />
     </div>
    </>
  )
}

export default App
