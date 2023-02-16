<script lang="ts">
	import Comments from './comments.svelte';
	import type { ActionData } from './$types';
	import type { PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
</script>

<Comments {form} comments={data.comments} />
