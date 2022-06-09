import { ALL_POKEMON_SPECIES } from '../constants/pokemonSpecies';

const filteredPokemons = [];

const searchPokemons = (query) => {
	// console.log(query);
	const filteredRes = ALL_POKEMON_SPECIES.filter(
		(pokemon) =>
			// console.log(pokemon);
			// pokemon?.name?.include(query.toLowerCase()).map(({ name }) => name);
			pokemon?.name?.toLowerCase().includes(query)
		// .map(({ name }) => name)
		// console.log(pokemon?.name?.toLowerCase().includes(query));
	);
	console.log(filteredRes);
	// filteredPokemons = filteredRes;
	return filteredRes;
};

export { filteredPokemons, searchPokemons };
