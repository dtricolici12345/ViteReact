function NavBar({ pokemonList, onPokemonClick }) {
	const handleClick = (index) => {
		onPokemonClick(index);
	};



	return (
		<div className="buttonApp">
			{pokemonList.map((pokemon, index) => (
				<button key={index} onClick={() => handleClick(index)}>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;
    
    
    
    /*return (
		<div className="buttonApp">
			<button onClick={previous}>Précédent</button>
			<button onClick={next}>Suivant</button>
		</div>
	)
}*/

