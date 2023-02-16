<script lang="ts">
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';
	import { getPostQuery } from '../../services/blog/blog.queries';

	const client = useQueryClient();

	const posts = createQuery(getPostQuery);
</script>

{#if $posts.status === 'loading'}
	<span>Loading...</span>
{:else if $posts.status === 'error'}
	<span>Error: {$posts.error.message}</span>
{:else}
	<ul>
		{#each $posts.data as post}
			<article>
				<a href={`/${post.id}`}>
					{post.title}
				</a>
			</article>
		{/each}
	</ul>
{/if}
