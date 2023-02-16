import { getPosts } from './blog.api';

export const getPostQuery = {
	queryKey: ['posts'],
	queryFn: getPosts,
	onError: (err: Error) => err
};
