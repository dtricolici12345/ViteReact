function NavBar({ pokemonList, onPokemonClick }) {
	return (
		<div className="buttonApp">
			{pokemonList.map((pokemon, index) => (
				<button key={index} onClick={() => onPokemonClick(index)}>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

    
    
    
    /*return (
		<div className="buttonApp">
			<button onClick={previous}>Précédent</button>
			<button onClick={next}>Suivant</button>
		</div>
	)
}*/

export default NavBar