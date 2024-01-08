import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PokemonDetails from './components/PokemonDetails';

const App: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<any | null>(null);

  const fetchPokemonData = async (pokemonName: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      setPokemonData(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Pokémon Search</h1>
      <SearchBar onSearch={fetchPokemonData} />
      {pokemonData && <PokemonDetails pokemon={pokemonData} />}
    </div>
  );
};

export default App;