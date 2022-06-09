import Link from 'next/link';

function PokemonSearchResult({ pokemons }) {
	console.log(pokemons);

	return (
		<div className="search-grid">
			{pokemons.map((pokemon) => (
				<Link href={`/pokemon/${pokemon}`} key={pokemon}>
					<a>
						<div className="pokemon-card">{pokemon}</div>
					</a>
				</Link>
			))}
		</div>
	);
}

export default PokemonSearchResult;
