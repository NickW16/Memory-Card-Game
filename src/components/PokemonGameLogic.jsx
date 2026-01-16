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

  const PokemonCards = () => {
     return pokemon.map((pokemonName, index) => (
         <DisplayPokemon key={index} name={pokemonName} />
     ))
   }


      return (
           <div id="cards-container">
               <PokemonCards />              
           </div>

      )
}
