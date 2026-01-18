import { useEffect, useState, memo } from 'react'

// this is to prevent reloading after every click
// making a single api call
const pokemonCache ={};

const DisplayPokemon = memo(function DisplayPokemon({name = "pikachu"}) {
   const [pokemon, setPokemon] = useState(pokemonCache[name] || null);
   const [loading, setLoading] = useState(!pokemonCache[name]);
   const [error, setError] = useState(null);

   useEffect(() => {
      // detect if data is already cached
      if (pokemonCache[name]) {
         setPokemon(pokemonCache[name]);
         setLoading(false);
         return;
      }

      const fetchPokemon = async () => {
         try {
            setLoading(true); //reset loading state
            setError(null); //clear previous errors

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);

            if (!response.ok) { //if fails to fetch...
               throw new Error ('Failed to fetch Pokémon');
            }
            const data = await response.json();
            pokemonCache[name] = data; //cache data
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
});

export default DisplayPokemon;

