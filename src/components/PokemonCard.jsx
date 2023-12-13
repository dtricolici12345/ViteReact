import React from 'react';
import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};

export default PokemonCard;