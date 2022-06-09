import axios from 'axios';

const fetchPosts = async (id) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts`
	);

	return data.slice(0, 10);
};

const fetchPost = async (id) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);

	return data;
};

const fetchPokemon = async (id) => {
	const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

	return data;
};

const fetchPokemons = async () => {
	const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);

	return data.results;
};

const getSpaceXData = async () =>
	await await fetch('https://api.spacexdata.com/v4/launches/latest').then((r) =>
		r.json()
	);

export { fetchPosts, fetchPost, fetchPokemon, getSpaceXData };
