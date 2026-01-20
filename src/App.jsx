import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayPokemon from './components/DisplayPokemon.jsx'
import PokemonGameLogic from './components/PokemonGameLogic.jsx'
import githubIcon from './assets/github-mark-white.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="cards-container">
      <PokemonGameLogic />
     </div>
          <div id="github-credits">
            made by NickW16
            <a href="https://github.com/NickW16/Memory-Card-Game" target="_blank">
            <img src={githubIcon} className="github-icon"  alt="github" />
            </a>
          </div>
    </>
  )
}

export default App
