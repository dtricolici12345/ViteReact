import React from 'react';

function PokemonCard(props) {
    const { pokemon } = props;

    return (
        <div className="pokemon-card">
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <h2>{pokemon.name}</h2>
        </div>
    );
}

export default PokemonCard;
