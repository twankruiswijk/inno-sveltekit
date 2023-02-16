import type { Post } from './blog.types';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
	const response = await fetch(POST_URL);
	const data = (await response.json()) as Post[];
	return data;
};

export const getPostById = async (id: number): Promise<Post> => {
	const response = await fetch(`${POST_URL}/${id}`);
	const data = (await response.json()) as Post;
	return data;
};
