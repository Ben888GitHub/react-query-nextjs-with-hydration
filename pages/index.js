import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { fetchPosts } from '../api';
import Link from 'next/link';

export const getStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('posts', fetchPosts);
	// const dehydratedState = dehydrate(queryClient);
	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		}
	};
};

export default function Home() {
	const { data } = useQuery('posts', fetchPosts);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					NextJs React Query with Dehydrated State
				</h1>
				<br />
				{data &&
					data?.map((post) => (
						<div key={post.id}>
							<Link href={`/${post.id}`}>{post.title}</Link>
							{/* <h3>{post.title}</h3> */}
							<br />
							<br />
						</div>
					))}
			</main>
		</div>
	);
}
