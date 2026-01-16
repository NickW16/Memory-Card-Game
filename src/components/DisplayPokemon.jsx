import { useEffect, useState } from 'react'

export default function DisplayPokemon({name = "pikachu"}) {
   const [pokemon, setPokemon] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchPokemon = async () => {
         try {
            setLoading(true); //reset loading state
            setError(null); //clear previous errors

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

            if (!response.ok) { //if fails to fetch...
               throw new Error ('Failed to fetch Pokémon');
            }
            const data = await response.json();
            setPokemon(data);
            setError(null); // clear error on success
         } catch (err) {
            setPokemon(null); // clear pokemon on error
            setError(err.message);
         } finally {
            setLoading(false);
         }
      };
      fetchPokemon();

   }, [name]);

   if(loading) return <div>Loading Pokémon...</div>;
   if(error) return <div>Error, could not fetch API...</div>;
   
   return (
      <div className="pokemon-card">
         <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
         <img
            className="pokemon-img"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
         />
      </div>
   )
}

