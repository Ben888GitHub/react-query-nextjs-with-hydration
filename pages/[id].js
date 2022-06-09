import axios from 'axios';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchPost } from '../api';

export const getStaticProps = async ({ params }) => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('posts', () => fetchPosts(params.id));

	// console.log(pageData);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			params
		}
		// revalidate: 60
	};
};

export const getStaticPaths = async () => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts`
	);
	// console.log(data.slice(0, 5));
	const paths = data.map((post) => ({
		params: { id: post.id.toString() }
	}));

	return {
		paths,
		fallback: false
	};
};

function Post({ params }) {
	const { data, isLoading, error } = useQuery(
		['posts', params.id],
		() => fetchPost(params.id),
		{
			enabled: !!params.id,
			refetchOnWindowFocus: false,
			keepPreviousData: true
		}
	);

	isLoading && <p>Loading...</p>;

	error && <p>Error!</p>;

	return (
		<>
			{data && (
				<>
					<h3>{data?.title}</h3>
					<h3>{data?.body}</h3>
				</>
			)}
		</>
	);
}

export default Post;
