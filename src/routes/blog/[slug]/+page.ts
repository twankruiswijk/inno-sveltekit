import { getPostQuery } from '../../../services/blog/blog.queries';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ parent, params }) => {
	const { queryClient } = await parent();

	const postId = params.slug;

	await queryClient.prefetchQuery(getPostQuery(postId));

	return { postId };
};
