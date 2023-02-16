import { getPostById, getPosts } from './blog.api';
import type { Post } from './blog.types';

export const getPostsQuery = {
	queryKey: ['posts'],
	queryFn: getPosts,
	onError: (err: Error) => err
};

export const getPostQuery = (postId: Post['id']) => ({
	queryKey: ['post', postId],
	queryFn: ({ queryKey }: { queryKey: string[] }) => getPostById(Number(queryKey[1])),
	onError: (err: Error) => err
});
