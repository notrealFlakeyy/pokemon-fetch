import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PokemonDetails from './components/PokemonDetails';

const App: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [capturedPokemons, setCapturedPokemons] = useState<string[]>([]);

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

  const capturePokemon = () => {
    if (pokemonData && Math.random() < 0.1) {
      setCapturedPokemons((prevPokemons) => [...prevPokemons, pokemonData.name]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Pokémon Search</h1>
      <SearchBar onSearch={fetchPokemonData} />
      {pokemonData && <PokemonDetails pokemon={pokemonData} />}
      {pokemonData && (
        <button onClick={capturePokemon} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Capture Pokémon (10% chance)
        </button>
      )}
      {capturedPokemons.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Captured Pokémon</h2>
          <ul>
            {capturedPokemons.map((capturedPokemon, index) => (
              <li key={index}>{capturedPokemon}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;