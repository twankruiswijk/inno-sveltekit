<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const post = data.post
</script>


<h1>{post.title}</h1>
<p>{post.body}</p>

