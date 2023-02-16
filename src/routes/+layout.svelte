<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<QueryClientProvider client={data.queryClient}>
	<nav>
		<li><a href="/">Home</a></li>
		<li><a href="/blog">Blog</a></li>
	</nav>
	<slot />
</QueryClientProvider>
