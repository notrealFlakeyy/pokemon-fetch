import React, { useState, ChangeEvent } from 'react';

interface SearchBarProps {
    onSearch: (pokemonName: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="flex items-center space-x-2">
            <input
                type="text"
                placeholder="Enter Pokémon name"
                value={searchTerm}
                onChange={handleInputChange}
                className="border px-4 py-2 rounded"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
                Search
            </button>
        </div>
    );
};

export default SearchBar;