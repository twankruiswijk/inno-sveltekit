<script lang="ts">
	import type { ActionData } from './$types';
	import type { PageData } from './$types';

	export let form: ActionData;
	export let comments: PageData['comments'];
</script>

<form method="POST">
	<select>
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">7</option>
	</select>
	<label>
		Email
		<input name="comment" type="text" />
	</label>
	<button>Send</button>
</form>

{#if form?.success}
	<p>Form submitted successfully</p>
{/if}
{#if form?.error}
	<p>Error submitting form</p>
{/if}

<p>{comments}</p>
