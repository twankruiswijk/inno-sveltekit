import { getPostsQuery } from '../../services/blog/blog.queries';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ parent }) => {
	const { queryClient } = await parent();
	await queryClient.prefetchQuery(getPostsQuery);
};
