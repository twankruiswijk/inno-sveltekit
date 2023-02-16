<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { getPostQuery } from '../../../services/blog/blog.queries';
	import type { PageData } from './$types';

	export let data: PageData;

	const post = createQuery(getPostQuery(data.postId));
</script>

{#if $post.status === 'loading'}
	<span>Loading...</span>
{:else if $post.status === 'error'}
	<span>Error: {$post.error.message}</span>
{:else}
	<h1>{$post.data.title}</h1>

	{$post.data.body}
{/if}
