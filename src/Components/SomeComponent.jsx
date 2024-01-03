import  { useState } from 'react';
import axios from 'axios';

const SomeComponent = () => {
    const [responseData, setResponseData] = useState(null);


    const handleClick = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0');
            setResponseData(response.data.results);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>Fetch Pokemon</button>
            {responseData && (
                <ol>
                    {responseData.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default SomeComponent;
