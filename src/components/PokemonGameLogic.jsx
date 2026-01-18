import { useEffect, useState } from 'react';
import DisplayPokemon from './DisplayPokemon.jsx';

export default function PokemonGameLogic() { 
    const [pokemon, setPokemon] = useState ([
      "pikachu",
      "bulbasaur",
      "charmander",
      "squirtle",
      "butterfree",
      "pidgeotto",
      "arbok",
      "clefairy",
      "ninetales",
      "slowbro",
      "gengar",
      "onix",
   ]);

   const [selectedPokemon, setSelectedPokemon] = useState([]);
   const [gameScore, setGameScore] = useState(0);

   const shufflePokemon = () => {
      setPokemon(prev => {
         const shuffled = [...prev];
         return shuffled.sort(() => Math.random() -0.5);
      });
   };

   const cardClick = (pokemonName) => {
      setSelectedPokemon(prev => {
      // adds to array if its not already in it
         if (!prev.includes(pokemonName)) {
            return[...prev, pokemonName]; // add new pokemon
         } else {
            return []; //clear the array if miss
         }
      }); 
      // just for testing...
      // alert (`You selected ${pokemonName}`);
   };

    useEffect(() => {
      setGameScore(selectedPokemon.length);
   },[selectedPokemon]);


   // THIS CODE HAD PROBLEMS WITH RE-RENDERING THE BUTTONS EVERYTIME A BUTTON WAS CLICKED //

//  const PokemonCards = () => {
//     return pokemon.map((pokemonName, index) => (
//       <button 
//         key={index}
//         className="pokemon-button"
//         onClick={() => cardClick(pokemonName)}
//        >
//         <DisplayPokemon name={pokemonName} />
//        </button>
//     ))
//   }
//
//   const [selectedPokemon, setSelectedPokemon] = useState([]);
//   const [gameScore, setGameScore] = useState(0);
//
//   const cardClick = (pokemonName) => {
//      setSelectedPokemon(prev => {
//      // adds to array if its not already in it
//         if (!prev.includes(pokemonName)) {
//            return[...prev, pokemonName]; // add new pokemon
//         } else {
//            return []; //clear the array if miss
//         }
//      }); 
//      // just for testing...
//      // alert (`You selected ${pokemonName}`);
//   };
//
//   useEffect(() => {
//      setGameScore(selectedPokemon.length);
//   },[selectedPokemon]);
//
//   const ArrayShow = () => {
//      return <div>
//         <h3>Current Score:</h3>
//         <p>{gameScore}</p>
//         </div>
   // IT IS JUST BETTER TO RENDER DIRECTLY INSTEAD OF DEFINING COMPONENTS BEFORE //

      return (
            <div>

              <div>
               <h3>Current Score</h3>
               <p>{gameScore}</p>
              </div>

              <div id="cards-container">
                  {pokemon.map((pokemonName, index) => (
                     <button
                        key={pokemonName}
                        type="button"
                        className="pokemon-button"
                        onClick={() => {cardClick(pokemonName); shufflePokemon()}}
                     >
                     <DisplayPokemon name={pokemonName} />
                     </button>
                  ))}
              </div>

            </div> 
      )
}
