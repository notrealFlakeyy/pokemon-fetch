import React from 'react';

interface PokemonDetailsProps {
    pokemon: {
        name: string;
        sprites: {
            front_default: string;
        };
        types: {
            type: {
                name: string;
            };
        }[];
        height: number;
        weight: number;
    };
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
    return (
        <div className="mt-4">
            <h2 className="text-2xl font-semibold">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="mt-2" />
            <p className="mt-2">
                <strong>Type:</strong> {pokemon.types.map((type) => type.type.name).join(', ')}
            </p>
            <p>
                <strong>Height:</strong> {pokemon.height / 10} m
            </p>
            <p>
                <strong>Weight:</strong> {pokemon.weight / 10} kg
            </p>
        </div>
    );
};

export default PokemonDetails;